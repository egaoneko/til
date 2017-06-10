# Share data between Controller in AngularJS

### Problem
AngularJS에서 두 ``controller``, ``component`` 등에서 서로 데이터의 공유가 필요한 상황이 발생하였다.

### Solution

``factory``를 사용해 ``object``를 리턴하여, 두 ``controller``가 같은 ``object``를 참조하도록 한다.

#### js

```javascript
// declare the app with no dependencies
var myApp = angular.module('myApp', []);

// Create the factory that share the Fact
myApp.factory('Fact', function(){
  return { Field: '' };
});

// Two controllers sharing an object that has a string in it
myApp.controller('FirstCtrl', function( $scope, Fact ){
  $scope.Alpha = Fact;
});

myApp.controller('SecondCtrl', function( $scope, Fact ){
  $scope.Beta = Fact;
});
```

#### html

```xml
<div ng-controller="FirstCtrl">
    <input type="text" ng-model="Alpha.Field">
    First {{Alpha.Field}}
</div>

<div ng-controller="SecondCtrl">
<input type="text" ng-model="Beta.Field">
    Second {{Beta.Field}}
</div>
```

### Addition

어플리케이션이 커지고 복잡해지면 테스트하기 힘든 환경에 놓이는데, ``getter``, ``setter``를 통해 제한된 접근 방법을 제공하여 처리한다. ``controller``에서는  값을 ``watch``한다.

#### js

```javascript
myApp.factory('Data', function () {

    var data = {
        FirstName: ''
    };

    return {
        getFirstName: function () {
            return data.FirstName;
        },
        setFirstName: function (firstName) {
            data.FirstName = firstName;
        }
    };
});

...

myApp.controller('FirstCtrl', function ($scope, Data) {

    $scope.firstName = '';

    $scope.$watch('firstName', function (newValue, oldValue) {
        if (newValue !== oldValue) Data.setFirstName(newValue);
    });
});

myApp.controller('SecondCtrl', function ($scope, Data) {

    $scope.$watch(function () { return Data.getFirstName(); }, function (newValue, oldValue) {
        if (newValue !== oldValue) $scope.firstName = newValue;
    });
});
```

#### html

```xml
<div ng-controller="FirstCtrl">
  <input type="text" ng-model="FirstName">
  <br>Input is : <strong>{{FirstName}}</strong>
</div>
<hr>
<div ng-controller="SecondCtrl">
  Input should also be here: {{FirstName}}
</div>
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/21919962/share-data-between-angularjs-controllers)