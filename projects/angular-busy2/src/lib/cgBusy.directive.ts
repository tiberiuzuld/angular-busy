import {
  ComponentRef,
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  OnDestroy,
  Renderer2,
  Signal,
  untracked,
  ViewContainerRef
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CgBusy } from './cgBusy';
import type { CgBusyOptions } from './cgBusyDefaults';
import { CgBusyDefaults } from './cgBusyDefaults';
import { CgBusyTracker } from './cgBusyTracker';

@Directive({ selector: '[cgBusy]', standalone: true, exportAs: 'cgBusy' })
export class CgBusyDirective implements OnDestroy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cgBusy = input.required<
    boolean | number | Promise<any> | Subscription | Observable<any> | Signal<any> | (Promise<any> | Subscription | Observable<any> | Signal<any>)[]
  >();
  cgBusyConfig = input<CgBusyOptions>();
  tracker: CgBusyTracker = new CgBusyTracker();
  fakePromise: Promise<void>;
  fakePromiseResolve: () => void;
  $options = computed<CgBusyOptions>(() => {
    return {
      ...this.defaultOptions,
      ...this.cgBusyConfig()
    };
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $promise: (Promise<any> | Subscription | Observable<any> | Signal<any>)[] = [];
  componentRef: ComponentRef<CgBusy>;
  private viewContainer = inject(ViewContainerRef);
  private defaultOptions = inject(CgBusyDefaults);
  private renderer = inject(Renderer2);
  private el = inject(ElementRef);

  constructor() {
    this.renderer.setStyle(this.el.nativeElement.parentNode, 'position', 'relative');
    this.componentRef = this.viewContainer.createComponent(CgBusy);
    this.tracker.detectChanges = () => this.componentRef.changeDetectorRef.detectChanges();
    this.componentRef.setInput('tracker', this.tracker);
    effect(() => {
      this.componentRef.setInput('options', this.$options());
      untracked(() =>
        this.tracker.reset({
          promises: this.$promise,
          delay: this.$options().delay || 0,
          minDuration: this.$options().minDuration || 0
        })
      );
    });
    effect(() => {
      if (this.fakePromise) {
        this.fakePromiseResolve();
        this.fakePromise = undefined;
        this.fakePromiseResolve = undefined;
      }
      const cgBusy = this.cgBusy();
      if (Number.isFinite(cgBusy) || cgBusy === true || cgBusy === false) {
        this.fakePromise = new Promise(resolve => {
          this.fakePromiseResolve = resolve;
          if (!cgBusy) {
            resolve();
          }
        });
        this.$promise = [this.fakePromise];
      } else if (Array.isArray(cgBusy)) {
        this.$promise = cgBusy;
      } else {
        // @ts-ignore
        this.$promise = [cgBusy];
      }
      untracked(() =>
        this.tracker.reset({
          promises: this.$promise,
          delay: this.$options().delay || 0,
          minDuration: this.$options().minDuration || 0
        })
      );
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
