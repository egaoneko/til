# stopPropagation method

```xml
<div ng-controller="OverlayCtrl" class="overlay" ng-click="hideOverlay()">
  <img src="http://some_src" ng-click="nextImage($event)"/>
</div>
```

```javascript
$scope.nextImage = function($event) {
  $event.stopPropagation();
  // Some code to find and display the next image
}
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/15193539/whats-the-best-way-to-cancel-event-propagation-between-nested-ng-click-calls)