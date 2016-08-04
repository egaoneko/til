# setTimeout and setInterval method

### setTimeout method

```javascript
var timeoutID = window.setTimeout(func, [delay, param1, param2, ...]);
var timeoutID = window.setTimeout(code, [delay]);
```

>Calls a function or executes a code snippet after a specified delay
>
>* timeoutID is the numerical ID of the timeout, which can be used later with window.clearTimeout().
func is the function you want to execute after delay milliseconds.
>* code in the alternate syntax is a string of code you want to execute after delay milliseconds (using this syntax is not recommended for the same reasons as using eval())
>* delay is the number of milliseconds (thousandths of a second) that the function call should be delayed by. If omitted, it defaults to 0. The actual delay may be longer; see Notes below.
>* param1, param2, and so forth are additional parameters which are passed through to the function specified by func.
>
>[WindowTimers.setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout)

### setTimeout example

```xml
<p>Live Example</p>
<button onclick="delayedAlert();">Show an alert box after two seconds</button>
<p></p>
<button onclick="clearAlert();">Cancel alert before it happens</button>
```

```javascript
var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 2000);
}

function slowAlert() {
  alert("That was really slow!");
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}
```

### setInterval method

```javascript
var intervalID = window.setInterval(func, delay[, param1, param2, ...]);
var intervalID = window.setInterval(code, delay);
```

>Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. Returns an intervalID.
>
>* intervalID is a unique interval ID you can pass to clearInterval().
>* func is the function you want to be called repeatedly.
>* code, in the alternate syntax, is the string of code you want to be executed repeatedly.  (This syntax is not recommended for the same reasons that using eval() should be avoided.)
>* delay is the number of milliseconds (thousandths of a second) that the setInterval() function should wait before each call to func. As with setTimeout, there is a minimum delay enforced.
>* param1, param2, and so forth, are additional parameters that are passed through to the function specified by func.
>
>[WindowTimers.setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval)

### setInterval example

```javascript
var intervalID = window.setInterval(myCallback, 500);

function myCallback() {
  // Your code here
}
```

```javascript
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>setInterval/clearInterval example</title>

  <script>
    var nIntervId;
 
    function changeColor() {
      nIntervId = setInterval(flashText, 1000);
    }
 
    function flashText() {
      var oElem = document.getElementById("my_box");
      oElem.style.color = oElem.style.color == "red" ? "blue" : "red";
    }
 
    function stopTextColor() {
      clearInterval(nIntervId);
    }
  </script>
</head>
 
<body onload="changeColor();">
  <div id="my_box">
    <p>Hello World</p>
  </div>

  <button onclick="stopTextColor();">Stop</button>
</body>
</html>
```