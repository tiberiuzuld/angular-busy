import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CgBusyDirective} from './cgBusy.directive';
import {CgBusyDefaults} from './cgBusyDefaults.service';
import {CgBusyComponent} from './cgBusy.component';

@NgModule({
  declarations: [
    CgBusyDirective,
    CgBusyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CgBusyDirective],
  entryComponents: [CgBusyComponent],
  providers: [CgBusyDefaults]
})
export class CgBusyModule {
}
