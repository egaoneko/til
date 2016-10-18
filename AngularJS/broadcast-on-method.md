# broadcast & on method

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

## Reference

* [stack overflow](http://stackoverflow.com/questions/19446755/on-and-broadcast-in-angular)