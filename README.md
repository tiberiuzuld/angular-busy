# angular-busy2

> Show busy/loading indicators on any $http or $resource request, or on any promise.

> Fork from original angular-busy (cgBusy) https://github.com/cgross/angular-busy  
> Added support for Angular 1.6.x  
> Renamed module to angular-busy.  
> Directive is now angular-busy. Old directive cg-busy(deprecated) still usable.  
> Default constant is now angularBusyDefaults. Old constant cgBusy(deprecated) still usable.

## Demo

[Live Demo](https://tiberiuzuld.github.io/angular-busy/dist)

## Getting Started

Install with Bower or download the files directly from the dist folder in the repo.

```bash
bower install angular-busy2 --save
npm install angular-busy2 --save
```

Add `dist/angular-busy.js` and `dist/angular-busy.css` to your index.html.

Add `angular-busy` as a module dependency for your module.

```js
angular.module('your_app', ['angular-busy']);
```

Add your promise to $scope and reference that in the `angular-busy` directive:

```js
function MyCtrl($scope,$http,User) {

  //using $http
  $scope.myPromise = $http.get('...');

  //if you have a User class based on $resource
  $scope.myPromise = User.$save();

}
```

```html
<!-- Use the simple syntax -->
<div angular-busy="myPromise"></div>

<!-- Use the advanced syntax -->
<div angular-busy="{promise:myPromise,message:'Loading Your Data',templateUrl:'mycustomtemplate.html'}"></div>
```

## Options

The `angular-busy` directive expects either a promise or a configuration object.

In other words.  You may do this:

```html
<div angular-busy="myPromise"></div>
```

or this:

```html
<div angular-busy="{promise:myPromise,message:'Loading',backdrop:false,templateUrl:'myAwesomeTemplate.html',delay:300,minDuration:700}"></div>
```

* `promise` - Required. The promise (or array of promises) that will cause the busy indicator to show. Also supports boolean and numbers (truthy values will show loading...)
* `message` - Optional.  Defaults to 'Please Wait...'.  The message to show in the indicator.  This value may be updated while the promise is active.  The indicator will reflect the updated values as they're changed.
* `backdrop` - Optional. Boolean, default is true. If true a faded backdrop will be shown behind the progress indicator.
* `templateUrl` - Optional.  If provided, the given template will be shown in place of the default progress indicatory template.
* `delay` - Optional.  The amount of time to wait until showing the indicator.  Defaults to 0.  Specified in milliseconds.
* `minDuration` - Optional.  The amount of time to keep the indicator showing even if the promise was resolved quicker.  Defaults to 0.  Specified in milliseconds.
* `wrapperClass` - Optional.  The name(s) of the CSS classes to be applied to the wrapper element of the busy sign/animation.  Defaults to `undefined`.  Typically only useful if you wish to apply different positioning to the animation.

## Providing Custom Templates

The `angular-busy` indicator is a regular Angular template.  The templates have access to the scope where `angular-busy` was declared so you may reference your local scope variables in your custom templates.  Additionally, the scope is augmented with a `$message` field containing the indicator message text.

## Overriding Defaults

The defaut values for `message`, `backdrop`, `templateUrl`, `delay`, and `minDuration` may all be overriden by overriding the `$injector` value for `cgBusyDefaults`, like so:

```js
angular.module('your_app').config(function(angularBusyDefaults) {    
  
  angularBusyDefaults.message = 'Loading Stuff';
  angularBusyDefaults.backdrop = false;
  angularBusyDefaults.templateUrl = 'my_custom_template.html';
  angularBusyDefaults.delay = 300;
  angularBusyDefaults.minDuration = 700;
  angularBusyDefaults.wrapperClass = 'my-class my-class2';
  
});
```

Only the values you'd like overridden need to be specified.


## Release History
 * v5.2.1 - Fix issue adding position relative on a position absolute element
 * v5.2.0 - Add support for direct use of $q.defer()
 * v5.1.1 - Fix bug when promise undefined.
 * v5.1.0 - Add CommonJS support. Add boolean and numbers support.
 * v5.0.0 - Compatibility with 1.6.x. Rename to angular-busy.
 * v4.1.3 - Fix for issue #45 and issue #49.
 * v4.1.2 - Small bugs fixed, wrapperClass option added.
 * v4.1.1 - Compatibility with Angular 1.3.
 * v4.1.0
   * Change to how `delay` and `minDuration` work together.  If specified together, `minDuration` will only take effect if the promise was active through the delay.  For example, if `delay`=200 and `minDuration`=500 and the actual promise only took 100ms, no indicator will be shown.  If the delay threshold is reached, the indicator will show for `minDuration` ms rather than `minDuration` minus `delay` as it had been before.
   * Backdrop now fades in with no movement.  Message still animates in from the top.
 * v4.0.4 - Added bower_components to bower ignore.
 * v4.0.3 - Now supports Q promises.
 * v4.0.2 - Fix for min duration only being used when delay also being set.
 * v4.0.0 - Big update
  * Dependency on angular-promise-tracker has been removed.  We now track promises directly.
  * Message is now configurable.
  * The template options is now templateUrl.
  * The delay option has been added.
  * The minDuration option has been added.
  * Changing default template has been modified to be part of the new `cgBusyDefaults` value.
 * v3.0.2 - Reverting back to promise-tracker v1.5 due to changes in the api.
 * v3.0.1 - Fix for using cg-busy when a tracker has already been registered.
 * v3.0.0 - Support for new promise-tracker api.  Fix for multiple cg-busy's on the same scope.
 * v2.2.0 - Support for multiple trackers per indicator.
 * v2.1.0 - Removed work-around for issues in Angular 1.2-rc's.
 * v2.0.0 - Moved to Angular 1.2.0-rc1.
 * v1.0.0 - Added Bower support.
 * v0.1.1 - Updated to Angular 1.1.5 animation syntax.
 * v0.1.0 - Initial release.
