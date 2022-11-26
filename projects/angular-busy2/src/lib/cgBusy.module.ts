import { ModuleWithProviders, NgModule } from '@angular/core';
import { CgBusyDirective } from './cgBusy.directive';
import { CgBusyOptions } from './cgBusy.interface';
import { BUSY_OPTIONS, CgBusyDefaults } from './cgBusyDefaults.service';

export function cgBusyDefaultsFactory(busyOptions?: CgBusyOptions): CgBusyDefaults {
  return new CgBusyDefaults(busyOptions);
}

@NgModule({
  imports: [CgBusyDirective],
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
