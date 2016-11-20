# Jordan curve thoerem

> 위상수학에서, 조르당 곡선 정리(Jordan曲線定理, 영어: Jordan curve theorem)는 평면 위에 있는 단순 닫힌 곡선이 평면을 안과 밖 두 개의 영역으로 분할한다는 정리이다.[조르당 곡선 정리 - 위키백과](https://ko.wikipedia.org/wiki/%EC%A1%B0%EB%A5%B4%EB%8B%B9_%EA%B3%A1%EC%84%A0_%EC%A0%95%EB%A6%AC)

![Figure 1](http://alienryderflex.com/polygon/Diagram_1.gif)

확인하는 점에서 가로지르는 횟수가 홀수 번이면 안쪽, 짝수 번이면 밖에 있는 것이다.

```javascript
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var position = {
  x:0,
  y:0
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var points = [{
    x:50,
    y:50
  },{
    x:80,
    y:30
  },{
    x:90,
    y:70
  },{
    x:50,
    y:100
  },{
    x:100,
    y:130
  },{
    x:70,
    y:120
  },{
    x:60,
    y:60
  },{
    x:50,
    y:80
  }]
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (var idx =1; idx<points.length; idx++) {
    var point = points[idx];
    ctx.lineTo(point.x, point.y );
  }
  
  // var position = {x: 50, y:70};
  
  if(inside(position, points)) {
    ctx.strokeStyle = "red";
  }
  console.log(inside(position, points));
  ctx.closePath();
  ctx.stroke();
  
  // 중심 표시
	ctx.beginPath();
	ctx.arc(position.x, position.y, 3, 0, 2 * Math.PI, false);
	ctx.fillStyle = 'red';
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#003300';
	ctx.stroke();
}

document.onmousemove = function (e) {
	position.x = e.offsetX || (e.pageX - document.offsetLeft);
	position.y = e.offsetY || (e.pageY - document.offsetTop);
	render();
	return e.preventDefault() && false;
};

function inside(point, corners) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

    var x = point.x, y = point.y;

    var inside = false;
    for (var i = 0, j = corners.length - 1; i < corners.length; j = i++) {
        var xi = corners[i].x, yi = corners[i].y;
        var xj = corners[j].x, yj = corners[j].y;

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }

    return inside;
};
```

## Refernce

* [Point-In-Polygon Algorithm — Determining Whether A Point Is Inside A Complex Polygon](http://alienryderflex.com/polygon/)

* [stack overflow](http://stackoverflow.com/questions/22521982/js-check-if-point-inside-a-polygon)