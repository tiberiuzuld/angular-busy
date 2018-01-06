import {Injectable, TemplateRef} from '@angular/core';
import {CgBusyOptions} from './cgBusy.interface';

@Injectable()
export class CgBusyDefaults implements CgBusyOptions {
  delay: number;
  minDuration: number;
  backdrop: boolean;
  message: string;
  wrapperClass: string;
  templateRef: TemplateRef<any>;

  constructor() {
    this.delay = 0;
    this.minDuration = 0;
    this.backdrop = true;
    this.message = 'Please Wait...';
    this.wrapperClass = '';
  }
}
