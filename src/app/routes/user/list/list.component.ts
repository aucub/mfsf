import {Component, OnInit, ViewChild} from '@angular/core';
import {STChange, STColumn, STComponent} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {_HttpClient, ModalHelper} from '@delon/theme';
import {BaseResponseListRole, Role} from '@sta';
import {UserEditComponent} from '../edit/edit.component';
import {UserUeditComponent} from '../uedit/uedit.component';
import {UserAddComponent} from '../add/add.component';
import {UserTokenComponent} from '../token/token.component';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html'
})
export class UserListComponent implements OnInit {
  url = `/user/list`;
  method = 'POST';
  reName = {pi: 'pageNum', ps: 'pageSize'};
  allInBody = true;
  params = {keyword: '', roleId: ''};
  resReName = {list: 'data.records', total: 'data.total'};
  roles: Role[] = [{id: '', name: '', description: '', deleted: 0}];
  searchSchema: SFSchema = {
    properties: {
      keyword: {
        type: 'string',
        title: '用户名'
      }
    }
  };
  columns: STColumn[] = [
    {title: '编号', type: 'checkbox'},
    {title: '用户名', index: 'username'},
    {title: 'ID', index: 'id'},
    {title: '昵称', index: 'nickname', render: 'nicknameTpl'},
    {title: '上次登录时间', index: 'loginTime'},
    {title: '备注', index: 'note', render: 'noteTpl'},
    {title: '创建者', index: 'creator'},
    {title: '更新者', index: 'updater'},
    {title: '注册时间', index: 'createTime'},
    {title: '更新时间', index: 'lastUpdateTime'},
    // { title: '类型', index: 'type' },
    {
      title: '',
      buttons: [
        {
          text: `编辑`,
          type: 'modal',
          modal: {
            component: UserUeditComponent
          },
          click: (_record, modal) => console.log('')
        },
        //{ text: '查看', click: (item: any) => `/form/${item.id}` }
        // { text: '编辑', type: 'static', component: UserEditComponent, click: 'reload' },
        {
          text: '角色',
          icon: 'edit',
          type: 'modal',
          modal: {
            component: UserEditComponent
          },
          click: (_record, modal) => console.log('')
        },
        {
          text: '删除',
          icon: 'delete',
          type: 'del',
          click: _record => this.delete(_record['id'])
        },
        {
          text: 'token',
          type: 'modal',
          modal: {
            component: UserTokenComponent
          },
          click: (_record, modal) => console.log('')
        }
      ]
    }
  ];
  @ViewChild('st') private readonly st!: STComponent;

  constructor(private http: _HttpClient, private msgSrv: NzMessageService, private modal: ModalHelper) {
  }

  change(e: STChange): void {
    console.log('change', e);
  }

  open(): void {
    this.modal.createStatic(UserEditComponent, {record: 1}).subscribe(console.log);
  }

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
    this.modal.create(UserAddComponent, {}).subscribe(res => {
    });
  }

  selectRole(data: string): void {
    // @ts-ignore
    this.params = {keyword: '', roleId: data};
    this.st.reload(this.params);
  }

  ngOnInit(): void {
    this.http.get<BaseResponseListRole>('/role/list').subscribe(res => {
      {
        // @ts-ignore
        this.roles = res.data;
      }
    });
  }

  delete(id: string): void {
    this.http.get('/user/delete?id=' + id).subscribe(res => {
      this.msgSrv.success(res.data);
      this.st.reload;
    });
  }
}
