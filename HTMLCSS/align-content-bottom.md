# Align content of a div to the bottom

```css
#header {
    position: relative;
    min-height: 150px;
}
#header-content1 {
    position: absolute;
    top: 0;
    bottom: 15;
    left: 0;
}
#header-content2 {
    position: absolute;
    bottom: 0;
    left: 0;
}
```

```xml
<div id="header">
  <h1>Title</h1>
  <div id="header-content1">Some content1</div>
  <div id="header-content2">Some content2</div>
</div>
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/585945/how-to-align-content-of-a-div-to-the-bottom-with-css)