import {Component, OnInit} from '@angular/core';
import {ModalHelper, _HttpClient} from '@delon/theme';
import {instantMeiliSearch} from '@meilisearch/instant-meilisearch'


@Component({
  selector: 'app-query-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class QuerySearchComponent implements OnInit {
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
