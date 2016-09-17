# Full screen layout

```xml
<!doctype html>
<html>
<head>
	<title>Put your title here</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link href="style.css" type="text/css" rel="stylesheet" />
</head>
<body>
	<div class="content">

    <div class="top_block header">
      <div class="content">
      </div>
    </div>

    <div class="background right-sidebar">
    </div>
    <div class="right_block right-sidebar">
      <div class="content">
      </div>
    </div>

    <div class="background middle-sidebar">
    </div>
    <div class="right_block middle-sidebar">
      <div class="content">
        <div class="top_block middle-sidebar-up">
          <div class="content">
          </div>
        </div>
      </div>
    </div>

    <div class="background left-sidebar">
    </div>
    <div class="right_block left-sidebar">
      <div class="content">
        <div class="bottom_block left-sidebar-down">
          <div class="content">
          </div>
        </div>
      </div>
    </div>

    <div class="background container">
    </div>
    <div class="center_block container">
      <div class="content">
      </div>
    </div>
</div>
</body>
</html>
```

```css
html, body { /* if using angular.js, add div[ui-view]*/
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.content {
  min-height: 100%;
  position: relative;
  overflow: auto;
  z-index: 0;
}

.background {
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
}

.top_block {
  width: 100%;
  display: block;
  overflow: auto;
}

.bottom_block {
  position: fixed;
  width: 100%;
  display: block;
  bottom: 0;
}

.left_block {
  display: block;
  float: left;
}

.right_block {
  display: block;
  float: right;
}

.center_block {
  display: block;
  width: auto;
}

.header {
  width: 100%;
  height: 40px;
  background-color: #808080;
}

.background.right-sidebar {
  height: auto !important;
  padding-bottom: 0;
  right: 0;
  width: 137px;
  background-color: #9966ff;
  margin-top: 40px;
}

.right-sidebar {
  height: auto;
  width: 137px;
  padding-bottom: 0px;
}

.background.middle-sidebar {
  height: auto !important;
  padding-bottom: 0;
  right: 0;
  width: 219px;
  background-color: #999966;
  margin-top: 40px;
  margin-right: 137px;
}

.middle-sidebar {
  height: auto;
  width: 219px;
  padding-bottom: 0px;
}

.middle-sidebar-up {
  width: 100%;
  height: 226px;
  background-color: #9933ff;
}

.background.left-sidebar {
  height: auto !important;
  padding-bottom: 0;
  right: 0;
  width: 243px;
  background-color: #999999;
  margin-top: 40px;
  margin-right: 356px;
}

.left-sidebar {
  height: auto;
  width: 243px;
  padding-bottom: 0px;
}

.left-sidebar-down {
  width: 243px;
  height: 600px;
  background-color: #996666;
}

.background.container {
  height: auto !important;
  padding-bottom: 0;
  left: 0;
  right: 0;
  background-color: #996699;
  margin-top: 40px;
  margin-right: 599px;
}

.container {
  width: auto;
  height: auto;
  padding-bottom: 0px;
}
```

* [Plunker example](https://embed.plnkr.co/maBAxf/)

<iframe style="width: 100%; height: 600px" src="https://embed.plnkr.co/maBAxf" frameborder="0" allowfullscren="allowfullscren"></iframe>

* [AngularJS plunker example](https://embed.plnkr.co/uTt3Di/)

<iframe style="width: 100%; height: 600px" src="https://embed.plnkr.co/uTt3Di" frameborder="0" allowfullscren="allowfullscren"></iframe>
