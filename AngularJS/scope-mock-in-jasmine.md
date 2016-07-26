# $scope mock in jasmine

### Problem

``controller``를 테스트하기 위해서 ``controller``에서 주입한 ``$scope``의 mock을 주입해야한다.

### Solution

``$rootScope``를 주입하고 ``scope``를 생성하여 이를 전달한다.

```javascript
beforeEach(inject(function ($rootScope, $controller ) {
    scope = $rootScope.$new();
    createController = function() {
        return $controller('ViewCompanyCtrl', {
            $scope: scope
        }); 
    };
}));
```

### Addition

#### ViewCompanyCtrl.js

```javascript
angular.module('MyApp').controller('ViewCompanyCtrl',
    function ($scope, companyService, $state, meetingService, company, attachmentService) {
        'use strict';

        $scope.company = company;

        $scope.companyInfo = {};
        $scope.companyInfo['AName'] = [$scope.company.Address.Street, $scope.company.Address.ZipCode + ' ' + $scope.company.Address.City].join(', ');
       //more code


    });
```

#### app.routes.js

```javascript
.state('company', {
            abstract: true,
            url: '/company/:companyId',
            resolve: {
                company: function($q, $stateParams, companyService){
                    var deferred = $q.defer();

                    companyService
                        .getCompany($stateParams.companyId)
                        .error(function(data, status, headers){
                            //more code
                        })
                        .success(function(data){
                            deferred.resolve(data);
                        });

                    return deferred.promise;
                }
            },
```

위와 같이 ``$scope``에 변수의 mock을 생성하려면 아래와 같이 작성한다.

```javascript
beforeEach(inject(function ($rootScope, $controller ) {
    scope = $rootScope.$new();
    createController = function() {
        return $controller('ViewCompanyCtrl', {
            $scope: scope,
            company : {
                Address: {/* address data goes here */}
            }
        }); 
    };
}));
```

만약 각 테스트마다 다른 mock을 생성하려면 아래와 같이 작성한다.

```javascript
beforeEach(inject(function ($rootScope, $controller ) {
    scope = $rootScope.$new();
    createController = function(company) {
        return $controller('ViewCompanyCtrl', {
            $scope: scope,
            company : company
        }); 
    };
}));

it('the company type should be equal to an object', function () {
    var company = {Address: {/* address data goes here */}};
    var controller = new createController(company);
    //some assertion
});
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/30570617/how-to-mock-scope-variables-in-jasmine)