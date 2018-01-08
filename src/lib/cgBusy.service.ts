import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

export interface TrackerOptions {
  minDuration: number;
  delay: number;
  promises: Array<any>;
}

@Injectable()
export class CgBusyService {
  promises: Array<any>;
  subscriptions: Array<Subscription>;
  delayPromise: any;
  durationPromise: any;
  minDuration: number;
  detectChanges: Function | null;

  constructor() {
    this.promises = [];
    this.subscriptions = [];
  }

  static isPromise(promiseThing: any): boolean {
    return promiseThing && (promiseThing instanceof Promise || promiseThing instanceof Observable || promiseThing instanceof Subscription);
  }

  callThen(promiseThing: any, callback: Function): void {
    if (promiseThing.finally) {
      promiseThing.finally(callback);
    } else if (promiseThing.then) {
      promiseThing.then(callback, callback);
    } else if (promiseThing instanceof Observable) {
      let subscription: Subscription;
      const cc = () => {
        subscription.unsubscribe();
        callback();
      };
      subscription = promiseThing.subscribe(undefined, cc, cc);
      this.subscriptions.push(subscription);
    } else if (promiseThing instanceof Subscription) {
      promiseThing.add(callback);
    } else {
      throw new Error('cgBusy expects a Promise ,an Observable or a Subscription');
    }
  }

  reset(options: TrackerOptions): void {
    this.minDuration = options.minDuration;

    this.promises = [];
    options.promises.forEach((p) => {
      if (!p || p.$cgBusyFulfilled) {
        return;
      }
      this.addPromiseLikeThing(p);
    });

    if (this.promises.length === 0) {
      // if we have no promises then don't do the delay or duration stuff
      return;
    }

    if (options.delay) {
      this.delayPromise = setTimeout(() => {
        this.delayPromise = null;
        this.createMinDuration(options);
      }, options.delay);
    } else {
      this.createMinDuration(options);
    }
  }

  createMinDuration(options: TrackerOptions): void {
    if (options.minDuration) {
      this.durationPromise = setTimeout(() => {
        this.durationPromise = null;
      }, options.minDuration);
    }
  }

  addPromiseLikeThing(promise: any): void {

    if (!CgBusyService.isPromise(promise)) {
      throw new Error('cgBusy expects a Promise ,an Observable or a Subscription');
    }

    if (this.promises.indexOf(promise) !== -1) {
      return;
    }
    this.promises.push(promise);

    this.callThen(promise, () => {
      promise.$cgBusyFulfilled = true;
      if (this.promises.indexOf(promise) === -1) {
        return;
      }
      this.promises.splice(this.promises.indexOf(promise), 1);
      if (this.delayPromise && this.promises.length === 0) {
        clearTimeout(this.delayPromise);
      }
      if (this.detectChanges) {
        this.detectChanges();
      }
    });
  }

  active(): boolean {
    return !this.delayPromise && (!!this.durationPromise || this.promises.length > 0);
  }

  destroy(): void {
    if (this.delayPromise) {
      clearTimeout(this.delayPromise);
      this.delayPromise = null;
    }
    if (this.durationPromise) {
      clearTimeout(this.durationPromise);
      this.durationPromise = null;
    }
    this.promises = [];
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
    this.detectChanges = null;
  }
}
