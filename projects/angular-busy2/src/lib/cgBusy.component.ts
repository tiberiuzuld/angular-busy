import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CgBusyOptions } from './cgBusy.interface';
import { CgBusyService } from './cgBusy.service';

@Component({
  templateUrl: './cgBusy.component.html',
  styleUrls: ['./cgBusy.component.css'],
  selector: 'cg-busy',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgTemplateOutlet]
})
export class CgBusyComponent {
  @Input() options: CgBusyOptions;
  @Input() tracker: CgBusyService;

}
