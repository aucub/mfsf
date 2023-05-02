import {Component, OnInit, ViewChild} from '@angular/core';
import {STColumn, STComponent} from '@delon/abc/st';
import {SFSchema} from '@delon/form';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {instantMeiliSearch} from "@meilisearch/instant-meilisearch";

@Component({
  selector: 'app-search-consume',
  templateUrl: './consume.component.html',
  styleUrls: ['./consume.component.css']
})
export class SearchConsumeComponent implements OnInit {
  searchClient = instantMeiliSearch(
    'http://47.113.201.150:7700/',
    'root',
    {
      finitePagination: true
    }
  );
  searchconfig = {
    indexName: "PublishRecord",
    searchClient: this.searchClient
  };


  constructor(private http: _HttpClient, private modal: ModalHelper) {
  }

  ngOnInit(): void {
  }

}
