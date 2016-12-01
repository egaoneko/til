# IndexSizeError

```
IndexSizeError
```

IE에서 `drawImage`를 사용하는 도중 상단과 같은 에러가 발생하였다.

```javascript
context.drawImage(img, 0, 0, imgSize, imgSize, 0, 0, width, height);
```

위와 같은 코드를 아래와 같이 수정하면 잘 작동한다.

```javascript
context.drawImage(img, 0, 0, Math.floor(imgSize), Math.floor(imgSize), 0, 0, width, height);
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/19338032/canvas-indexsizeerror-index-or-size-is-negative-or-greater-than-the-allowed-a)