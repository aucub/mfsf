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
import {UserAddComponent} from './add/add.component';
import {UserAddService} from './add/add.service';
import {UserTokenComponent} from './token/token.component';
import {UserTokenService} from './token/token.service';
import {UserPushComponent} from './push/push.component';
import {UserPushService} from './push/push.service';

const COMPONENTS: Type<void>[] = [
  UserListComponent,
  UserEditComponent,
  UserUeditComponent,
  UserViewComponent,
  UserAddComponent,
  UserTokenComponent,
  UserPushComponent];

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
    UserViewService,
    UserAddService,
    UserTokenService,
    UserPushService
  ],
})
export class UserModule {
}
