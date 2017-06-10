# $digest already in progress

## Cause

```javascript
$scope.apply(function() {
  // some code...
  $scope.apply(function() { ... });
});
```

Hence the error "digest already in progress" can only occur in one situation: When an $apply is issued inside another $apply.

## Solution 1

```javascript
if(!$scope.$$phase) {
  //$digest or $apply
}

if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
    $scope.$apply();
}

```

> Don't do `if (!$scope.$$phase) $scope.$apply()`, it means your `$scope.$apply()` isn't high enough in the call stack.

* [Anti Patterns](https://github.com/angular/angular.js/wiki/Anti-Patterns)

## Solution 2

```javascript
$timeout(function(){
  // Any code in here will automatically have an $scope.apply() run afterwards
  $scope.myvar = newValue;
  // And it just works!
});

$scope.$evalAsync(function() {
	....
});
```

* [$apply() & $digest() & $timeout() & $evalAsync()](./apply-digest-timeout-evalAsync-method.md)

## Solution 3 (Best)

```javascript
// Safe
setTimeout(function () {
    $scope.$apply(function () {
        $scope.message = "Timeout called!";
    });
}, 2000);

// Safe
$scope.$apply(function () {
    setTimeout(function () {
        $scope.$apply(function () {
            $scope.message = "Timeout called!";
        });
    }, 2000);
});

// Not safe
// Because $timeout call $rootScope.$apply()
$timeout(function () {
    $scope.$apply(function () {
        $scope.message = "Timeout called!";
    });
}, 2000);
```

This situation can not arise if we use `$scope.apply` in a pure non-angularjs callback, like for example the callback of `setTimeout`. So the following code is 100% bulletproof and there is no need to do a `if (!$scope.$$phase) $scope.$apply()`.

Due to how your browser executes Javascript, it is not possible that two digest calls collide by chance.

>The JavaScript code we write doesn’t all run in one go, instead it executes in turns. Each of these turns runs uninterupted from start to finish, and when a turn is running, nothing else happens in our browser. (from http://jimhoskins.com/2012/12/17/angularjs-and-apply.html)


## Reference

* [stack oveflow](http://stackoverflow.com/questions/22346990/why-is-using-ifscope-phase-scope-apply-an-anti-pattern)
* [AngularJS and scope.$apply](http://jimhoskins.com/2012/12/17/angularjs-and-apply.html)
* [stack overflow](http://stackoverflow.com/questions/12729122/angularjs-prevent-error-digest-already-in-progress-when-calling-scope-apply)
* [Anti Patterns](https://github.com/angular/angular.js/wiki/Anti-Patterns)
* [Scope](https://docs.angularjs.org/guide/scope)
* [AngularJS error: “digest already in progress”](http://davidburgosonline.com/dev/2014/correctly-fix-angularjs-error-digest-already-in-progress/)