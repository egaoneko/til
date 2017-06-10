# Get child when click parent

부모를 클릭했을 때 해당 위치에 있는 자식 가져오기.

```javascript
 $('#p').bind('click', function(event) {
    alert(event.target.id);
 });
```

* [Live Demo](http://jsfiddle.net/rLJMh/)

```javascript
$('#p').bind('click', function(event) {
    alert($(event.target).attr('id'));
});
```

* [Live Demo](http://jsfiddle.net/rLJMh/1/)

### Refernce

* [stack overflow](http://stackoverflow.com/questions/12758547/jquery-click-event-on-parent-but-finding-the-child-clicked-element)