import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent } from '@delon/abc/st';
import { SFSchema } from '@delon/form';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { PageListRes } from '@sta';

@Component({
  selector: 'app-user-page-list',
  templateUrl: './page-list.component.html',
})
export class UserPageListComponent implements OnInit {
  url = `/user/pageList`;
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
    { title: '上次登录时间',  index: 'loginTime' },
    { title: '备注', index: 'note' },
    {
      title: '',
      buttons: [
         { text: '查看', click: (item: any) => `/form/${item.id}` },
        // { text: '编辑', type: 'static', component: FormEditComponent, click: 'reload' },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit(): void { 
    /* this.http.post('/user/pageList', {
      pageNum: 1,
      pageSize: 10,
      keyword: ''
    }).subscribe((res: PageListRes) => {
    
      //打印后端返回的结果
      console.log(res)
      
      //将返回的结果list赋给data
      this.st.data = res.data.records;
    }); */
  }

  add(): void {
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());

  }

}
