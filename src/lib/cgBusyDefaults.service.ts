import {Inject, Injectable, TemplateRef} from '@angular/core';
import {CgBusyOptions} from './cgBusy.interface';
import {BUSY_OPTIONS} from './cgBusy.module';

@Injectable()
export class CgBusyDefaults implements CgBusyOptions {
  delay: number;
  minDuration: number;
  backdrop: boolean;
  message: string;
  wrapperClass: string;
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
