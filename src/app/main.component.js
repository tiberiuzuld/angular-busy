(function () {
  'use strict';

  angular.module('angularBusyApp').component('main', {
    templateUrl: 'app/main.html',
    controller: IndexController
  });

  /** @ngInject */
  function IndexController($http, $q) {
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
      {id: 0, label: 'Defer', value: $q.defer()},
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
