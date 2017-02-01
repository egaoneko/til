# Canvas can not load with Apple device

```
Canvas area exceeds the maximum limit (width * height > 16777216).
```

`iOS` 및 `Safari`에서 `canvas`가 보이지 않는 이슈가 발생하였다. 로그를 확인해보니 위와 같이 최대값이 존재하는 것을 확인할 수 있었다.

```
 iPod Touch 16GB = 1448x1448
 iPad Mini       = 2290x2289
 iPhone 3        = 1448x1448
 iPhone 5        = 2290x2289
```

iPhone5 & iOS8 에서 `2290x2289` 발생, iPhone5 & iOS9 에서는 미발생하였다.

## Reference

* [Troubleshooting](https://github.com/drdk/dr-svg-sprites/blob/master/TROUBLESHOOTING.md#if-your-sprite-isnt-displayed---or-is-very-pixelated)
* [stack overflow](http://stackoverflow.com/questions/6081483/maximum-size-of-a-canvas-element)