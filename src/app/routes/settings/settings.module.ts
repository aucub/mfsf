import {NgModule, Type} from '@angular/core';
import {SharedModule} from '@shared';
import {SettingsRoutingModule} from './settings-routing.module';
import {SettingsService} from './settings.service';
import {SettingsAccountComponent} from './account/account.component';
import {SettingsAccountService} from './account/account.service';
import {FooterToolbarModule} from "@delon/abc/footer-toolbar";
import {NzListModule} from "ng-zorro-antd/list";

const COMPONENTS: Type<void>[] = [
  SettingsAccountComponent,
  SettingsAccountComponent];

@NgModule({
  imports: [
    SharedModule,
    SettingsRoutingModule,
    FooterToolbarModule,
    NzListModule
  ],
  declarations: COMPONENTS,
  providers: [
    SettingsService,
    SettingsAccountService
  ],
})
export class SettingsModule {
}
