import {NgModule, Type} from '@angular/core';
import {SharedModule} from '@shared';
import {LogRoutingModule} from './log-routing.module';
import {LogService} from './log.service';
import {LogConnectlistComponent} from './connectlist/connectlist.component';
import {LogConnectlistService} from './connectlist/connectlist.service';
import {LogLoginlistComponent} from './loginlist/loginlist.component';
import {LogLoginlistService} from './loginlist/loginlist.service';
import {LogLinklistComponent} from './linklist/linklist.component';
import {LogLinklistService} from './linklist/linklist.service';
import {LogOnlinelistComponent} from './onlinelist/onlinelist.component';
import {LogOnlinelistService} from './onlinelist/onlinelist.service';
import {LogPushComponent} from './push/push.component';
import {LogPushService} from './push/push.service';

const COMPONENTS: Type<void>[] = [
  LogConnectlistComponent,
  LogLoginlistComponent,
  LogLinklistComponent,
  LogOnlinelistComponent,
  LogPushComponent];

@NgModule({
  imports: [
    SharedModule,
    LogRoutingModule
  ],
  declarations: COMPONENTS,
  providers: [
    LogService,
    LogConnectlistService,
    LogLoginlistService,
    LogLinklistService,
    LogOnlinelistService,
    LogPushService
  ],
})
export class LogModule {
}
