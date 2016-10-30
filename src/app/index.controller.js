(function () {
  'use strict';

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
