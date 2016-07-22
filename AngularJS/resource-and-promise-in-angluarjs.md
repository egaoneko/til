# Resource & Promise in AngularJS

### Problem

AngularJS의 ``resource``를 사용하여 불러온 데이터를 canvas에 그리는 작업을 수행하였지만, 페이지가 로딩되는 시점에서 ``resource``에서 불러온 값이 없어 그려지지 않았다.

### Solution

``resource``에서 반환된 값에 있는 ``promise``를 사용하여 성공하였을 때에 지정해둔 콜백 함수를 실행하도록 하여 해결할 수 있었다.

```javascript
angular
    .module('core.seat')
    .factory('Seat', ['$resource',
        function($resource) {
            return $resource('seats/:seatId.json', {}, {
                query: {
                    method: 'GET',
                    params: {
                        seatId: 'seats'
                    },
                    isArray: true
                }
            });
        }
    ]);

...

this.seats = Seat.query();

$timeout(function() {
    self.seats.$promise.then(function() {
        draw();
    })
});

...

var draw = function() {
    if (self.canvas.getContext) {
        var ctx = self.canvas.getContext('2d');

        angular.forEach(self.seats, function(value) {
            drawSeat(ctx, value, 40);
        })
    }
}
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/19490560/angularjs-resource-promise)
* [비동기 프로그래밍을 위한 Promise와 Deferred 알아보기](http://webframeworks.kr/tutorials/angularjs/angularjs_promise_deferred/)