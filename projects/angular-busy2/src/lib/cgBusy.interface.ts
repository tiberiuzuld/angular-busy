import {TemplateRef} from '@angular/core';

export interface CgBusyOptions {
  templateRef?: TemplateRef<any>;
  message?: string;
  wrapperClass?: string;
  backdrop?: boolean;
  delay?: number;
  minDuration?: number;
}
