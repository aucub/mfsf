import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { UserPageListComponent } from './page-list/page-list.component';
import { UserPageListService } from './page-list/page-list.service';

const COMPONENTS: Type<void>[] = [
  UserPageListComponent];

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: COMPONENTS,
  providers: [
    UserService,
    UserPageListService
  ],
})
export class UserModule { }
