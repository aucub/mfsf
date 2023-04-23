import {NgModule, Type} from '@angular/core';
import {SharedModule} from '@shared';
import {UserRoutingModule} from './user-routing.module';
import {UserService} from './user.service';
import {UserListComponent} from './list/list.component';
import {UserEditComponent} from './edit/edit.component';
import {UserEditService} from './edit/edit.service';

const COMPONENTS: Type<void>[] = [
  UserListComponent,
  UserEditComponent];

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: COMPONENTS,
  providers: [
    UserService,
    UserEditService
  ],
})
export class UserModule { }
