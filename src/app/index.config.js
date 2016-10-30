(function () {
  'use strict';

  angular.module('angularBusyApp').config(config);

  /** @ngInject */
  function config($logProvider, $compileProvider) {
    // Disable debug
    $logProvider.debugEnabled(false);
    $compileProvider.debugInfoEnabled(true);
  }

})();
