import {Inject, Injectable, InjectionToken, TemplateRef} from '@angular/core';
import type {CgBusyOptions} from './cgBusy.interface';

export const BUSY_OPTIONS = new InjectionToken<CgBusyOptions>('BUSY_OPTIONS');

@Injectable()
export class CgBusyDefaults implements CgBusyOptions {
  delay: number;
  minDuration: number;
  backdrop: boolean;
  message: string;
  wrapperClass: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  templateRef: TemplateRef<any>;

  constructor(@Inject(BUSY_OPTIONS) busyOptions?: CgBusyOptions) {

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
