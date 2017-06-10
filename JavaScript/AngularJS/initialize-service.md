# Initialize service with asynchronous data

[`$routeProvider.when('/path',{ resolve:{...}`](https://docs.angularjs.org/api/ngRoute/provider/%24routeProvider)

> An optional map of dependencies which should be injected into the controller. If any of these dependencies are promises, the router will wait for them all to be resolved or one to be rejected before the controller is instantiated. If all the promises are resolved successfully, the values of the resolved promises are injected and `$routeChangeSuccess` event is fired. If any of the promises are rejected the `$routeChangeError` event is fired. For easier access to the resolved dependencies from the template, the resolve map will be available on the scope of the route, under $resolve (by default) or a custom name specified by the resolveAs property (see below). This can be particularly useful, when working with components as route templates.

```javascript
app.service('MyService', function($http) {
    var myData = null;

    var promise = $http.get('data.json').success(function (data) {
      myData = data;
    });

    return {
      promise:promise,
      setData: function (data) {
          myData = data;
      },
      doStuff: function () {
          return myData;//.getSomeData();
      }
    };
});
```

```javascript
app.config(function($routeProvider){
  $routeProvider
    .when('/',{controller:'MainCtrl',
    template:'<div>From MyService:<pre>{{data | json}}</pre></div>',
    resolve:{
      'MyServiceData':function(MyService){
        // MyServiceData will also be injectable in your controller, if you don't want this you could create a new promise with the $q service
        return MyService.promise;
      }
    }})
  }):
```

```javascript
app.controller('MainCtrl', function($scope,MyService) {
  console.log('Promise is now resolved: '+MyService.doStuff().data)
  $scope.data = MyService.doStuff();
});
```

[Plunker](http://plnkr.co/edit/GKg21XH0RwCMEQGUdZKH?p=preview)

## Refernce

* [stack overflow](http://stackoverflow.com/questions/16286605/angularjs-initialize-service-with-asynchronous-data)