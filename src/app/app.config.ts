import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BUSY_OPTIONS, CgBusyOptions } from 'angular-busy2';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    {
      provide: BUSY_OPTIONS,
      useValue: {
        minDuration: 10000
      } as CgBusyOptions
    }
  ]
};
