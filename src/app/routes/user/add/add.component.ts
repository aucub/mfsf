import { Component, OnInit } from '@angular/core';
import { SFSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-user-add',
  template: ` <sf [schema]="schema" (formSubmit)="save($event)"></sf>`
})
export class UserAddComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      username: { type: 'string', title: '用户名' },
      password: { type: 'string', title: '密码', maxLength: 15 },
      nickname: { type: 'string', title: '昵称' },
      note: { type: 'string', title: '备注' }
    },
    required: ['username', 'password', 'nickname']
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 }
    },
    $username: {
      widget: 'string'
    },
    $password: {
      widget: 'string'
    },
    $nickname: {
      widget: 'string'
    },
    $note: {
      widget: 'string'
    }
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {}
  ngOnInit(): void {}
  save(value: any): void {
    this.http.post(`/user/save`, value).subscribe(res => {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close(): void {
    this.modal.destroy();
  }
}
