# Content overflow

`overflow` 속성은 요소의 내용이 박스를 넘을 경우에, 넘은 내용에 대한 처리를 설정할 수 있다.

```css
overflow: visible|hidden|scroll|auto|initial|inherit;
```

>The overflow property specifies what happens if content overflows an element's box.
>
>This property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.

| Value | Description |
| :---: | :---------: |
| visible | The overflow is not clipped. It renders outside the element's box. This is default |
| hidden | The overflow is clipped, and the rest of the content will be invisible |
| scroll | The overflow is clipped, but a scroll-bar is added to see the rest of the content |
| auto | If overflow is clipped, a scroll-bar should be added to see the rest of the content |
| initial | Sets this property to its default value. Read about initial |
| inherit | Inherits this property from its parent element. Read about inherit |

* [Play it](http://www.w3schools.com/cssref/playit.asp?filename=playcss_overflow&preval=hidden)

### Reference

* [CSS overflow Property](http://www.w3schools.com/cssref/pr_pos_overflow.asp)