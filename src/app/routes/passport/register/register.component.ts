import {HttpContext} from '@angular/common/http';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ALLOW_ANONYMOUS} from '@delon/auth';
import {_HttpClient} from '@delon/theme';
import {MatchControl} from '@delon/util/form';
import {NzSafeAny} from 'ng-zorro-antd/core/types';
import {finalize} from 'rxjs';

@Component({
  selector: 'passport-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRegisterComponent implements OnDestroy {
  form = this.fb.nonNullable.group(
    {
      username: ['', [Validators.required, Validators.minLength(4)]],
      nickname: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6), UserRegisterComponent.checkPassword.bind(this)]],
      confirm: ['', [Validators.required, Validators.minLength(6)]]
    },
    {
      validators: MatchControl('password', 'confirm')
    }
  );

  // #region fields
  error = '';
  type = 0;
  loading = false;
  visible = false;
  status = 'pool';
  progress = 0;
  passwordProgressMap: { [key: string]: 'success' | 'normal' | 'exception' } = {
    ok: 'success',
    pass: 'normal',
    pool: 'exception'
  };
  count = 0;

  // #endregion

  // #region get captcha
  interval$: NzSafeAny;

  constructor(private fb: FormBuilder, private router: Router, private http: _HttpClient, private cdr: ChangeDetectorRef) {
  }

  static checkPassword(control: FormControl): NzSafeAny {
    if (!control) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self: NzSafeAny = this;
    self.visible = !!control.value;
    if (control.value && control.value.length > 9) {
      self.status = 'ok';
    } else if (control.value && control.value.length > 5) {
      self.status = 'pass';
    } else {
      self.status = 'pool';
    }

    if (self.visible) {
      self.progress = control.value.length * 10 > 100 ? 100 : control.value.length * 10;
    }
  }

  getCaptcha(): void {
    this.count = 59;
    this.cdr.detectChanges();
    this.interval$ = setInterval(() => {
      this.count -= 1;
      this.cdr.detectChanges();
      if (this.count <= 0) {
        clearInterval(this.interval$);
      }
    }, 1000);
  }

  // #endregion

  submit(): void {
    this.error = '';
    Object.keys(this.form.controls).forEach(key => {
      const control = (this.form.controls as NzSafeAny)[key] as AbstractControl;
      control.markAsDirty();
      control.updateValueAndValidity();
    });
    if (this.form.invalid) {
      return;
    }

    const data = this.form.value;
    this.loading = true;
    this.cdr.detectChanges();
    this.http
      .post('/register/user', data, null, {
        context: new HttpContext().set(ALLOW_ANONYMOUS, true)
      })
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.detectChanges();
        })
      )
      .subscribe(() => {
        this.router.navigate(['passport', 'register-result'], {queryParams: {username: data.username}});
      });
  }

  ngOnDestroy(): void {
    if (this.interval$) {
      clearInterval(this.interval$);
    }
  }
}
