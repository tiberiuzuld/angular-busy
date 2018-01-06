import {Directive, ElementRef, Input} from '@angular/core';
import {CgBusyOptions, CgBusyPromise} from './cgBusy.interface';
import {CgBusyService} from './cgBusy.service';
import {CgBusyDefaults} from 'lib/cgBusyDefaults.service';

@Directive({selector: '[cgBusy]'})
export class CgBusyDirective {
  @Input('cgBusy') options: CgBusyOptions | CgBusyPromise;
  tracker: CgBusyService;
  fakePromise: any;

  constructor(el: ElementRef, defaultOptions: CgBusyDefaults) {

    var templateScope;
    this.tracker = new CgBusyService();

    templateScope = scope.$new();

    templateScope.$cgBusyIsActive = this.tracker.active;

    $templateRequest('angular-busy/angular-busy.html').then(function (template) {
      el.nativeElement.append($compile(template)(templateScope));
    });

    scope.$watchCollection(attrs.cgBusy || attrs.angularBusy, function (options) {

      if (!options || !options.hasOwnProperty('promise')) {
        options = {promise: options};
      }

      if (this.fakePromise) {
        this.fakePromise.resolve();
        this.fakePromise = undefined;
      }

      if (Number.isFinite(options.promise) || options.promise === true || options.promise === false) {
        this.fakePromise = $q.defer();
        if (!options.promise) {
          this.fakePromise.resolve();
        }
        options.promise = this.fakePromise.promise;
      }

      options = angular.extend({}, defaultOptions, options);

      if (!options.templateUrl) {
        options.templateUrl = defaultOptions.templateUrl;
      }

      if (!Array.isArray(options.promise)) {
        options.promise = [options.promise];
      }

      templateScope.$message = options.message;
      templateScope.$backdrop = options.backdrop;
      templateScope.$templateUrl = options.templateUrl;
      templateScope.$wrapperClass = options.wrapperClass;

      this.tracker.reset({
        promises: options.promise,
        delay: options.delay,
        minDuration: options.minDuration
      });
    }, true);
  }
}
