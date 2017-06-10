# broadcast & on & emit method

* `.$on(name, listener)` - Listens for a specific event by a given `name`
* `.$broadcast(name, args)` - Broadcast an event down through the `$scope` of all children
* `.$emit(name, args)` - Emit an event up the `$scope` hierarchy to all parents, including the `$rootScope`

## $broadcast & $on
```javascript
$scope.startScanner = function() {

    $rootScope.$broadcast('scanner-started');
}
```

```javascript
$scope.$on('scanner-started', function(event, args) {

    // do what you want to do
});
```

## $broadcast & $on with arguments
```javascript
$rootScope.$broadcast('scanner-started', { any: {} });
```

```javascript
$scope.$on('scanner-started', function(event, args) {

    var anyThing = args.any;
    // do what you want to do
});
```

## $emit

```xml
<div ng-controller="Controller1">
    <button ng-click="broadcast()">Broadcast 1</button>
    <button ng-click="emit()">Emit 1</button>
</div>

<div ng-controller="Controller2">
    <button ng-click="broadcast()">Broadcast 2</button>
    <button ng-click="emit()">Emit 2</button>
    <div ng-controller="Controller3">
        <button ng-click="broadcast()">Broadcast 3</button>
        <button ng-click="emit()">Emit 3</button>
        <br>
        <button ng-click="broadcastRoot()">Broadcast Root</button>
        <button ng-click="emitRoot()">Emit Root</button>
    </div>
</div>
```

```javascript
app.controller('Controller1', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.broadcastAndEmit = function(){
        // This will be seen by Controller 1 $scope and all children $scopes 
        $scope.$broadcast('eventX', {data: '$scope.broadcast'});

        // Because this event is fired as an emit (goes up) on the $rootScope,
        // only the $rootScope will see it
        $rootScope.$emit('eventX', {data: '$rootScope.emit'});
    };
    $scope.emit = function(){
        // Controller 1 $scope, and all parent $scopes (including $rootScope) 
        // will see this event
        $scope.$emit('eventX', {data: '$scope.emit'});
    };

    $scope.$on('eventX', function(ev, args){
        console.log('eventX found on Controller1 $scope');
    });
    $rootScope.$on('eventX', function(ev, args){
        console.log('eventX found on $rootScope');
    });
}]);
```

* Broadcast 1 - Will only be seen by Controller 1 `$scope`
* Emit 1 - Will be seen by Controller 1 `$scope` then `$rootScope`
* Broadcast 2 - Will be seen by Controller 2 `$scope` then Controller 3 `$scope`
* Emit 2 - Will be seen by Controller 2 `$scope` then `$rootScope`
* Broadcast 3 - Will only be seen by Controller 3 `$scope`
* Emit 3 - Will be seen by Controller 3 `$scope`, Controller 2 `$scope` then `$rootScope`
* Broadcast Root - Will be seen by `$rootScope` and `$scope` of all the Controllers (1, 2 then 3)
* Emit Root - Will only be seen by `$rootScope`

[Example](https://jsfiddle.net/th3uiguy/kjgj7Ldz/)

## Reference

* [stack overflow](http://stackoverflow.com/questions/19446755/on-and-broadcast-in-angular)
* [$on(), $broadcast() and $emit()](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on)