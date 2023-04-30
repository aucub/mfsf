import {Component, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {_HttpClient, ModalHelper} from '@delon/theme';
import {dateTimePickerUtil} from '@delon/util';

@Component({
  selector: 'app-query-publish',
  templateUrl: './publish.component.html'
})
export class QueryPublishComponent implements OnInit {
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
  url = `/query/queryPublish`;
  method = 'POST';
  allInBody = false;
  params = {
    start: dateTimePickerUtil.format(new Date(new Date().valueOf() - 60 * 60 * 1000), 'yyyy-MM-DDTHH:mm:ssZ'),
    stop: dateTimePickerUtil.format(new Date(), 'yyyy-MM-DDTHH:mm:ssZ')
  };
  resReName = {list: 'data.records'};
  searchSchema: SFSchema = {
    properties: {
      keyword: {
        type: 'string',
        title: ''
      }
    }
  };
  columns: STColumn[] = [
    {title: '消息ID', index: 'messageId'},
    {title: '源', index: 'source'},
    {title: '类型', index: 'type'},
    {title: '应用ID', index: 'appId'},
    {title: '用户ID', index: 'userId'},
    {title: '优先', index: 'priority'},
    {title: '过期', index: 'expiration'},
    {title: '发布ID', index: 'publishingId'},
    {title: '内容类型', index: 'dataContentType'},
    {title: '内容编码', index: 'contentEncoding'},
    {title: '主题', index: 'subject'},
    {title: '内容', index: 'body'},
    {title: '提交', index: 'submit'},
    {title: '时间', index: 'time'},
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
    this.params = value;
    this.st.reload;
  }
}
