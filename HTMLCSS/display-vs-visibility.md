# display vs. visibility

```xml
<div style="diplay:block"></div>
<div style="display:none"></div>
<div style="visibility:visible"></div>
<div style="visibility:hidden"></div>
```

* `display:none` : 아예 사라진다. 보이지도 않고 해당 공간도 존재하지 않게 된다.
* `display = ""` 하면 디폴트 값이 쓰여지게 되는데 이때 `span` 태그 안에 있으면 `inline`, `div` 태그 안에 있으면 `block` 가 쓰여지게 된다.
* `visibility:hidden` : 보이지만 않고 해당 공간은 존재한다. `width`와 `height`값을 주었다면 그만큼 공간은 존재하게 된다.

## Reference

* [display:none 과 visibility:hidden 의 차이](http://unabated.tistory.com/entry/displaynone-%EA%B3%BC-visibilityhidden-%EC%9D%98-%EC%B0%A8%EC%9D%B4)
* [Style visibility Property](http://www.w3schools.com/jsref/prop_style_visibility.asp)