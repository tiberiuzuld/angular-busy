import {TemplateRef} from '@angular/core';

export interface CgBusyOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  templateRef?: TemplateRef<any>;
  message?: string;
  wrapperClass?: string;
  backdrop?: boolean;
  delay?: number;
  minDuration?: number;
}
