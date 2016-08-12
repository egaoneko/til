# 선형 보간을 이용한 이벤트 처리

선형 보간법(linear interpolation)은 끝점의 값이 주어졌을 때 그 사이에 위치한 값을 추정하기 위하여 직선 거리에 따라 선형적으로 계산하는 방법이다.

![linear interpolation](https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/LinearInterpolation.svg/150px-LinearInterpolation.svg.png)

[선형 보간법 - 위키백과](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%98%95_%EB%B3%B4%EA%B0%84%EB%B2%95)

```javascript
	var expandScaleSize = 0.2;
    var wheelLocker = {
        lock: false
    };

    target.onmousewheel = function(e) {
        if (wheelLocker.lock) {
            return;
        }
        var direction = 1;
        if (e.wheelDelta > 0) {
            direction *= -1;
        }

        var timerData = {
            origin: box.scale,
            target: box.scale + direction * expandScaleSize,
            locker: wheelLocker,
            run: function(time, cTime) {
                box.scale = this.origin + (this.target - this.origin) / time * cTime;
                box.draw();
            }
        }
        timer(timerData);
    }

	var time = 600;
    var timer = function(timerData) {
        var sTime = Date.now();
        var originScale = box.scale;
        var locker = timerData.locker ? timerData.locker : undefined;

        if (locker) {
            locker.lock = true;
        }

        var timerId = setInterval(function() {
            var timeDiff = Date.now() - sTime;
            if (timeDiff < time) {
                timerData.run(time, timeDiff)
            } else {
                if (locker) {
                    locker.lock = false;
                }
                clearInterval(timerId);
            }
        }, 10);
    }
```