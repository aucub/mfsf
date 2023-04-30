import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QueryPublishComponent} from './publish/publish.component';

const routes: Routes = [

  {path: 'publish', component: QueryPublishComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRoutingModule {
}
