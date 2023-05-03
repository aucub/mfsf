import {Component, OnInit} from '@angular/core';
import {_HttpClient, ModalHelper} from '@delon/theme';
import {instantMeiliSearch} from "@meilisearch/instant-meilisearch";

@Component({
  selector: 'app-search-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css']
})
export class SearchPushComponent implements OnInit {
  searchClient = instantMeiliSearch(
    'http://47.113.201.150:7700/',
    'root',
    {
      finitePagination: true
    }
  );
  searchconfig = {
    indexName: "PushRecord",
    searchClient: this.searchClient
  };

  constructor(private http: _HttpClient, private modal: ModalHelper) {
  }

  ngOnInit(): void {
  }


}
