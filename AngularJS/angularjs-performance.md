# AngularJS Performance

* [Angular 양방향 데이터 바인딩과 최적화](https://qkraudghgh.github.io/angular/2016/08/01/angular-watch-optimize.html)

> ![angular-context.png](../img/AngularJS/angularjs-performance/angular-context.png)
> * ``{{ }}`` type bindings 에서 ``::``를 같이 사용합니다. (``{{ value }}`` => ``{{:: value }}``)
> * ``ng-repeat``을 사용할 땐 ``track by``를 함께 사용합니다.
> * ``ng-show``와 ``ng-hide`` 대신 ``ng-if``를 사용합니다.
> * ``$apply`` 대신 ``$digest``를 대신 사용합니다.
> * ``$httpProvider.useApplyAsync``를 사용합니다.
