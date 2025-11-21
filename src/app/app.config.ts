import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection} from '@angular/core';
import {CgBusyModule} from 'angular-busy2';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true, runCoalescing: true }),
    provideHttpClient(),
    importProvidersFrom(CgBusyModule.forRoot())
  ]
};
