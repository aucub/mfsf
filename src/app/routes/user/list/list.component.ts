import {Component, OnInit, ViewChild} from '@angular/core';
import {STChange, STColumn, STComponent, STData} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {_HttpClient, ModalHelper} from '@delon/theme';
import {BaseResponseListRole, Role} from "@sta";
import {UserEditComponent} from "../edit/edit.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
})
export class UserListComponent implements OnInit {
  url = `/user/list`;
  method = 'POST';
  reName = {pi: 'pageNum', ps: 'pageSize'};
  allInBody = true;
  params = {keyword: '', roleId: ''};
  resReName = {list: 'data.records'};
  roles: Role[] = [{id: '', name: '', description: '', deleted: 0}];

  change(e: STChange): void {
    console.log('change', e);
  }

  searchSchema: SFSchema = {
    properties: {
      keyword: {
        type: 'string',
        title: '用户名'
      }
    }
  };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    {title: '编号', type: 'checkbox'},
    {title: '用户名', index: 'username'},
    {title: '昵称', index: 'nickname', render: 'nicknameTpl'},
    {title: '上次登录时间', index: 'loginTime'},
    {title: '备注', index: 'note', render: 'noteTpl'},
    {title: '创建者', index: 'creator'},
    {title: '更新者', index: 'updater'},
    {title: '注册时间', index: 'createTime'},
    {title: '更新时间', index: 'lastUpdateTime'},
    {title: '类型', index: 'type'},
    {
      title: '',
      buttons: [
        {
          text: `Edit`,
          iif: i => !i.edit,
          click: i => this.updateEdit(i, true)
        },
        {
          text: `Save`,
          iif: i => i.edit,
          click: i => {
            this.submit(i);
          }
        },
        {
          text: `Cancel`,
          iif: i => i.edit,
          click: i => this.updateEdit(i, false)
        },
        //{ text: '查看', click: (item: any) => `/form/${item.id}` }
        // { text: '编辑', type: 'static', component: UserEditComponent, click: 'reload' },
        {
          text: 'Edit',
          icon: 'edit',
          type: 'modal',
          modal: {
            component: UserEditComponent
          },
          click: (_record, modal) => console.log('')
        }
      ]
    }
  ];

  open(): void {
    this.modal.createStatic(UserEditComponent, {record: 1}).subscribe(console.log);
  }

  private submit(i: STData): void {
    JSON.stringify(this.st.pureItem(i));
    this.updateEdit(i, false);
  }

  constructor(private http: _HttpClient, private modal: ModalHelper) {
  }

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
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

  private updateEdit(i: STData, edit: boolean): void {
    this.st.setRow(i, {edit}, {refreshSchema: true});
  }

}
