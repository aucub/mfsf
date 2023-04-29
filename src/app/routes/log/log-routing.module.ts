import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogConnectlistComponent} from './connectlist/connectlist.component';
import {LogLoginlistComponent} from './loginlist/loginlist.component';
import {LogLinklistComponent} from './linklist/linklist.component';
import {LogOnlinelistComponent} from './onlinelist/onlinelist.component';

const routes: Routes = [

  {path: 'connectlist', component: LogConnectlistComponent},
  {path: 'loginlist', component: LogLoginlistComponent},
  {path: 'linklist', component: LogLinklistComponent},
  {path: 'onlinelist', component: LogOnlinelistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule {
}
