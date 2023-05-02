import {Injectable} from '@angular/core';
import {_HttpClient} from '@delon/theme';

@Injectable()
export class SearchService {

  constructor(private http: _HttpClient) {
  }

}
