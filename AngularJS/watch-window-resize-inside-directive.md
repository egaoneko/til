# Watch window resize inside directive

```javascript
'use strict';

var app = angular.module('plunker', []);

app.directive('myDirective', ['$window', function ($window) {

     return {
        link: link,
        restrict: 'E',
        template: '<div>window size: {{width}}px</div>'
     };

     function link(scope, element, attrs){

       scope.width = $window.innerWidth;

       angular.element($window).bind('resize', function(){

         scope.width = $window.innerWidth;

         // manuall $digest required as resize event
         // is outside of angular
         scope.$digest();
       });

     }

 }]);
```

* [Plunker](http://embed.plnkr.co/39zaaGm1LgNttBfMDInL/)

<iframe style="width: 100%; height: 600px" src="http://embed.plnkr.co/39zaaGm1LgNttBfMDInL/" frameborder="0" allowfullscren="allowfullscren"></iframe>

### Reference

* [stack overflow](http://stackoverflow.com/questions/31622673/angularjs-watch-window-resize-inside-directive)

