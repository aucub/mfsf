import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';

const COMPONENTS: Array<Type<void>> = [];

@NgModule({
  imports: [SharedModule, UserRoutingModule],
  declarations: COMPONENTS,
  providers: [UserService]
})
export class UserModule {}
