import {CommonModule} from '@angular/common';
import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {CgBusyDirective} from './cgBusy.directive';
import {CgBusyDefaults} from './cgBusyDefaults.service';
import {CgBusyComponent} from './cgBusy.component';
import {CgBusyOptions} from './cgBusy.interface';

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
  static forRoot(busyOptions?: CgBusyOptions): ModuleWithProviders {
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

export function cgBusyDefaultsFactory(busyOptions?: CgBusyOptions): CgBusyDefaults {
console.log('factory');
  const busyDefaults = new CgBusyDefaults(busyOptions);

  return busyDefaults;
}

export const BUSY_OPTIONS = new InjectionToken<CgBusyOptions>('BUSY_OPTIONS');
