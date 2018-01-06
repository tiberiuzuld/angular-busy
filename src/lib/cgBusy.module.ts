import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {cgBusyDirective} from "./cgBusy.directive";

@NgModule({
  declarations: [
    cgBusyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [cgBusyDirective],
  providers: [],
  bootstrap: []
})
export class cgBusyModule {
}
