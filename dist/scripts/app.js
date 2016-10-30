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
    vm.templateUrl = '';

    vm.templates = [
      {label: 'Standard', url: ''},
      {label: 'Custom', url: 'app/custom-template.html'}
    ];

    vm.demo = function () {
      vm.promise = $http.get('https://httpbin.org/delay/3');
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