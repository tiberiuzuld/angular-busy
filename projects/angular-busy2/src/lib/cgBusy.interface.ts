import {TemplateRef} from '@angular/core';

export interface CgBusyOptions {
  // tslint:disable-next-line:no-any
  templateRef?: TemplateRef<any>;
  message?: string;
  wrapperClass?: string;
  backdrop?: boolean;
  delay?: number;
  minDuration?: number;
}
