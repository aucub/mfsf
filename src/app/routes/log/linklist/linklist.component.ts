import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-log-linklist',
  templateUrl: './linklist.component.html'
})
export class LogLinklistComponent implements OnInit {
  url = `/user/getLinkLogList`;
  method = 'POST';
  reName = { pi: 'pageNum', ps: 'pageSize' };
  allInBody = true;
  params = { keyword: '' };
  resReName = { list: 'data.records' };
  searchSchema: SFSchema = {
    properties: {
      keyword: {
        type: 'string',
        title: '关键字'
      }
    }
  };
  @ViewChild('st') private readonly st!: STComponent;
  columns: STColumn[] = [
    { title: '用户ID', index: 'userId' },
    { title: '时间', type: 'date', index: 'createTime' },
    { title: '路由', index: 'route' },
    { title: 'IP', index: 'ip' },
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) {}

  ngOnInit(): void {}

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }
}
