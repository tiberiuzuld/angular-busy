import {Injectable} from "@angular/core";

@Injectable()
export class cgBusyService {
  promises: Array<any>;
  delayPromise: number;
  durationPromise: number;
  minDuration: number;

  constructor() {
    this.promises = [];
  }

  reset(options) {
    this.minDuration = options.minDuration;

    this.promises = [];
    this.promises.forEach(options.promises, function (p) {
      if (!p || p.$cgBusyFulfilled) {
        return;
      }
      this.addPromiseLikeThing(p);
    });

    if (this.promises.length === 0) {
      //if we have no promises then don't do the delay or duration stuff
      return;
    }

    if (options.delay) {
      this.delayPromise = setTimeout(function () {
        this.delayPromise = null;
        this.createMinDuration(options);
      }, options.delay);
    } else {
      this.createMinDuration(options);
    }
  };

  createMinDuration(options) {
    if (options.minDuration) {
      this.durationPromise = setTimeout(function () {
        this.durationPromise = null;
      }, options.minDuration);
    }
  }

  static isPromise(promiseThing) {
    const then = promiseThing && (promiseThing.then || promiseThing.$then ||
      (promiseThing.$promise && promiseThing.$promise.then) || (promiseThing.promise && promiseThing.promise.then));

    return typeof then !== 'undefined';
  };

  static callThen(promiseThing, success, error) {
    let promise;
    if (promiseThing.then || promiseThing.$then) {
      promise = promiseThing;
    } else if (promiseThing.$promise) {
      promise = promiseThing.$promise;
    } else if (promiseThing.promise) {
      promise = promiseThing.promise;
    }

    const then = (promise.then || promise.$then);

    then.call(promise, success, error);
  };

  addPromiseLikeThing(promise) {

    if (!cgBusyService.isPromise(promise)) {
      throw new Error('cgBusy expects a promise (or something that has a .promise or .$promise');
    }

    if (this.promises.indexOf(promise) !== -1) {
      return;
    }
    this.promises.push(promise);

    cgBusyService.callThen(promise, function () {
      promise.$cgBusyFulfilled = true;
      if (this.promises.indexOf(promise) === -1) {
        return;
      }
      this.promises.splice(this.promises.indexOf(promise), 1);
      if (this.delayPromise && this.promises.length === 0) {
        clearTimeout(this.delayPromise);
      }
    }, function () {
      promise.$cgBusyFulfilled = true;
      if (this.promises.indexOf(promise) === -1) {
        return;
      }
      this.promises.splice(this.promises.indexOf(promise), 1);
    });
  };

  active() {
    return !this.delayPromise && (this.durationPromise || this.promises.length > 0);
  };
}
