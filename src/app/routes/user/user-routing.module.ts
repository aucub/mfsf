import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageListComponent } from './page-list/page-list.component';

const routes: Routes = [

  { path: 'pageList', component: UserPageListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
