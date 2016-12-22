# ellipsis detect

```javascript
$('.mightOverflow').bind('mouseenter', function(){
    var $this = $(this);

    if(this.offsetWidth < this.scrollWidth && !$this.attr('title')){
        $this.attr('title', $this.text());
    }
});
```

## Reference

* [stack overflow](http://stackoverflow.com/questions/5474871/html-how-can-i-show-tooltip-only-when-ellipsis-is-activated)