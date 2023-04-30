import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsAccountComponent} from './account/account.component';

const routes: Routes = [

  {path: 'account', component: SettingsAccountComponent},
  {path: 'account', component: SettingsAccountComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
