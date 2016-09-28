# three.js

## WebGL

`<canvas>` HTML element 안에서 상호작용하는 2D와 3D 그래픽을 렌더링하는 JavaScript API

## three.js

3D JavsScript Library

### Geometries

### Materials

### Renderer

#### setInterval vs. requestAnimationFrame

Perhaps the most important one is that `requestAnimationFrame` pauses when the user navigates to another browser tab, hence not wasting their precious processing power and battery life.

### Material

```javascript
var color = new THREE.Color(0xff0000);
var face = new THREE.Face3(0, 1, 3, normal, color, 0);

var material = new THREE.MeshBasicMaterial({
    vertexColors: THREE.FaceColors,
    // color: 0x00ff00
    color: 0xffffff
});
```

`vertexColors`에 `THREE.FaceColors`를 설정하지 않으면, `Face`에 설정한 색상이 적용되지 않는다.

`material`의 `color`에 `0xffffff`같이 색상의 범위를 설정할 수 있다. `00` ~ `ff`까지 설정할 수 있는데, `00`으로 설정하면 `vertexColors`에 색상을 주어도 반영되지 않는다.