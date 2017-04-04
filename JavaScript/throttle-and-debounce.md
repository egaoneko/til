# throttle and debounce

## throttle

> Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds. [throttle - lodash](https://lodash.com/docs/4.17.4#throttle)

```javascript
_.throttle(func, [wait=0], [options={}])
```

## debounce

> Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed since the last time the debounced function was invoked. [debounce - lodash](https://lodash.com/docs/4.17.4#debounce)

```javascript
_.debounce(func, [wait=0], [options={}])
```

## Reference

* [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)
* [[lodash/underscore] throttle과 debounce](https://hyunseob.github.io/2016/04/24/throttle-and-debounce/)
* [debounce source - lodash](https://github.com/lodash/lodash/blob/4.8.0-npm/debounce.js)
* [throttle source - lodash](https://github.com/lodash/lodash/blob/4.8.0-npm/throttle.js)