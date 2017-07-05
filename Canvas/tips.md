# Tips

## Canvas Clear

```javascript
let origin = ctx.getTransform(); // 기저를 추적할 수 있는 메서드는 별도 구현
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.clearRect(0, 0, width, height);
ctx.setTransform(origin);
```

matrix가 변형된 `Canvas`의 초기화는 최초 상태로 matrix를 변경하여 화면을 지우면 된다.

## Pivot Scale

특정 위치(Pivot)을 중심으로 확대하고자 한다면, 이동을 원하는 점으로 이동하고 화면의 위치만큼을 이동하면 된다. 이는 이미지를 화면에 중앙 정렬 시키는 것과 동일하게 생각하면 된다.
