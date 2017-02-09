(function () {
  'use strict';

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
