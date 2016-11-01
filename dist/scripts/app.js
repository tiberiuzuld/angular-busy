(function () {
  'use strict';

  angular.module('angularBusyApp', ['angular-busy', 'ngMaterial']);

})();

(function () {
  'use strict';

  IndexController.$inject = ["$http"];
  angular.module('angularBusyApp').controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController($http) {
    var vm = this;

    vm.delay = 0;
    vm.minDuration = 0;
    vm.message = 'Please Wait...';
    vm.backdrop = true;
    vm.promise = null;
    vm.templateUrl = undefined;

    vm.templates = [
      {label: 'Standard', url: undefined},
      {label: 'Custom', url: 'app/custom-template.html'}
    ];

    vm.promiseTypes = [
      {id: 0, label: 'Promise', value: $http.get.bind(undefined, 'https://httpbin.org/delay/3')},
      {id: 1, label: 'Number', value: 1},
      {id: 2, label: 'Number `falsy`', value: 0},
      {id: 3, label: 'Boolean', value: true},
      {id: 4, label: 'Boolean false', value: false}
    ];

    vm.promiseType = vm.promiseTypes[0];

    vm.demo = function () {
      if (angular.isFunction(vm.promiseType.value)) {
        vm.promise = vm.promiseType.value();
      } else {
        vm.promise = vm.promiseType.value;
      }
    };
  }
})();

(function () {
  'use strict';

  config.$inject = ["$logProvider", "$compileProvider"];
  angular.module('angularBusyApp').config(config);

  /** @ngInject */
  function config($logProvider, $compileProvider) {
    // Disable debug
    $logProvider.debugEnabled(false);
    $compileProvider.debugInfoEnabled(true);
  }

})();

angular.module('angularBusyApp').run(['$templateCache', function($templateCache) {$templateCache.put('app/custom-template.html','<div class="custom-template"><div class="custom-message" ng-bind="$message"></div></div>');}]);