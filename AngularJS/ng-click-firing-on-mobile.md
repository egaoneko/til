# ng-click on firing on mobile

## [ngTouch](https://docs.angularjs.org/api/ngTouch)

```javascript
angular.module('app', ['ngTouch']);
```

## Driective

* ngClick

A more powerful replacement for the default ngClick designed to be used on touchscreen devices. Most mobile browsers wait about 300ms after a tap-and-release before sending the click event. This version handles them immediately, and then prevents the following click event from propagating.

* ngSwipeLeft

Specify custom behavior when an element is swiped to the left on a touchscreen device. A leftward swipe is a quick, right-to-left slide of the finger. Though ngSwipeLeft is designed for touch-based devices, it will work with a mouse click and drag too.

* ngSwipeRight

Specify custom behavior when an element is swiped to the right on a touchscreen device. A rightward swipe is a quick, left-to-right slide of the finger. Though ngSwipeRight is designed for touch-based devices, it will work with a mouse click and drag too.