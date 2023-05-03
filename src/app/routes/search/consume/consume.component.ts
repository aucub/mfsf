import {Component, OnInit} from '@angular/core';
import {_HttpClient, ModalHelper} from '@delon/theme';
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
    indexName: "ConsumeRecord",
    searchClient: this.searchClient
  };


  constructor(private http: _HttpClient, private modal: ModalHelper) {
  }

  ngOnInit(): void {
  }

}
