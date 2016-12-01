# $on unregist

When calling `$on` a function is returned that unregisters the bound expression.

```javascript
var unregister = $scope.$on('foo', function () {
  // Do something interesting here ...
  unregister();
});
```

## Reference

* [$on](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on)