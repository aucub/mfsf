import {NgModule, Type} from '@angular/core';
import {SharedModule} from '@shared';
import {UserRoutingModule} from './user-routing.module';
import {UserService} from './user.service';
import {UserListComponent} from './list/list.component';
import {UserEditComponent} from './edit/edit.component';
import {UserEditService} from './edit/edit.service';
import {UserUeditComponent} from './uedit/uedit.component';
import {UserUeditService} from './uedit/uedit.service';
import {UserViewComponent} from './view/view.component';
import {UserViewService} from './view/view.service';

const COMPONENTS: Type<void>[] = [
  UserListComponent,
  UserEditComponent,
  UserUeditComponent,
  UserViewComponent];

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: COMPONENTS,
  providers: [
    UserService,
    UserEditService,
    UserUeditService,
    UserViewService
  ],
})
export class UserModule { }
