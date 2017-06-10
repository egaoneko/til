# Event handle with Service

AngularJS의 Service에서 Event를 발생시켜야될 경우, `$rootscope`를 주입받아 사용할 수 있다.

```javascript
angular.module('myServiceModule', [])
  .factory('serverService', ['$rootScope', function($rootScope) {
    return {
      messageFromServer: function() {
        $rootScope.$broadcast('messageReceived', {text: 'something'});
      }
    }
  }]);
```

```javascript
angular.module('myServiceModule', [])
 .controller('MyController', ['$scope', function ($scope) {
   $scope.$on('messageReceived', function(event, msg) {
   });
 }]).
```

## Reference

* [Angular.js 서비스에서 컨트롤러에 이벤트 발생시키기](https://blog.outsider.ne.kr/1135)
* [stack overflow](http://stackoverflow.com/questions/14056874/how-to-emit-events-from-a-factory)