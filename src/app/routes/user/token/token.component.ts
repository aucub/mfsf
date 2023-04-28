import { Component, OnInit } from '@angular/core';
import { SFSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-user-token',
  template: ` <sf [schema]="schema" (formSubmit)="save($event)"></sf>`
})
export class UserTokenComponent implements OnInit {
  record: any;
  schema: SFSchema = {
    properties: {
      expiresAt: { type: 'string', title: '编号', format: 'date-time' }
    },
    required: ['expiresAt']
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 }
    },
    $expiresAt: {
      widget: 'date-time'
    }
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {}

  ngOnInit(): void {}

  save(value: any): void {
    this.http
      .post(`/user/generateJwt`, {
        subject: this.record.id,
        expiresAt: value.expiresAt
      })
      .subscribe(res => {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      });
  }

  close(): void {
    this.modal.destroy();
  }
}
