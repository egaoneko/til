# Add attribute

```javascript
.directive('ngLoading', function() {
  return function(scope, element, attrs) {
    var img = angular.element('<img class="loading-icon" src="/assets/images/loading-icon.gif"/>');
    element.append(img);
    scope.$watch(attrs.ngLoading, function(isLoading) {
       if(isLoading) {
         img.removeClass('ng-hide');
         element.addClass('loading');
         element.attr('disabled', ''); // here
       } else {
         img.addClass('ng-hide');
         element.removeClass('loading');
         element.removeAttr('disabled'); // here
       }
    });
  };
});
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/24987784/dynamically-add-angular-attributes-to-an-element-from-a-directive)