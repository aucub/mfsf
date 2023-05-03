import {Component, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {_HttpClient, ModalHelper} from '@delon/theme';
import {LogPushComponent} from "../push/push.component";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-log-connectlist',
  templateUrl: './connectlist.component.html'
})
export class LogConnectlistComponent implements OnInit {
  url = `/user/connectList`;
  method = 'GET';
  resReName = {list: 'data'};
  searchSchema: SFSchema = {
    properties: {
      keyword: {
        type: 'string',
        title: '用户名'
      }
    }
  };
  columns: STColumn[] = [
    {title: '用户名', index: 'username'},
    {title: '昵称', index: 'nickname'},
    {title: '上次登录时间', index: 'loginTime'},
    {title: '备注', index: 'note'},
    {title: '创建者', index: 'creator'},
    {title: '更新者', index: 'updater'},
    {title: '注册时间', index: 'createTime'},
    {title: '更新时间', index: 'lastUpdateTime'},
    {title: '类型', index: 'type'},
    {
      title: '',
      buttons: [
        {
          text: '推送',
          type: 'modal',
          modal: {
            component: LogPushComponent
          },
          click: (_record, modal) => console.log('')
        }
        // { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];
  @ViewChild('st') private readonly st!: STComponent;

  constructor(private http: _HttpClient, private msgSrv: NzMessageService, private modal: ModalHelper) {
  }

  ngOnInit(): void {
  }

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

  clearConnectCache(): void {
    this.http.get("/searchOnline/clearConnectCache").subscribe(
      res => {
        this.msgSrv.success('刷新成功');
      }
    )
    this.st.reload();
  }
}
