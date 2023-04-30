import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, Optional} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StartupService} from '@core';
import {ReuseTabService} from '@delon/abc/reuse-tab';
import {DA_SERVICE_TOKEN, ITokenModel, ITokenService, SocialOpenType, SocialService} from '@delon/auth';
import {_HttpClient, SettingsService, User} from '@delon/theme';
import {environment} from '@env/environment';
import {DoLoginRes} from '@sta';
import {NzTabChangeEvent} from 'ng-zorro-antd/tabs';
import {finalize} from 'rxjs';

@Component({
  selector: 'passport-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [SocialService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserLoginComponent implements OnDestroy {
  form = this.fb.nonNullable.group({
    userName: ['', [Validators.required, Validators.pattern(/^(root|user)$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(root)$/)]],
    remember: [true]
  });

  // #region fields
  error = '';
  type = 0;
  loading = false;
  count = 0;

  // #region get captcha
  interval$: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private settingsService: SettingsService,
    private socialService: SocialService,
    @Optional()
    @Inject(ReuseTabService)
    private reuseTabService: ReuseTabService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private startupSrv: StartupService,
    private http: _HttpClient,
    private cdr: ChangeDetectorRef
  ) {
  }

  // #endregion

  switch({index}: NzTabChangeEvent): void {
    this.type = index!;
  }

  // #endregion
  submit(): void {
    this.error = '';
    if (this.type === 0) {
      const {userName, password} = this.form.controls;
      userName.markAsDirty();
      userName.updateValueAndValidity();
      password.markAsDirty();
      password.updateValueAndValidity();
      if (userName.invalid || password.invalid) {
        return;
      }
    }

    // 默认配置中对所有HTTP请求都会强制 [校验](https://ng-alain.com/auth/getting-started) 用户 Token
    // 然一般来说登录请求不需要校验，因此加上 `ALLOW_ANONYMOUS` 表示不触发用户 Token 校验
    this.loading = true;
    this.cdr.detectChanges();
    this.http
      .post<DoLoginRes>(
        '/login/doLogin',
        {
          //type: this.type,
          username: this.form.value.userName,
          password: this.form.value.password
        },
        null
        /*{
          context: new HttpContext().set(ALLOW_ANONYMOUS, true)
        }*/
      )
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe(res => {
        if (res.message !== '操作成功') {
          this.error = res.message;
          this.cdr.detectChanges();
          return;
        }
        // 清空路由复用信息
        this.reuseTabService.clear();
        // 设置用户Token信息
        // TODO: Mock expired value
        const tokenTimeout = +new Date() + 1000 * 60 * 60 * 24 * 30;
        const token: ITokenModel = {token: res.data, expired: tokenTimeout};
        this.tokenService.set(token);
        const user: User = {
          name: this.form.value.userName,
        };
        this.settingsService.setUser(user)
        // 重新获取 StartupService 内容，我们始终认为应用信息一般都会受当前用户授权范围而影响
        this.startupSrv.load().subscribe(() => {
          let url = this.tokenService.referrer!.url || '/';
          if (url.includes('/passport')) {
            url = '/';
          }
          this.router.navigateByUrl(url);
        });
      });
  }
  ngOnDestroy(): void {
    if (this.interval$) {
      clearInterval(this.interval$);
    }
  }
}
