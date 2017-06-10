# Key press event without jQuery

```javascript
angular.module('myDirectives', []).directive('keypressEvents', [
  '$document',
  '$rootScope',
  function($document, $rootScope) {
    return {
      restrict: 'A',
      link: function() {
        $document.bind('keypress', function(e) {
          console.log('Got keypress:', e.which);
          $rootScope.$broadcast('keypress', e);
          $rootScope.$broadcast('keypress:' + e.which, e);
        });
      }
    };
  }
]);
```

```javascript
angular.module.directive('myDirective', [
  function() {
    return {
      restrict: 'E',
      link: function(scope, el, attrs) {
        scope.keyPressed = 'no press :(';
        // For listening to a keypress event with a specific code
        scope.$on('keypress:13', function(onEvent, keypressEvent) {
          scope.keyPressed = 'Enter';
        });
        // For listening to all keypress events
        scope.$on('keypress', function(onEvent, keypressEvent) {
          if (keypress.which === 120) {
            scope.keyPressed = 'x';
          }
          else {
            scope.keyPressed = 'Keycode: ' + keypressEvent.which;
          }
        });
      },
      template: '<h1>{{keyPressed}}</h1>'
    };
  }
]);
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/15044494/what-is-angularjs-way-to-create-global-keyboard-shortcuts)
* [stack overflow](http://stackoverflow.com/questions/23160124/angularjs-multiple-keypress-at-the-same-time)