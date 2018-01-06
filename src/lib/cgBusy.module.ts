import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CgBusyDirective} from './cgBusy.directive';

@NgModule({
  declarations: [
    CgBusyDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [CgBusyDirective],
  providers: [],
  bootstrap: []
})
export class CgBusyModule {
}
