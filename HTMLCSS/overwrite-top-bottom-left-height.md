# Overwrite top, bottom, left, height

```css
left:auto;
```

```xml
<div class="myClass rtl"></div>

.myClass
{
  position:absolute;
  left:0;
}
.myClass.rtl
{
  left:auto;
  right:0;
}
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/10245729/how-to-remove-left-property-when-position-absolute)