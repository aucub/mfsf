import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QueryPublishComponent} from './publish/publish.component';
import {QueryConsumeComponent} from './consume/consume.component';
import {QueryPushComponent} from './push/push.component';

const routes: Routes = [

  {path: 'publish', component: QueryPublishComponent},
  {path: 'consume', component: QueryConsumeComponent},
  {path: 'push', component: QueryPushComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRoutingModule {
}
