# IndexSizeError

```
IndexSizeError
```

IE에서 `drawImage`를 사용하는 도중 상단과 같은 에러가 발생하였다.

## Solution

```javascript
context.drawImage(img, 0, 0, imgSize, imgSize, 0, 0, width, height);
```

위와 같은 코드를 아래와 같이 수정하면 잘 작동한다.

```javascript
context.drawImage(img, 0, 0, Math.floor(imgSize), Math.floor(imgSize), 0, 0, width, height);
```

## Solution

```javascript
ctx.drawImage(canvas, bounds.left, bounds.top, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height);
```

상단과 같이 offscreen canvas를 이미지처럼 사용하면 `Math.floor`로 소수점을 절삭하여도 `bounds.left`, `bounds.top`에 음수가 들어가있을 경우 동일한 에러가 발생하는 것을 확인하였다.

![drawImage](https://i.stack.imgur.com/VnXyt.png)

> To get back to your question, Uncaught Error: IndexSizeError: DOM Exception 1 usually appears when the square you're trying to cut is bigger than the actual piece of paper, or you're trying to cut the piece of paper in a position where it doesn't exists (like sourceX = -1, which is impossible for obvious reasons).

```javascript
var imgData = canvas.getContext("2d").getImageData(bounds.left, bounds.top, bounds.width, bounds.height);
ctx.putImageData(imgData, 0, 0);
```

위와 같이 `getImageData`와 `putImageData`를 사용하면 잘 작동한다.

## Reference

* [stack overflow](http://stackoverflow.com/questions/19338032/canvas-indexsizeerror-index-or-size-is-negative-or-greater-than-the-allowed-a)