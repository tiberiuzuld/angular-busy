import {provideHttpClient} from '@angular/common/http';
import {ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners} from '@angular/core';
import {CgBusyModule} from 'angular-busy2';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    importProvidersFrom(CgBusyModule.forRoot())
  ]
};
