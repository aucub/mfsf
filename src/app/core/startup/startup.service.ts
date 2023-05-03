import {Inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {DA_SERVICE_TOKEN, ITokenService} from '@delon/auth';
import {MenuService, SettingsService, TitleService} from '@delon/theme';
import {ACLService} from '@delon/acl';
import {catchError, map, Observable, of} from 'rxjs';
import type {NzSafeAny} from 'ng-zorro-antd/core/types';
import {NzIconService} from 'ng-zorro-antd/icon';
import {ICONS} from '../../../style-icons';
import {ICONS_AUTO} from '../../../style-icons-auto';

/**
 * Used for application startup
 * Generally used to get the basic data of the application, like: Menu Data, User Data, etc.
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private httpClient: HttpClient,
    private router: Router
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  load(): Observable<void> {
    // http
    // return this.viaHttp();
    // mock: Don’t use it in a production environment. ViaMock is just to simulate some data to make the scaffolding work normally
    // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
    return this.viaMock();
  }

  private viaHttp(): Observable<void> {
    return this.httpClient.get('assets/tmp/app-data.json').pipe(
      catchError((res: NzSafeAny) => {
        console.warn(`StartupService.load: Network request failed`, res);
        setTimeout(() => this.router.navigateByUrl(`/exception/500`));
        return of({});
      }),
      map((res: NzSafeAny) => {
        // Application information: including site name, description, year
        this.settingService.setApp(res.app);
        // User information: including name, avatar, email address
        this.settingService.setUser(res.user);
        // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
        this.aclService.setFull(true);
        // Menu data, https://ng-alain.com/theme/menu
        this.menuService.add(res.menu);
        // Can be set page suffix title, https://ng-alain.com/theme/title
        this.titleService.suffix = res.app.name;
      })
    );
  }

  private viaMock(): Observable<void> {
    // const tokenData = this.tokenService.get();
    // if (!tokenData.token) {
    //   this.router.navigateByUrl(this.tokenService.login_url!);
    //   return;
    // }
    // mock
    const app: any = {
      name: `mfsf`,
      description: ``
    };
    const user: any = {
      name: 'Admin',
      avatar: './assets/tmp/img/avatar.jpg',
      email: 'cipchk@qq.com',
      token: '123456789'
    };
    // Application information: including site name, description, year
    this.settingService.setApp(app);
    // User information: including name, avatar, email address
    //this.settingService.setUser(user);
    // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
    this.aclService.setFull(true);
    // Menu data, https://ng-alain.com/theme/menu
    this.menuService.add([
      /*{
        text: 'Main',
        group: true,
        children: [
          {
            text: '仪表盘',
            link: '/dashboard',
            icon: {type: 'icon', value: 'dashboard'}
          }
        ]
      },*/
      {
        text: '用户',
        group: true,
        children: [
          {
            text: '用户管理',
            link: '/user/list',
            icon: {type: 'icon', value: 'user'}
          }
        ]
      }
      ,
      {
        text: '日志',
        group: true,
        children: [
          {
            text: '连接',
            link: '/log/connectlist',
            icon: {type: 'icon', value: 'api'}
          },
          {
            text: '通信',
            link: '/log/linklist',
            icon: {type: 'icon', value: 'link'}
          },
          {
            text: '登录',
            link: '/log/loginlist',
            icon: {type: 'icon', value: 'login'}
          },
          {
            text: '在线',
            link: '/log/onlinelist',
            icon: {type: 'icon', value: 'swap'}
          }
        ]
      },
      {
        text: '查询',
        group: true,
        children: [
          {
            text: '发送',
            link: '/query/publish',
            icon: {type: 'icon', value: 'send'}
          },
          {
            text: '接收',
            link: '/query/consume',
            icon: {type: 'icon', value: 'shrink'}
          },
          {
            text: '推送',
            link: '/query/push',
            icon: {type: 'icon', value: 'ellipsis'}
          }
        ]
      },
      {
        text: '搜索',
        group: true,
        children: [
          {
            text: '发送',
            link: '/search/publish',
            icon: {type: 'icon', value: 'send'}
          },
          {
            text: '接收',
            link: '/search/consume',
            icon: {type: 'icon', value: 'shrink'}
          },
          {
            text: '推送',
            link: '/search/push',
            icon: {type: 'icon', value: 'ellipsis'}
          }
        ]
      }
    ]);
    // Can be set page suffix title, https://ng-alain.com/theme/title
    this.titleService.suffix = app.name;

    return of(void 0);
  }
}
