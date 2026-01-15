import { NgTemplateOutlet } from '@angular/common';
import { Component, input, ViewEncapsulation } from '@angular/core';
import type { CgBusyOptions } from './cgBusyDefaults';
import { CgBusyTracker } from './cgBusyTracker';

@Component({
  templateUrl: './cgBusy.html',
  styleUrls: ['./cgBusy.css'],
  selector: 'cg-busy',
  encapsulation: ViewEncapsulation.None,
  imports: [NgTemplateOutlet]
})
export class CgBusy {
  options = input.required<CgBusyOptions>();
  tracker = input.required<CgBusyTracker>();
}
