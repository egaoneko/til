# View in template with ui-router

```xml
<div ui-view="main"></div>
```

```javascript
angular.module('myApp', ['ui.state'])
.config(['$stateProvider', '$routeProvider',  
    function ($stateProvider, $routeProvider) {
        $stateProvider
            .state('test', {
                abstract: true,
                url: '/test',
                views: {
                    'main': {
                         template:  '<h1>Hello!!!</h1>' +
                                    '<div ui-view="view1"></div>' +
                                    '<div ui-view="view2"></div>'
                    }
                }
            })
            .state('test.subs', {
                url: '',
                params: {
					template: null
				},
                views: {
                    'view1@test': {
                        template: function ($params) {
							return $params.template.view1;
						}
                    },
                    'view2@test': {
                        template: function ($params) {
							return $params.template.view2;
						}
                    }
                }
            });
    }])
    .run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $state.transitionTo('test.subs');
    }]);

```

### Reference

* [JSFiddle](http://jsfiddle.net/Batteryacid/v6azx3om/)
* [stack overflow](http://stackoverflow.com/questions/31610163/how-to-compile-template-directives-with-ui-rout-and-angularjs)