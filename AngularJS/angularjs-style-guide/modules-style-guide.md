# Modules Style Guide

* [AngularJS Developer Guide's Modules - Recommended Setup](https://docs.angularjs.org/guide/module#recommended-setup)

> You can find a community [style guide](https://github.com/johnpapa/angular-styleguide) to help yourself when application grows.

* [AngularJS best practices for module declaration? - stackoveflow](http://stackoverflow.com/questions/19957280/angularjs-best-practices-for-module-declaration)


### [John Papa's AngularJS Style Guide - Modules](https://github.com/johnpapa/angular-styleguide/blob/master/a1/i18n/ko-KR.md#modules)

#### Avoid Naming Collisions

* 하위 모듈을 위해 구분자와 함께 유일한 이름을 지정한다.

```javascript
angular.module('app', []);
angular.module('app.dashboard', []);
angular.module('app.users', []);
```

독특한 이름들은 모듈이름이 충돌하는 것을 방지한다.

#### Definitions (aka Setters)

* 세터 구문을 사용하여 반환된 모듈을 변수에 저장하지 않는다.

```javascript
/* avoid */
var app = angular.module('app', [
    'ngAnimate',
    'ngRoute',
    'app.shared',
    'app.dashboard'
]);
```

```javascript
/* recommended */
angular
    .module('app', [
        'ngAnimate',
        'ngRoute',
        'app.shared',
        'app.dashboard'
    ]);
```

1 파일에 1 컴포넌트를 넣을 경우, 변수에 넣어서 그 변수를 재사용하는 일은 없다고 봐야한다.

#### Getters

* 모듈을 이용할 때, 변수에 할당하는 것을 피하고 그 대신 게터 구문을 이용한 체이닝을 사용한다.

```javascript
/* avoid */
var app = angular.module('app');
app.controller('SomeController', SomeController);

function SomeController() { }
```

```javascript
/* recommended */
angular
    .module('app')
    .controller('SomeController', SomeController);

function SomeController() { }
```

이해하기 쉽고 변수 충돌이나 누출을 방지할 수 있다. 전역 변수를 오염시키지 않을 수 있다.

#### Setting vs Getting

* 한 번만 set 하고 나머지 인스턴스를 위해서는 get을 사용한다.

```javascript
/* recommended */

// to set a module
angular.module('app', []);

// to get a module
angular.module('app');
```

모듈은 한 번만 만들어지고 설정되어야 하고, 그 후로는 그 모듈을 받아와서 사용해야 한다.

#### Named vs Anonymous Functions

* 콜백 함수를 넘길 때 변수로 할당된 함수를 사용하고 익명 함수 사용을 피한다.

```javascript
/* avoid */
angular
    .module('app')
    .controller('DashboardController', function() { })
    .factory('logger', function() { });
```

```javascript
/* recommended */

// dashboard.js
angular
    .module('app')
    .controller('DashboardController', DashboardController);

function DashboardController() { }

// logger.js
angular
    .module('app')
    .factory('logger', logger);

function logger() { }
```

이해하기 좋은 코드가 작성되어 고치기 훨씬 쉽고 네스티드 콜백 양을 줄일 수 있다.
