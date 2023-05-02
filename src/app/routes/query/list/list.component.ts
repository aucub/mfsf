import {Component, OnInit} from '@angular/core';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {instantMeiliSearch} from '@meilisearch/instant-meilisearch'
import {InstantSearchConfig} from "angular-instantsearch/instantsearch/instantsearch";


@Component({
  selector: 'app-query-list',
  templateUrl: './list.component.html',
})
export class QueryListComponent implements OnInit {
  searchClient = instantMeiliSearch(
    'http://47.113.201.150:7700/',
    'root',
    {
      finitePagination: true
    }
  );
  title = "angular-app";
  searchconfig: InstantSearchConfig = {
    indexName: "PublishRecord",
    searchClient: this.searchClient
  };

  constructor(private http: _HttpClient, private modal: ModalHelper) {
  }

  ngOnInit(): void {
  }
}
