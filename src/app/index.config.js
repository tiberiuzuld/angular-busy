(function () {
  'use strict';

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
