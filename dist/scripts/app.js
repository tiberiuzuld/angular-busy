(function () {
  'use strict';

  angular.module('angularBusyApp', ['angular-busy', 'ngMaterial']);

})();

(function () {
  'use strict';

  IndexController.$inject = ["$http", "$q"];
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

(function () {
  'use strict';

  config.$inject = ["$logProvider", "$compileProvider", "$mdThemingProvider"];
  angular.module('angularBusyApp').config(config);

  /** @ngInject */
  function config($logProvider, $compileProvider, $mdThemingProvider) {
    // Disable debug
    $logProvider.debugEnabled(false);
    $compileProvider.debugInfoEnabled(true);
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('blue');
  }

})();

angular.module('angularBusyApp').run(['$templateCache', function($templateCache) {$templateCache.put('app/custom-template.html','<div class="custom-template"><div class="custom-message" ng-bind="$message"></div></div>');
$templateCache.put('app/main.html','<div class="layout-column"><div><h2>angular-busy2</h2><p>Show busy/loading indicators on any $http or $resource request, or on any promise.</p></div><div class="layout-column layout-gt-md-row layout-align-space-between"><form class="flex layout-column" name="demoForm"><md-subheader>Demo Options</md-subheader><md-divider></md-divider><md-input-container><label for="delayInput">Delay (ms)</label> <input type="number" id="delayInput" name="delayInput" required="" min="0" ng-model="$ctrl.delay"></md-input-container><md-input-container><label for="durationInput">Min Duration (ms)</label> <input type="number" id="durationInput" name="durationInput" required="" min="0" ng-model="$ctrl.minDuration"></md-input-container><md-input-container><label for="message">Message</label> <input type="text" id="message" name="message" ng-model="$ctrl.message"></md-input-container><md-input-container><md-checkbox ng-model="$ctrl.backdrop" name="backdrop">Show Backdrop</md-checkbox></md-input-container><md-input-container><label for="template">Template Url</label><md-select id="template" ng-model="$ctrl.templateUrl" name="templateUrl"><md-option ng-repeat="template in $ctrl.templates track by $index" ng-value="template.url" ng-bind="::template.label"></md-option></md-select></md-input-container><md-input-container><label for="promiseType">Promise type</label><md-select id="promiseType" ng-model="$ctrl.promiseType" name="promiseType"><md-option ng-repeat="promiseType in $ctrl.promiseTypes track by $index" ng-value="promiseType" ng-bind="::promiseType.label"></md-option></md-select></md-input-container><div class="layout-row layout-align-end-center"><md-button type="submit" class="md-raised md-accent" ng-disabled="demoForm.$invalid" ng-click="$ctrl.demo()">Demo</md-button></div></form><div class="flex flex-offset-5" angular-busy="{promise:$ctrl.promise,templateUrl:$ctrl.templateUrl,message:$ctrl.message,backdrop:$ctrl.backdrop,delay:$ctrl.delay,minDuration:$ctrl.minDuration}"><md-grid-list md-cols="4" md-row-height="6:1" md-gutter="1px"><md-grid-tile><b>#</b></md-grid-tile><md-grid-tile><b>First Name</b></md-grid-tile><md-grid-tile><b>Last Name</b></md-grid-tile><md-grid-tile><b>Username</b></md-grid-tile><md-grid-tile><div>1</div></md-grid-tile><md-grid-tile><div>Mark</div></md-grid-tile><md-grid-tile><div>Otto</div></md-grid-tile><md-grid-tile><div>@mdo</div></md-grid-tile><md-grid-tile><div>2</div></md-grid-tile><md-grid-tile><div>Mark</div></md-grid-tile><md-grid-tile><div>Otto</div></md-grid-tile><md-grid-tile><div>@TwBootstrap</div></md-grid-tile><md-grid-tile><div>3</div></md-grid-tile><md-grid-tile><div>Jacob</div></md-grid-tile><md-grid-tile><div>Thornton</div></md-grid-tile><md-grid-tile><div>@fat</div></md-grid-tile><md-grid-tile><div>4</div></md-grid-tile><md-grid-tile><div>Larry</div></md-grid-tile><md-grid-tile><div>the Bird</div></md-grid-tile><md-grid-tile><div>@twitter</div></md-grid-tile></md-grid-list></div></div></div>');}]);