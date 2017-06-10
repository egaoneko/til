# Compile in directive

```javascript
$scope.$on('insertItem',function(ev,attrs){
  var chart = angular.element(document.createElement('chart'));
  var el = $compile( chart )( $scope );

  //where do you want to place the new element?
  angular.element(document.body).append(chart);

  $scope.insertHere = el;
};
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/16656735/insert-directive-programatically-angular)