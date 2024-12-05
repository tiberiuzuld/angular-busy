import {ComponentRef, Directive, ElementRef, Input, OnChanges, OnDestroy, Renderer2, SimpleChanges, ViewContainerRef} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {CgBusyComponent} from './cgBusy.component';
import type {CgBusyOptions} from './cgBusy.interface';
import {CgBusyService} from './cgBusy.service';
import {CgBusyDefaults} from './cgBusyDefaults.service';

@Directive({selector: '[cgBusy]', standalone: true, exportAs: 'cgBusy'})
export class CgBusyDirective implements OnChanges, OnDestroy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() cgBusy: boolean | number | Promise<any> | Subscription | Observable<any> | (Promise<any> | Subscription | Observable<any>)[];
  @Input() cgBusyConfig: CgBusyOptions;
  tracker: CgBusyService;
  fakePromise: Promise<void>;
  fakePromiseResolve: () => void;
  $options: CgBusyOptions;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $promise: (Promise<any> | Subscription | Observable<any>)[];
  componentRef: ComponentRef<CgBusyComponent>;

  constructor(private viewContainer: ViewContainerRef, private defaultOptions: CgBusyDefaults,
              private renderer: Renderer2, private el: ElementRef) {
    this.$options = {...this.defaultOptions};
    this.$promise = [];
    this.renderer.setStyle(this.el.nativeElement.parentNode, 'position', 'relative');
    this.componentRef = this.viewContainer.createComponent(CgBusyComponent);
    this.tracker = new CgBusyService();
    this.tracker.detectChanges = () => this.componentRef.changeDetectorRef.detectChanges();
    this.componentRef.instance.tracker = this.tracker;
    this.componentRef.instance.options = this.$options;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cgBusyConfig) {
      this.$options = {
        ...this.defaultOptions,
        ...this.$options,
        ...this.cgBusyConfig
      };
      this.componentRef.instance.options = this.$options;
    }
    if (changes.cgBusy) {
      if (this.fakePromise) {
        this.fakePromiseResolve();
        this.fakePromise = undefined;
        this.fakePromiseResolve = undefined;
      }

      if (Number.isFinite(this.cgBusy) || this.cgBusy === true || this.cgBusy === false) {
        this.fakePromise = new Promise((resolve) => {
          this.fakePromiseResolve = resolve;
          if (!this.cgBusy) {
            resolve();
          }
        });
        this.$promise = [this.fakePromise];
      } else if (Array.isArray(this.cgBusy)) {
        this.$promise = this.cgBusy;
      } else {
        // @ts-ignore
        this.$promise = [this.cgBusy];
      }
    }
    this.tracker.reset({
      promises: this.$promise,
      delay: this.$options.delay || 0,
      minDuration: this.$options.minDuration || 0
    });
  }

  ngOnDestroy(): void {
    this.tracker.destroy();
    delete this.tracker;
    this.componentRef.destroy();
    delete this.componentRef;
    this.$promise = [];
    this.fakePromise = undefined;
    this.fakePromiseResolve = undefined;
  }
}
