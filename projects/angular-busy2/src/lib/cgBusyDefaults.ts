import { inject, Injectable, InjectionToken, TemplateRef } from '@angular/core';

export type CgBusyOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  templateRef?: TemplateRef<any>;
  message?: string;
  wrapperClass?: string;
  backdrop?: boolean;
  delay?: number;
  minDuration?: number;
};

export const BUSY_OPTIONS = new InjectionToken<CgBusyOptions>('BUSY_OPTIONS');

@Injectable({ providedIn: 'root' })
export class CgBusyDefaults implements CgBusyOptions {
  delay: number;
  minDuration: number;
  backdrop: boolean;
  message: string;
  wrapperClass: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  templateRef: TemplateRef<any>;

  constructor() {
    let busyOptions = inject<CgBusyOptions>(BUSY_OPTIONS, { optional: true });
    if (!busyOptions) {
      busyOptions = {};
    }

    this.delay = busyOptions.delay || 0;
    this.minDuration = busyOptions.minDuration || 0;
    this.backdrop = busyOptions.backdrop !== undefined ? busyOptions.backdrop : true;
    this.message = busyOptions.message || 'Please Wait...';
    this.wrapperClass = busyOptions.wrapperClass || '';
  }
}
