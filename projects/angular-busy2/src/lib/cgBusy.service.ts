import {Observable, Subscription} from 'rxjs';

export interface TrackerOptions {
  minDuration: number;
  delay: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  promises: any[];
}

export class CgBusyService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  promises: any[];
  subscriptions: Subscription[];
  delayPromise: number;
  durationPromise: number;
  minDuration: number;
  detectChanges: () => void | null;

  constructor() {
    this.promises = [];
    this.subscriptions = [];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isPromise(promiseThing: PromiseLike<any>): boolean {
    return promiseThing && (promiseThing instanceof Promise || promiseThing instanceof Observable || promiseThing instanceof Subscription);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callThen(promiseThing: any, callback: () => void): void {
    if (promiseThing.finally) {
      promiseThing.finally(callback);
    } else if (promiseThing.then) {
      promiseThing.then(callback, callback);
    } else if (promiseThing instanceof Observable) {
      let subscription: Subscription;
      const cc = () => {
        if (subscription) {
          subscription.unsubscribe();
        }
        callback();
      };
      subscription = promiseThing.subscribe({error: cc, complete: cc});
      this.subscriptions.push(subscription);
    } else if (promiseThing instanceof Subscription) {
      promiseThing.add(callback);
    } else {
      throw new Error('cgBusy expects a Promise ,an Observable, a Subscription, a number or a boolean');
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
        if (this.detectChanges) {
          this.detectChanges();
        }
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
        if (this.detectChanges) {
          this.detectChanges();
        }
      }, options.minDuration);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addPromiseLikeThing(promise: any): void {

    if (!CgBusyService.isPromise(promise)) {
      throw new Error('cgBusy expects a Promise ,an Observable, a Subscription, a number or a boolean');
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
        this.delayPromise = null;
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
