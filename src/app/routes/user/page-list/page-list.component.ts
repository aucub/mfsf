import { Component, ViewChild } from '@angular/core';
import { STColumn, STComponent, STData } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { PageListRes } from '@sta';
//import { constructor } from 'jasmine';
//import {add} from "husky";

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
  //process = (data: STData[], rawData?: PageListRes) => rawData?.data.records as STData[];

  searchSchema: SFSchema = {
    properties: {
      username: {
        type: 'string',
        title: '用户名'
      }
    }
  };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    { title: '用户名', index: 'username' },
    { title: '昵称', index: 'nickname' },
    { title: '上次登录时间', index: 'loginTime' },
    { title: '备注', index: 'note' },
    {
      title: '',
      buttons: [
        { text: '查看', click: (item: any) => `/form/${item.id}` }
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) {}

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
}
