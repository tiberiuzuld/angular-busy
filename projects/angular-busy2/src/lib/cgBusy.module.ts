import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {CgBusyDirective} from './cgBusy.directive';
import {BUSY_OPTIONS, CgBusyDefaults} from './cgBusyDefaults.service';
import {CgBusyComponent} from './cgBusy.component';
import {CgBusyOptions} from './cgBusy.interface';

export function cgBusyDefaultsFactory(busyOptions?: CgBusyOptions): CgBusyDefaults {
  return new CgBusyDefaults(busyOptions);
}


@NgModule({
  declarations: [
    CgBusyDirective,
    CgBusyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CgBusyDirective]
})
export class CgBusyModule {
  static forRoot(busyOptions?: CgBusyOptions): ModuleWithProviders<CgBusyModule> {
    return {
      ngModule: CgBusyModule,
      providers: [
        {
          provide: CgBusyDefaults,
          useFactory: cgBusyDefaultsFactory,
          deps: [BUSY_OPTIONS]
        },
        {
          provide: BUSY_OPTIONS,
          useValue: busyOptions
        }
      ]
    };
  }
}
