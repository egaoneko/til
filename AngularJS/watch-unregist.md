# $watch unregist

When calling `$watch` a function is returned that unregisters the bound expression.

```javascript
var unregister = $scope.$watch('foo', function () {
  // Do something interesting here ...
  unregister();
});
```

## Reference

* [$watch](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watch)
* [stack overflow](http://stackoverflow.com/questions/15715672/how-do-i-stop-watching-in-angularjs)