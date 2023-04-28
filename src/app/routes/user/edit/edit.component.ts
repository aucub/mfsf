import {Component, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent, STData} from '@delon/abc/st';
import {SFCheckboxWidgetSchema, SFSchema} from '@delon/form';
import {_HttpClient} from '@delon/theme';
import {BaseResponseListRole, Roleui} from '@sta/models';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {delay, of} from 'rxjs';

@Component({
  selector: 'form-checkbox-simple',
  template: `
    <sf [schema]="schema" (formSubmit)="submit($event)"></sf
    >
    <st #st [data]="role" [columns]="columns"></st>`
})
export class UserEditComponent implements OnInit {
  record: any;
  i: Roleui[] = [];
  role: STData[] = [];
  schema: SFSchema = {
    properties: {
      async: {
        type: 'string',
        title: '角色',
        ui: {
          widget: 'checkbox',
          asyncData: () => of(this.i).pipe(delay(200))
        } as SFCheckboxWidgetSchema
      }
    }
  };

  @ViewChild('st', {static: true})
  st!: STComponent;
  columns: STColumn[] = [
    {title: '角色', index: 'name'},
    {title: '描述', index: 'description'}
  ];

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<BaseResponseListRole>('/user/getRoleListByUserId?userId=' + this.record.id).subscribe(res => {
      of(res.data)
        .subscribe(re => (this.role = re));
    });

    //if (this.record.id > 0)
    this.http.get<BaseResponseListRole>(`/role/list`).subscribe(res => {
      res.data.forEach(obj => {
        this.i.push(Object.assign({}, {
          label: obj.name + (obj.description == null ? '' : ':' + obj.description),
          value: obj.id
        }));
      });
    });
  }

  submit(value: {}): void {
    this.http
      .post(`/user/saveAuthRole`, {
        userId: this.record.id,
        roleIds: value
      })
      .subscribe(() => {
        this.msgSrv.success('保存成功');
        this.modal.close(true);
      });
  }

  close(): void {
    this.modal.destroy();
  }
}
