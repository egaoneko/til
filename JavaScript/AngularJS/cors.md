# CORS

```javascript
angular.module('myApp', ['ngResource']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/partial1.html',controller: 'MyController'});
    $routeProvider.otherwise({redirectTo: '/'});
  }])

  .controller("MyController", function( $scope, Bug) {
    Bug.post({test:"test"});
  })

  .factory('Bug', function($resource){
    var resource = $resource('/bug',{},{
        post:{
            method:"POST",
            isArray:false,
            headers: {
							'Access-Control-Allow-Origin': '*',
							'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
							'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
							'Access-Control-Allow-Credentials': 'true'
						}
        },
    });
    return resource;
});
```

`Access-Control-Allow-Origin` is **set on the response from server, not on client request** to allow clients from different origins to have access to the response.

In your case, http://www.google.com/ does not allow your origin to have access to the response. Therefore you cannot read it.

For more information about CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS

* [stack overflow](http://stackoverflow.com/questions/12791667/how-to-specify-headers-parameter-for-custom-angular-resource-action)
* [stack oveflow](http://stackoverflow.com/questions/24097484/angular-js-no-access-control-allow-origin-header-is-present-on-the-requested-r)
* [HTTP 접근 제어 (CORS)](https://developer.mozilla.org/ko/docs/Web/HTTP/Access_control_CORS)
* [javascript ajax 크로스 도메인 요청 하기 (CORS)](http://adrenal.tistory.com/16)