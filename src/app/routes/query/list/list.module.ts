import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {NgAisModule} from "angular-instantsearch";


@NgModule({
  imports: [BrowserModule, NgAisModule.forRoot()],
  providers: [],
})
export class AppModule {
}
