# otherwise in uiRouter

### Solution 1

```javascript
$urlRouterProvider.otherwise('/otherwise');

 $stateProvider
    .state("otherwise", { url : '/otherwise'...})
    //otherwise url must be defined on a state as usual
```

### Solution 2

```javascript
$stateProvider.state("otherwise", {
    url: "*path",
    templateUrl: "views/error-not-found.html"
});
```

* [regix parameters](https://github.com/angular-ui/ui-router/wiki/URL-Routing#regex-parameters)

### Reference

* [stack overflow](http://stackoverflow.com/questions/16793724/otherwise-on-stateproviderreg)