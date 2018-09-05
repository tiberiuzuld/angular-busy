import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
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
})
export class CgBusyModule {
  static forRoot(busyConfig?: CgBusyDefaults): ModuleWithProviders {
    return {
      ngModule: CgBusyModule,
      providers: [
        {
          provide: CgBusyDefaults,
          useValue: busyConfig ? busyConfig : new CgBusyDefaults()
        }
      ]
    };
  }
}
