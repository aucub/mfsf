import {Component, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {_HttpClient, ModalHelper} from '@delon/theme';

@Component({
  selector: 'app-query-push',
  templateUrl: './push.component.html'
})
export class QueryPushComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      start: {
        type: 'string',
        format: 'date-time'
      },
      stop: {
        type: 'string',
        format: 'date-time'
      }
    },
    required: ['start', 'stop']
  };
  url = `/query/queryPush`;
  method = 'POST';
  params = {
    start: new Date(new Date().valueOf() - 60 * 60 * 1000).toISOString(),
    stop: new Date().toISOString()
  };
  resReName = {list: 'data.records'};
  searchSchema: SFSchema = {
    properties: {
      userId: {
        type: 'string',
        title: ''
      }
    }
  };
  columns: STColumn[] = [
    {title: '用户ID', index: 'userId'},
    {title: '路由', index: 'route'},
    {title: '内容', index: 'body'},
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

  submit(value: any): void {
    this.st.reload(value);
  }

  ngAfterViewInit() {
    this.st.scroll = {x: '1200px'};
  }
}
