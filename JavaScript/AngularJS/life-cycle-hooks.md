# Life-cycle hooks

Directive controllers can provide the following methods that are called by AngularJS at points in the life-cycle of the
directive:

* `$onInit()` - Called on each controller after all the controllers on an element have been constructed and
  had their bindings initialized (and before the pre &amp; post linking functions for the directives on
  this element). This is a good place to put initialization code for your controller.
* `$onChanges(changesObj)` - Called whenever one-way (`<`) or interpolation (`@`) bindings are updated. The
  `changesObj` is a hash whose keys are the names of the bound properties that have changed, and the values are an
  object of the form `{ currentValue, previousValue, isFirstChange() }`. Use this hook to trigger updates within a
  component such as cloning the bound value to prevent accidental mutation of the outer value. Note that this will
  also be called when your bindings are initialized.
* `$doCheck()` - Called on each turn of the digest cycle. Provides an opportunity to detect and act on
  changes. Any actions that you wish to take in response to the changes that you detect must be
  invoked from this hook; implementing this has no effect on when `$onChanges` is called. For example, this hook
  could be useful if you wish to perform a deep equality check, or to check a Date object, changes to which would not
  be detected by AngularJS's change detector and thus not trigger `$onChanges`. This hook is invoked with no arguments;
  if detecting changes, you must store the previous value(s) for comparison to the current values.
* `$onDestroy()` - Called on a controller when its containing scope is destroyed. Use this hook for releasing
  external resources, watches and event handlers. Note that components have their `$onDestroy()` hooks called in
  the same order as the `$scope.$broadcast` events are triggered, which is top down. This means that parent
  components will have their `$onDestroy()` hook called before child components.
* `$postLink()` - Called after this controller's element and its children have been linked. Similar to the post-link
  function this hook can be used to set up DOM event handlers and do direct DOM manipulation.
  Note that child elements that contain `templateUrl` directives will not have been compiled and linked since
  they are waiting for their template to load asynchronously and their own compilation and linking has been
  suspended until that occurs.

## Reference

* [Life-cycle hooks](https://docs.angularjs.org/api/ng/service/$compile#life-cycle-hooks)
* [LIFECYCLE HOOKS](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html)
* [angular2 lifecycle hooks (라이프 싸이클 훅)](https://mayajuni.github.io/2016/10/21/angular2-lifecycle-hooks/)