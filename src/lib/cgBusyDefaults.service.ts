import {Injectable} from "@angular/core";
import {cgBusyOptions} from "./cgBusy.interface";

@Injectable()
export class cgBusyDefaults implements cgBusyOptions {
  templateUrl: string;
  delay: number;
  minDuration: number;
  backdrop: boolean;
  message: string;
  wrapperClass: string;
  promise: any;

  constructor() {
    this.templateUrl = 'angular-busy/defaultTemplate.html';
    this.delay = 0;
    this.minDuration = 0;
    this.backdrop = true;
    this.message = 'Please Wait...';
    this.wrapperClass = ''
  }
}
