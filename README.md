# angular-busy2 [Live Demo](https://tiberiuzuld.github.io/angular-busy)

[![npm version](https://badge.fury.io/js/angular-busy2.svg)](https://badge.fury.io/js/angular-busy2)
![Node CI](https://github.com/tiberiuzuld/angular-busy/workflows/Node%20CI/badge.svg)
[![downloads](https://img.shields.io/npm/dm/angular-busy2.svg)](https://www.npmjs.com/package/angular-busy2)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/tiberiuzuld)

> Show busy/loading indicators on Observable, Subscription, Promise, Boolean, Number

### For [AngularJS 1 branch 1.x](https://github.com/tiberiuzuld/angular-busy/tree/1.x)

## Getting Started

Install with npm.

```bash
npm install angular-busy2 --save
```

Add `CgBusyModule` as a module dependency for your module.

You have to import it with `forRoot` in any module where you want to provide `CgBusyDefaults`.

Usually you do that in your root module (`app.module`).

If you never import it with `forRoot` `CgBusyDefaults` will always be `undefined`.

`forRoot` takes optional `CgBusyOptions` as parameter.

For every omitted option in the supplied `CgBusyOptions` the libraries default value will be used.

```typescript
import { CgBusyModule } from 'angular-busy2';

@NgModule({
  imports: [
    CgBusyModule.forRoot({
      backdrop: true
    }) //import it with .forRoot in your root module. provide some optional Options.
  ]
})
```

In every shared module/sub module you should import `CgBusyModule` without `forRoot` unless you want to provide a
different instance of `CgBusyDefaults`

### Standalone import directive

```typescript
import { CgBusyDirective } from 'angular-busy2';

@Component({
  standalone: true,
  imports: [CgBusyDirective],
  // ...
})

// main.ts if you bootstrap application
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(CgBusyModule.forRoot())
    // ...
  ]
}).catch(err => console.log(err));
```

## Options

The `[cgBusy]` directive expects any Observable, Subscription, Promise, Boolean, Number and optional `[cgBusyConfig]`
configuration object.

In other words. You may do this:

```html

<div [cgBusy]="promise"></div>
```

or this:

```html

<div [cgBusy]="promise"
     [cgBusyConfig]="{templateRef: customTemplate, message:message, backdrop:backdrop, delay:delay, minDuration:minDuration}"></div>
```

* `promise` - Required. The promise/Observables (or array of promises/Observables) that will cause the busy indicator to
  show. Also supports boolean and numbers (truthy values will show loading...)
* `message` - Optional. Defaults to 'Please Wait...'. The message to show in the indicator. This value may be updated
  while the promise is active. The indicator will reflect the updated values as they're changed.
* `backdrop` - Optional. Boolean, default is true. If true a faded backdrop will be shown behind the progress indicator.
* `templateRef` - Optional. If provided, the given template will be shown in place of the default progress indicator
  template.
* `delay` - Optional. The amount of time to wait until showing the indicator. Defaults to 0. Specified in milliseconds.
* `minDuration` - Optional. The amount of time to keep the indicator showing even if the promise was resolved quicker.
  Defaults to 0. Specified in milliseconds.
* `wrapperClass` - Optional. The name(s) of the CSS classes to be applied to the wrapper element of the busy
  sign/animation. Defaults to `undefined`. Typically only useful if you wish to apply different positioning to the
  animation.

## Overriding Defaults

The default values for `message`, `backdrop`, `templateRef`, `delay`, and `minDuration` may all be overridden by
overriding the `CgBusyDefaults`, like so:

```typescript
import { CgBusyDefaults } from 'angular-busy2';

class AppComponent {
  @ViewChild('customTemplate')
  private customTemplateTpl: TemplateRef<any>;

  constructor(private busyDefaults: CgBusyDefaults) {
    this.busyDefaults.delay = 5000;
  }

  ngOnInit() {
    this.busyDefaults.templateRef = this.customTemplateTpl;
  }
}
```

```html

<ng-template #customTemplate let-options="options">
  <div class="custom-template">
    <div class="custom-message" [innerHtml]="options.message"></div>
  </div>
</ng-template>
```

Only the values you'd like overridden need to be specified.

> Fork from original angular-busy (cgBusy) https://github.com/cgross/angular-busy  
