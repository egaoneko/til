# 단방향 메서드 연동

### 손자에게 메서드를 전달하는 방법

* children

```xml
<node ng-repeat="item in nodes" ng-model="item" delete-article="deleteArticle({node_item: node_item})" edit-article="editArticle({node_item: node_item})"></node>
```

* grand children

```xml
<node-list ng-model="node.Options" delete-article="deleteArticle({node_item: node_item})" edit-article="editArticle({node_item: node_item})"></node-list>
```

#### Addition

```javascript
function routerConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    });

  $urlRouterProvider.otherwise('/');
}

function MainController () {
  var vm = this;

  vm.select = function (data, event) {
    console.log(data);
  };
}
```

위와 같이 작성을 하고 아래와 같은 실수를 하지 말자.

```xml
  <tree select="vm.select(data, event)" nodes="main.nodes"></tree>
```

`controllerAs: 'main'`를 설정한 것을 잊지 말자.

```xml
  <tree select="main.select(data, event)" nodes="main.nodes"></tree>
```

#### Example

```javascript
// Code goes here

angular.module('app', ['ui.bootstrap.tpls', 'ui.bootstrap.accordion'])
  .directive('nodeList', function($compile) {
      return {
          restrict: 'E',
          terminal: true,
          scope: {
              nodes: '=ngModel',
              deleteArticle: '&',
              editArticle: '&'
          },
          link: function ($scope, $element, $attrs) {
              if (angular.isArray($scope.nodes)) {
                  $element.append('<accordion close-others="true"><node ng-repeat="item in nodes" ng-model="item" delete-article="deleteArticle({node_item: node_item, event: event})" edit-article="editArticle({node_item: node_item, event: event})"></node></accordion>');
              } 
              $compile($element.contents())($scope);
          }
      };
  })
  
  .directive('node', function($compile) {
      return {
          restrict: 'E',
          terminal: true,
          scope: {
              node: '=ngModel',
              deleteArticle: '&',
              editArticle: '&'
          },
          link: function ($scope, $element, $attrs) {
              if (angular.isArray($scope.node.Options) && $scope.node.Options.length > 0) {
                  $element.append('<accordion-group><accordion-heading>{{node.Title}} <a href="javascript:void(0)" ng-click="editArticle({node_item: node, event: $event})" data-toggle="modal" data-target="#new-article" class="action"><i class="glyphicon glyphicon-edit"></i></a><a href="javascript:void(0)" ng-click="deleteArticle({node_item: node, event: $event})" data-toggle="modal" data-target="#new-article" class="action"><i class="glyphicon glyphicon-remove"></i></a></accordion-heading><node-list ng-model="node.Options" delete-article="deleteArticle({node_item: node_item, event: event})" edit-article="editArticle({node_item: node_item, event: event})"></node-list>{{node.Content}}</accordion-group>');
              } else {
                  $element.append('<accordion-group><accordion-heading>{{node.Title}} <a href="javascript:void(0)" ng-click="editArticle({node_item: node, event: $event})" data-toggle="modal" data-target="#new-article" class="action"><i class="glyphicon glyphicon-edit"></i></a><a href="javascript:void(0)" ng-click="deleteArticle({node_item: node, event: $event})" data-toggle="modal" data-target="#new-article" class="action"><i class="glyphicon glyphicon-remove"></i></a></accordion-heading>{{node.Content}}</accordion-group>');
              }
              $compile($element.contents())($scope.$new());
          }
      };
  })
  
  .controller('MainController', ['$scope', function ($scope) {
    $scope.articles = [
      {
        Title: 'Article 1',
        Content: 'Content 1'
      },
      {
        Title: 'Article 2',
        Content: 'Content 2',
        Options: [
          {
            Title: 'Article 2 - 1',
            Content: 'Content 2 - 1'
          },
          {
            Title: 'Article 2 - 2',
            Content: 'Content 2 - 2',
            Options: [
              {
                Title: 'Article 2 - 2 - 1',
                Content: 'Content 2 - 2 - 1'
              },
              {
                Title: 'Article 2 - 2 - 2',
                Content: 'Content 2 - 2 - 2'
              }
            ]
          }
        ]
      },
      {
        Title: 'Article 3',
        Content: 'Content 3',
        Options: [
          {
            Title: 'Article 3 - 1',
            Content: 'Content 3 - 1'
          }
        ]
      }
    ];
    
    $scope.clickedObject = {};
    
    $scope.deleteArticle = function (node_item, event) {
      console.log('delete node item: ');
      console.log(node_item);
      $scope.clickedObject.action = "delete";
      $scope.clickedObject.item = node_item;
      event.stopPropagation();
    };
    
    $scope.editArticle = function (node_item, event) {
      console.log('edit node item: ');
      console.log(node_item);
      $scope.clickedObject.action = "edit";
      $scope.clickedObject.item = node_item;
      event.stopPropagation();
    };
  }]);
```

```xml
<!DOCTYPE html>
<html>

  <head>
    <link data-require="bootstrap-css@*" data-semver="3.3.6" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.css" />
    <script data-require="angular.js@>=1.3.0 <3" data-semver="1.4.8" src="https://code.angularjs.org/1.4.8/angular.js"></script>
    <script data-require="angular-ui-bootstrap@*" data-semver="0.14.3" src="https://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.14.3.js"></script>
    <link rel="stylesheet" href="style.css" />
    <script src="script.js"></script>
  </head>

  <body ng-app="app" ng-controller="MainController">
    <h1>Hello Plunker!</h1>
    
    <node-list ng-model="articles" delete-article="deleteArticle(node_item, event)" edit-article="editArticle(node_item, event)"></node-list>
    
    <pre>
Status:
{{clickedObject | json}}
    </pre>
  </body>

</html>
```

* [Plunker](https://embed.plnkr.co/j1W9ht/)

<iframe style="width: 100%; height: 600px" src="https://embed.plnkr.co/j1W9ht/" frameborder="0" allowfullscren="allowfullscren"></iframe>

* [Plunker](https://embed.plnkr.co/WvVcNIOJ8zKvFmchOQ5R/)

<iframe style="width: 100%; height: 600px" src="https://embed.plnkr.co/WvVcNIOJ8zKvFmchOQ5R/" frameborder="0" allowfullscren="allowfullscren"></iframe>

### Reference

* [stack oveflow](http://stackoverflow.com/questions/26751985/angularjs-pass-parameters-in-directive-template-to-controller)
