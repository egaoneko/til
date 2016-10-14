# angular copy

```javascript
angular.copy(source, [destination]);
```

Creates a deep copy of `source`, which should be an object or an array.

* If no destination is supplied, a copy of the object or array is created.
* If a destination is provided, all of its elements (for arrays) or properties (for objects) are deleted and then all elements/properties from the source are copied to it.
* If source is not an object or array (inc. null and undefined), source is returned.
* If source is identical to destination an exception will be thrown.

### Example

```xml
<div ng-controller="ExampleController">
  <form novalidate class="simple-form">
    <label>Name: <input type="text" ng-model="user.name" /></label><br />
    <label>Age:  <input type="number" ng-model="user.age" /></label><br />
    Gender: <label><input type="radio" ng-model="user.gender" value="male" />male</label>
            <label><input type="radio" ng-model="user.gender" value="female" />female</label><br />
    <button ng-click="reset()">RESET</button>
    <button ng-click="update(user)">SAVE</button>
  </form>
  <pre>form = {{user | json}}</pre>
  <pre>master = {{master | json}}</pre>
</div>
```

```javascript
// Module: copyExample
angular.
  module('copyExample', []).
  controller('ExampleController', ['$scope', function($scope) {
    $scope.master = {};

    $scope.reset = function() {
      // Example with 1 argument
      $scope.user = angular.copy($scope.master);
    };

    $scope.update = function(user) {
      // Example with 2 arguments
      angular.copy(user, $scope.master);
    };

    $scope.reset();
  }]);

```

```javascript
document.append(selected.select.element);
```

### Reference

* [angular.copy](https://docs.angularjs.org/api/ng/function/angular.copy)