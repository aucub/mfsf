import {NgModule, Type} from '@angular/core';
import {SharedModule} from '@shared';
import {QueryRoutingModule} from './query-routing.module';
import {QueryService} from './query.service';
import {QueryPublishComponent} from './publish/publish.component';
import {QueryPublishService} from './publish/publish.service';
import {QueryConsumeComponent} from './consume/consume.component';
import {QueryConsumeService} from './consume/consume.service';
import {QueryPushComponent} from './push/push.component';
import {QueryPushService} from './push/push.service';
import {QueryListComponent} from './list/list.component';
import {
  NgAisClearRefinementsModule,
  NgAisConfigureModule, NgAisHighlightModule, NgAisHitsModule,
  NgAisInstantSearchModule, NgAisPaginationModule, NgAisRefinementListModule,
  NgAisSearchBoxModule
} from "angular-instantsearch";
import {NgOptimizedImage} from "@angular/common";

const COMPONENTS: Type<void>[] = [
  QueryPublishComponent,
  QueryConsumeComponent,
  QueryPushComponent,
  QueryListComponent];

@NgModule({
  imports: [
    SharedModule,
    QueryRoutingModule,
    NgOptimizedImage,
    NgAisInstantSearchModule,
    NgAisClearRefinementsModule,
    NgAisConfigureModule,
    NgAisRefinementListModule,
    NgAisSearchBoxModule,
    NgAisHitsModule,
    NgAisHighlightModule,
    NgAisPaginationModule
  ],
  declarations: COMPONENTS,
  providers: [
    QueryService,
    QueryPublishService,
    QueryConsumeService,
    QueryPushService
  ],
})
export class QueryModule {
}
