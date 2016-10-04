# Range function

```xml
<div ui-layout-container size="30%" style="background : #eee;">
    <pdiv ng-repeat="i in range(30) track by $index" width="70px" height="70px"></sdiv>
</div>
```

```javascript
app.controller("UtilCtrl", ['$scope', function ($scope) {
    $scope.range = function(min, max, step) {
    step = step || 1;
    var input = [];
    for (var i = min; i <= max; i += step) {
        input.push(i);
    }
    return input;
};
}])
````