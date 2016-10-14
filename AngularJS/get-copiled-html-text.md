# Get copiled html text

```javascript
$interpolate(text, [mustHaveExpression], [trustedContext], [allOrNothing]);
```

Compiles a string with markup into an interpolation function. This service is used by the HTML `$compile` service for data binding. See `$interpolateProvider` for configuring the interpolation markup.

```javascript
var $interpolate = ...; // injected
var exp = $interpolate('Hello {{name | uppercase}}!');
expect(exp({name:'Angular'})).toEqual('Hello ANGULAR!');
```

### Reference

* [$interpolate](https://docs.angularjs.org/api/ng/service/$interpolate)