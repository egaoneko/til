# ngTransclude

`ng-transclude`를 이용하여 `template` 또는 `templateUrl`에서 디렉티브내의 원본내용을 포함시킬지 설정한다.

* `true`로 설정 시 디렉티브에 포함된 원본내용을 `template`의 `ng-transclude`를 사용한 곳으로 포함합니다.

```xml
<script>
  angular.module('transcludeExample', [])
   .directive('pane', function(){
      return {
        restrict: 'E',
        transclude: true,
        scope: { title:'@' },
        template: '<div style="border: 1px solid black;">' +
                    '<div style="background-color: gray">{{title}}</div>' +
                    '<ng-transclude></ng-transclude>' +
                  '</div>'
      };
  })
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.title = 'Lorem Ipsum';
    $scope.text = 'Neque porro quisquam est qui dolorem ipsum quia dolor...';
  }]);
</script>
<div ng-controller="ExampleController">
  <input ng-model="title" aria-label="title"> <br/>
  <textarea ng-model="text" aria-label="text"></textarea> <br/>
  <pane title="{{title}}"><span>{{text}}</span></pane>
</div>
```

`pane`의 `<span>{{text}}</span>`가 `<ng-transclude></ng-transclude>`부분에 포함된다.

### Reference

* [AngularJS: 사용자정의 디렉티브(directive) 이야기](http://www.nextree.co.kr/p4850/)
* [ngTransclude](https://docs.angularjs.org/api/ng/directive/ngTransclude)