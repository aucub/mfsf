import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {SFSchema, SFUISchema} from '@delon/form';
import {_HttpClient} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-settings-account',
  templateUrl: './account.component.html',
})
export class SettingsAccountComponent implements OnInit {
  i: any;
  schema: SFSchema = {
    properties: {
      nickname: {type: 'string', title: '别名'},
      note: {type: 'string', title: '备注', maxLength: 140},
    },
    required: ['nickname'],
  };
  pschema: SFSchema = {
    properties: {
      oldPassword: {type: 'string', title: '旧密码'},
      newPassword: {type: 'string', title: '新密码'},
    },
    required: ['oldPassword', 'newPassword'],
  };
  ui: SFUISchema = {
    $nickname: {
      widget: 'string',
    },
    $note: {
      widget: 'string',
    },
  };
  pui: SFUISchema = {
    $oldPassword: {
      widget: 'string',
    },
    $newPassword: {
      widget: 'string',
    },
  };

  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
  ) {
  }

  ngOnInit(): void {
    this.http.get('/user/getLoginUserInfo').subscribe(res => {
      this.i = res.data;
    });
  }

  save(value: any): void {
    this.http.post(`/user/updateAccount`, value).subscribe(res => {
      this.msgSrv.success('保存成功');
    });
  }

  UpdatePassword(value: any): void {
    this.http.post(`/login/updatePassword`, {
      oldPassword: value.oldPassword,
      newPassword: value.newPassword
    }).subscribe(res => {
      this.msgSrv.success('修改成功');
    });
  }
}
