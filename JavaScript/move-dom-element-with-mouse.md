# Move dom element with mouse

```javascript
//call this function when we want to initiate the listener for moving the mouse
//For instance, call this function once the user starts dragging an element
//requires an event and element to be passed.
function startMouseMove(e, element) {
    $('.my-background-content').css( 'display', 'none' ); //collapse background elements
    const container = $(element).find('.item-to-clone').clone().appendTo('.my-container'); //clone the element you want to hover around mouse
    $(container).attr('id', 'cursor_element'); //give the clone element an id so we can reference it later
    $('#cursor_element').css({'position': 'fixed', 'top': e.pageY, 'left': e.pageX}); //set clone element's position to mouse's position
    $document.on('mousemove', moveElement); //bind mouse event
}
 
function moveElement(e) {
    const y = e.pageY; //get y position
    const x = e.pageX; //get x position
    $('#cursor_element').css({'top': y, 'left': x}); //move the position of the element to match mouse, whenever mouse moves
}
 
//call this function when we want to stop the listener for moving the mouse
//For instance, call this function once the user drops a dragging element
function stopMouseMove() {
    $('#cursor_element').remove(); //delete cloned element
    $('.my-background-content').css( 'display', '' ); //un-collapse background elements
    $document.unbind('mousemove', moveElement); //unbind mouse event
}
```

## Reference

* [Javascript Cloning and Moving DOM Elements to Mouse Position](http://somethingk.com/main/?p=1140)