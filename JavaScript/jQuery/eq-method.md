# eq method

```javascript
element.eq(index)
```

Reduce the set of matched elements to the one at the specified index.

### Example

```xml
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>eq demo</title>
  <style>
  div {
    width: 60px;
    height: 60px;
    margin: 10px;
    float: left;
    border: 2px solid blue;
  }
  .blue {
    background: blue;
  }
  </style>
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>
 
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
 
<script>
$( "body" ).find( "div" ).eq( 2 ).addClass( "blue" );
</script>
 
</body>
</html>
```

### Reference

* [.eq()](https://api.jquery.com/eq/)