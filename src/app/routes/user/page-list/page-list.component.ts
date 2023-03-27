import { Component, ViewChild } from '@angular/core';
import { STChange, STColumn, STComponent, STData } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-user-page-list',
  templateUrl: './page-list.component.html'
})
export class UserPageListComponent {
  url = `/user/pageList`;
  method = 'POST';
  reName = { pi: 'pageNum', ps: 'pageSize' };
  allInBody = true;
  params = { keyword: '' };
  resReName = { list: 'data.records' };

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
    { title: '编号', type: 'checkbox' },
    { title: '用户名', index: 'username' },
    { title: '昵称', index: 'nickname', render: 'nicknameTpl' },
    { title: '上次登录时间', index: 'loginTime' },
    { title: '备注', index: 'note', render: 'noteTpl' },
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
        }
        //{ text: '查看', click: (item: any) => `/form/${item.id}` }
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];

  private submit(i: STData): void {
    JSON.stringify(this.st.pureItem(i));
    this.updateEdit(i, false);
  }

  private updateEdit(i: STData, edit: boolean): void {
    this.st.setRow(i, { edit }, { refreshSchema: true });
  }

  constructor(private http: _HttpClient, private modal: ModalHelper) {}

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
}
