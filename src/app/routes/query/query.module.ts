import {NgModule, Type} from '@angular/core';
import {SharedModule} from '@shared';
import {QueryRoutingModule} from './query-routing.module';
import {QueryService} from './query.service';
import {QueryPublishComponent} from './publish/publish.component';
import {QueryPublishService} from './publish/publish.service';

const COMPONENTS: Type<void>[] = [
  QueryPublishComponent];

@NgModule({
  imports: [
    SharedModule,
    QueryRoutingModule
  ],
  declarations: COMPONENTS,
  providers: [
    QueryService,
    QueryPublishService
  ],
})
export class QueryModule {
}
