# Miss keyup after alert

`alert`등의 알림창이 뜬 후에 발생한 `keyup` 이벤트는 무시가 되는 현상이 있다. 만약 아래의 코드와 같이 `keydown`에서 flag를 설정하고 `keyup`에서 해제한다면, `keydown` 혹은 `keypress`에서 오작동을 할 수 있다.

<iframe style="width: 100%; height: 600px" src="http://embed.plnkr.co/dyWNL083zBTSx7xxDySC" frameborder="0" allowfullscren="allowfullscren"></iframe>

```xml
<!DOCTYPE html>
<html>

  <head>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
  </head>

  <body onload="init()">
    <h1>Miss keyup after alert</h1>
    <ul>
      <li>N : Normal</li>
      <li>T : Test</li>
      <li>C : Clear</li>
    </ul>
    <textarea id="log" style="height:200px" disabled></textarea>
  </body>
</html>
```

```javascript
// Code goes here

function init() {
  var isKeyDown = false;
  var log = document.getElementById("log");
  writeLog("Init : " + isKeyDown);
  
  document.addEventListener('keydown', function(e){
    if(isKeyDown) {
      e.stopPropagation();
      return;
    }
    
    if(e.keyCode === 110 || e.keyCode === 78) {
      isKeyDown = true;
      writeLog("(N)Down : " + isKeyDown);
    } else if(e.keyCode === 116 || e.keyCode === 84) {
      isKeyDown = true;
      writeLog("(T)Down : " + isKeyDown);
    } else if(e.keyCode === 99 || e.keyCode === 67) {
      isKeyDown = false;
      writeLog("(C)Down : " + isKeyDown);
    }
  });
  
  document.addEventListener('keypress', function(e){
    if(e.keyCode === 110 || e.keyCode === 78) {
      writeLog("(N)Press : " + isKeyDown);
    } else if(e.keyCode === 116 || e.keyCode === 84) {
      writeLog("(T)Press : " + isKeyDown);
      alert(e.keyCode);
    } else if(e.keyCode === 99 || e.keyCode === 67) {
      isKeyDown = false;
      writeLog("(C)Press : " + isKeyDown);
    }
  });
  
  document.addEventListener('keyup', function(e){
    if(e.keyCode === 110 || e.keyCode === 78) {
      writeLog("(N)Up : " + isKeyDown);
    } else if(e.keyCode === 116 || e.keyCode === 84) {
      isKeyDown = false;
      writeLog("(T)Up : " + isKeyDown);
    } else if(e.keyCode === 99 || e.keyCode === 67) {
      isKeyDown = false;
      writeLog("(C)Up : " + isKeyDown);
    }
  });
  
  function writeLog(content) {
    log.innerHTML += content + '\n';
  }
}
```