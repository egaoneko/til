# How to watch service variables

### Problem

* Service

```javascript
factory('aService', ['$rootScope', '$resource', function ($rootScope, $resource) {
    var service = {
    	foo: []
    };

    return service;
}]);
```

* View

```xml
<div ng-controller="FooCtrl">
  <div ng-repeat="item in foo">{{ item }}</div>
</div>
```

* Controller

```javascript
function FooCtrl($scope, aService) {
	$scope.aService = aService;
    $scope.foo = aService.foo;

    $scope.$watch('aService.foo', function (newVal, oldVal, scope) {
    if(newVal) {
      scope.foo = newVal;
    }
    });
}
```

### Solution(by using observer pattern)

* Service

```javascript
factory('aService', function() {
    var observerCallbacks = [];

    //register an observer
    this.registerObserverCallback = function(callback){
    	observerCallbacks.push(callback);
    };

    //unregister an observer
    this.unregisterObserverCallback = function(...){
    	...
    };

    //call this when you know 'foo' has been changed
    var notifyObservers = function(){
        angular.forEach(observerCallbacks, function(callback){
            callback();
        });
    };

    //example of when you may want to notify observers
    this.foo = someNgResource.query().$then(function(){
    	notifyObservers();
    });
});
```

* Controller

```javascript
function FooCtrl($scope, aService){
    var updateFoo = function(){
    	$scope.foo = aService.foo;
    };

    aService.registerObserverCallback(updateFoo);
    //service now in control of updating foo
};
```

### Solution(by using $broadcast & $on)

* Service

```javascript
.factory('UserService', [ '$rootScope', function($rootScope) {
   var service = <whatever you do for the object>

   service.save = function(data) {
     .. validate data and update model ..
     // notify listeners and provide the data that changed [optional]
     $rootScope.$broadcast('user:updated',data);
   }

   // alternatively, create a callback function and $broadcast from there if making an ajax call

   return service;
}]);
```

* Controller

```javascript
.controller('UserCtrl', [ 'UserService', '$scope', function(UserService, $scope) {

  var user = UserService.getUser();

  // if you don't want to expose the actual object in your scope you could expose just the values, or derive a value for your purposes
   $scope.name = user.firstname + ' ' +user.lastname;

   $scope.$on('user:updated', function(event,data) {
     // you could inspect the data to see if what you care about changed, or just update your own scope
     $scope.name = user.firstname + ' ' + user.lastname;
   });

   // different event names let you group your code and logic by what happened
   $scope.$on('user:logout', function(event,data) {
     .. do something differently entirely ..
   });

 }]);
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/12576798/angularjs-how-to-watch-service-variables)
