import {Component, OnInit, ViewChild} from '@angular/core';
import {STChange, STColumn, STComponent} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {_HttpClient, ModalHelper} from '@delon/theme';

@Component({
  selector: 'app-log-loginlist',
  templateUrl: './loginlist.component.html'
})
export class LogLoginlistComponent implements OnInit {
  url = `/user/getLinkLogList`;
  method = 'POST';
  reName = {pi: 'pageNum', ps: 'pageSize'};
  allInBody = true;
  params = {keyword: ''};
  resReName = {list: 'data.records', total: 'data.total'};
  searchSchema: SFSchema = {
    properties: {
      keyword: {
        type: 'string',
        title: '关键字'
      }
    }
  };
  columns: STColumn[] = [
    {title: '用户ID', index: 'userId'},
    {title: '时间', type: 'date', index: 'createTime'},
    {
      title: '',
      buttons: [
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];
  @ViewChild('st') private readonly st!: STComponent;

  constructor(private http: _HttpClient, private modal: ModalHelper) {
  }

  ngOnInit(): void {
  }

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

  change(e: STChange): void {
    console.log('change', e);
  }
}
