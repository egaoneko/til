# $digest already in progress

```javascript
if (!$scope.$$phase) {
  $scope.$apply();
}
```

`ng-repeat`으로 양방향 바인딩되어 있는 데이터를 갱신하기 위해서 `$scope.$apply()`를 사용하여 처리하고자 하였지만 해결되지 않았다. 또한 이를 사용하는 것은 [좋지 못한 방법](https://github.com/angular/angular.js/wiki/Anti-Patterns)이다.

```javascript
$timeout(function(){
  // Any code in here will automatically have an $scope.apply() run afterwards
  $scope.myvar = newValue;
  // And it just works!
});
```

이를 해결하기 위하여 `$timeout`을 사용하였고 이는 잘 작동하였다.

### Reference

* [AngularJS error: “digest already in progress”](http://davidburgosonline.com/dev/2014/correctly-fix-angularjs-error-digest-already-in-progress/)
* [stack overflow](http://stackoverflow.com/questions/12729122/angularjs-prevent-error-digest-already-in-progress-when-calling-scope-apply)