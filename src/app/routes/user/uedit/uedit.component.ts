import {Component, OnInit} from '@angular/core';
import {SFSchema, SFUISchema} from '@delon/form';
import {_HttpClient} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzModalRef} from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-user-uedit',
  templateUrl: './uedit.component.html'
})
export class UserUeditComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      nickname: {type: 'string', title: '昵称', maxLength: 15},
      note: {type: 'string', title: '备注', maxLength: 140}
    },
    required: ['nickname']
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: {span: 12}
    },
    $nickname: {
      widget: 'string'
    },
    $note: {
      widget: 'textarea',
      grid: {span: 24}
    }
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {
  }

  ngOnInit(): void {
    this.i = {nickname: '', note: ''};
  }

  save(value: any): void {
    this.http
      .post(`/user/update`, {
        id: this.record.id,
        nickname: value.nickname,
        note: value.note
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
