# How to cancel event propagation on ng-click

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