import {NgModule, Type} from '@angular/core';
import {SharedModule} from '@shared';
import {SearchRoutingModule} from './search-routing.module';
import {SearchService} from './search.service';
import {SearchPublishComponent} from './publish/publish.component';
import {
  NgAisHighlightModule,
  NgAisHitsModule,
  NgAisInstantSearchModule,
  NgAisPaginationModule,
  NgAisSearchBoxModule
} from "angular-instantsearch";
import {SearchConsumeComponent} from './consume/consume.component';
import {SearchPushComponent} from './push/push.component';

const COMPONENTS: Type<void>[] = [
  SearchPublishComponent,
  SearchConsumeComponent,
  SearchPushComponent];

@NgModule({
  imports: [
    SharedModule,
    SearchRoutingModule,
    NgAisHighlightModule,
    NgAisHitsModule,
    NgAisInstantSearchModule,
    NgAisPaginationModule,
    NgAisSearchBoxModule
  ],
  declarations: COMPONENTS,
  providers: [
    SearchService
  ],
})
export class SearchModule {
}
