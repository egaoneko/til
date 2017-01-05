# ng-cloak when a page is blinking

> The `ngCloak` directive is used to prevent the Angular html template from being briefly displayed by the browser in its raw (uncompiled) form while your application is loading. Use this directive to avoid the undesirable flicker effect caused by the html template display. [ngCloak](https://docs.angularjs.org/api/ng/directive/ngCloak)

```xml
<html ng-clock ng-app=“sampleApp”>
```

```css
# when : CSP(Content Security Policy)

[ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
  display: none !important;
}
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/11249768/angularjs-ng-cloak-ng-show-elements-blink)