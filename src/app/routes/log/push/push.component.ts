import {Component, OnInit} from '@angular/core';
import {SFSchema, SFUISchema} from '@delon/form';
import {_HttpClient} from '@delon/theme';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzModalRef} from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-log-push',
  template: '<sf [schema]="schema" (formSubmit)="save($event)"></sf>',
})
export class LogPushComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      route: {type: 'string', title: '路由'},
      body: {type: 'string', title: '内容', maxLength: 140},
    },
    required: ['route', 'body'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: {span: 12},
    },
    $route: {
      widget: 'string',
    },
    $body: {
      widget: 'string',
    },
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
  ) {
  }

  ngOnInit(): void {
  }

  save(value: any): void {
    this.http.post(`/push`, {
      userId: this.record.id,
      route: value.route,
      body: value.body
    }).subscribe(res => {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close(): void {
    this.modal.destroy();
  }
}
