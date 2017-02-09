(function () {
  'use strict';

  cgBusy.$inject = ["$compile", "$q", "$templateRequest", "angularBusyDefaults", "_cgBusyTrackerFactory"];
  var defaults = {
    templateUrl: 'angular-busy/defaultTemplate.html',
    delay: 0,
    minDuration: 0,
    backdrop: true,
    message: 'Please Wait...',
    wrapperClass: undefined
  };

  angular.module('angular-busy', [])
    .constant('angularBusyDefaults', defaults)
    .constant('cgBusyDefaults', defaults)
    .directive('angularBusy', cgBusy)
    .directive('cgBusy', cgBusy);


  /** @ngInject */
  function cgBusy($compile, $q, $templateRequest, angularBusyDefaults, _cgBusyTrackerFactory) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {

        var templateScope;
        var tracker = _cgBusyTrackerFactory();

        templateScope = scope.$new();

        templateScope.$cgBusyIsActive = tracker.active;

        $templateRequest('angular-busy/angular-busy.html').then(function (template) {
          element.append($compile(template)(templateScope));
        });

        var fakePromise;

        scope.$watchCollection(attrs.cgBusy || attrs.angularBusy, function (options) {

          if (!options || !options.hasOwnProperty('promise')) {
            options = {promise: options};
          }

          if (fakePromise) {
            fakePromise.resolve();
            fakePromise = undefined;
          }

          if (angular.isNumber(options.promise) || options.promise === true || options.promise === false) {
            fakePromise = $q.defer();
            if (!options.promise) {
              fakePromise.resolve();
            }
            options.promise = fakePromise.promise;
          }

          options = angular.extend({}, angularBusyDefaults, options);

          if (!options.templateUrl) {
            options.templateUrl = angularBusyDefaults.templateUrl;
          }

          if (!angular.isArray(options.promise)) {
            options.promise = [options.promise];
          }

          templateScope.$message = options.message;
          templateScope.$backdrop = options.backdrop;
          templateScope.$templateUrl = options.templateUrl;
          templateScope.$wrapperClass = options.wrapperClass;

          tracker.reset({
            promises: options.promise,
            delay: options.delay,
            minDuration: options.minDuration
          });
        }, true);
      }
    };
  }

})();

(function () {
  'use strict';
  _cgBusyTrackerFactory.$inject = ["$timeout", "$q"];
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

angular.module('angular-busy').run(['$templateCache', function($templateCache) {$templateCache.put('angular-busy/angular-busy.html','<div class="ng-hide cg-busy cg-busy-animation {{$wrapperClass}}" ng-show="$cgBusyIsActive()"><div class="cg-busy-backdrop cg-busy-backdrop-animation ng-hide" ng-show="$backdrop"></div><div class="cg-busy-template" ng-include="$templateUrl"></div></div>');
$templateCache.put('angular-busy/defaultTemplate.html','<div class="cg-busy-default-sign"><div class="cg-busy-default-spinner"><div class="bar1"></div><div class="bar2"></div><div class="bar3"></div><div class="bar4"></div><div class="bar5"></div><div class="bar6"></div><div class="bar7"></div><div class="bar8"></div><div class="bar9"></div><div class="bar10"></div><div class="bar11"></div><div class="bar12"></div></div><div class="cg-busy-default-text" ng-bind="$message"></div></div>');}]);