(function () {
  'use strict';
  angular.module('angular-busy')
    .service('_cgBusyTrackerFactory', _cgBusyTrackerFactory);

  /** @ngInject */
  function _cgBusyTrackerFactory($timeout, $q) {

    return function () {

      var tracker = {};
      tracker.promises = [];
      tracker.delayPromise = null;
      tracker.durationPromise = null;

      tracker.reset = function (options) {
        tracker.minDuration = options.minDuration;

        tracker.promises = [];
        angular.forEach(options.promises, function (p) {
          if (!p || p.$cgBusyFulfilled) {
            return;
          }
          addPromiseLikeThing(p);
        });

        if (tracker.promises.length === 0) {
          //if we have no promises then don't do the delay or duration stuff
          return;
        }

        if (options.delay) {
          tracker.delayPromise = $timeout(function () {
            tracker.delayPromise = null;
            createMinDuration(options);
          }, options.delay);
        } else {
          createMinDuration(options);
        }
      };

      function createMinDuration(options) {
        if (options.minDuration) {
          tracker.durationPromise = $timeout(function () {
            tracker.durationPromise = null;
          }, options.minDuration);
        }
      }

      tracker.isPromise = function (promiseThing) {
        var then = promiseThing && (promiseThing.then || promiseThing.$then ||
          (promiseThing.$promise && promiseThing.$promise.then) || (promiseThing.promise && promiseThing.promise.then));

        return typeof then !== 'undefined';
      };

      tracker.callThen = function (promiseThing, success, error) {
        var promise;
        if (promiseThing.then || promiseThing.$then) {
          promise = promiseThing;
        } else if (promiseThing.$promise) {
          promise = promiseThing.$promise;
        } else if (promiseThing.promise) {
          promise = promiseThing.promise;
        } else if (promiseThing.denodeify) {
          promise = $q.when(promiseThing);
        }

        var then = (promise.then || promise.$then);

        then.call(promise, success, error);
      };

      var addPromiseLikeThing = function (promise) {

        if (!tracker.isPromise(promise)) {
          throw new Error('cgBusy expects a promise (or something that has a .promise or .$promise');
        }

        if (tracker.promises.indexOf(promise) !== -1) {
          return;
        }
        tracker.promises.push(promise);

        tracker.callThen(promise, function () {
          promise.$cgBusyFulfilled = true;
          if (tracker.promises.indexOf(promise) === -1) {
            return;
          }
          tracker.promises.splice(tracker.promises.indexOf(promise), 1);
          if (tracker.delayPromise && tracker.promises.length === 0) {
            $timeout.cancel(tracker.delayPromise);
          }
        }, function () {
          promise.$cgBusyFulfilled = true;
          if (tracker.promises.indexOf(promise) === -1) {
            return;
          }
          tracker.promises.splice(tracker.promises.indexOf(promise), 1);
        });
      };

      tracker.active = function () {
        return !tracker.delayPromise && (tracker.durationPromise || tracker.promises.length > 0);
      };

      return tracker;

    };
  }
})();
