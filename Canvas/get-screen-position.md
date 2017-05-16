# Get screen position

## World to View

![IC547351.png](../img/Canvas/get-screen-position/IC547351.png)

## View to World

![IC547358.png](../img/Canvas/get-screen-position/IC547358.png)

## Example

```javascript
function coordinateTransform(screenPoint, someSvgObject)
{
  var CTM = someSvgObject.getScreenCTM();
  return screenPoint.matrixTransform( CTM.inverse() );
}
```

## Reference

* [SVG 좌표 변형](https://msdn.microsoft.com/ko-kr/library/hh535760(v=vs.85).aspx)