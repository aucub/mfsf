import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchPublishComponent} from './publish/publish.component';
import {SearchConsumeComponent} from './consume/consume.component';
import {SearchPushComponent} from './push/push.component';

const routes: Routes = [

  {path: 'publish', component: SearchPublishComponent},
  {path: 'consume', component: SearchConsumeComponent},
  {path: 'push', component: SearchPushComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {
}
