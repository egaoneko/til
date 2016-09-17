# height & width

### height with percent

```css
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.container {
  height: 100%;
  width: 100%;
}
```

`height`를 100%로 만들기 위해서 상위의 요소들에 모두 100%를 설정해준다.

### box-sizing

엘리먼트에 ``box-sizing``을 지정하면 해당 엘리먼트의 패딩과 테두리가 더는 너비를 늘리지 않는다.

```css
/* Set box models to match across browsers. */
* {
 box-sizing:border-box;
 -moz-box-sizing:border-box;
 webkit-box-sizing:border-box;
 max-width:100%;
}
```

* [stack overflow](http://stackoverflow.com/questions/14405515/100-window-height-100-parent-div-width)

* [box-sizing](http://ko.learnlayout.com/box-sizing.html)

### height percent with float

```css
.parent {
  float:right;
  height: 100%;
}

.child {
  height: 100%;
}
```

`child`의 `height`가 반영이 되지 않는다. `float` 속성은 요소를 부유 요소로 바꿔버린다. 요소가 공중에 떠 버리면 ㅏ깥 요소가 부유 요소의 범위를 가늠할 수 없게 된다.

* [Containing Floats](http://www.complexspiral.com/publications/containing-floats/)

### vh와 vw

`vh` 요소는 높이값의 100분의 1의 단위이다. 예를 들어 브라우저 높이값이 `900px`일때 `1vh`는 `9px`이라는 뜻이 되며 그와 유사하게 뷰포트의 너비값이 `750px`이면 `1vw`는 `7.5px`이 된다.

이 규칙에는 무궁무진한 사용방법이 있다. 예를 들면, 최대 높이값이나 그의 유사한 높이값의 슬라이드를 제작할때 아주 간단한 CSS만 입력하면 된다.

```css
.slide {
    height: 100vh;
}
```

* [당신은 모를 수도 있는 CSS의 7가지 단위](http://webdesign.tutsplus.com/ko/articles/7-css-units-you-might-not-know-about--cms-22573)