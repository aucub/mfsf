import {Component, OnInit} from '@angular/core';
import {_HttpClient, ModalHelper} from '@delon/theme';
import {instantMeiliSearch} from "@meilisearch/instant-meilisearch";

@Component({
  selector: 'app-search-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class SearchPublishComponent implements OnInit {
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
