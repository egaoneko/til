# Emulate touch on a desktop

[Hammer.js](http://hammerjs.github.io/)를 사용하면서 `pan` 같은 경우는 바로 테스트가 가능하였지만 `pinch`같은 경우 바로 테스트를 할 수 없다. 이를 [touchemulator](https://github.com/hammerjs/touchemulator)를 통해 해결하였다. touchemulator를 적용하고 `shift`를 누르면 `pinch`나 `rotate`를 테스트해볼 수 있다.

```xml
<script src="touch-emulator.js"></script>
<script> TouchEmulator(); </script>
```

위와 같이 설정하고 사용하면 된다. 중요한 점은 다른 터치에 관련된 라이브러리를 부르기 전에 `TouchEmulator()`가 수행되여야 정상적으로 작동한다.

## Reference

* [Emulate touch on a desktop](http://hammerjs.github.io/touch-emulator/)
* [Github](https://github.com/hammerjs/touchemulator)