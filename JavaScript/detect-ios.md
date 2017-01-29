# Detect iOS

## Detecting iOS

```javascript
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
```

```javascript
function iOS() {

  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){ return true; }
    }
  }

  return false;
}
```

## Detecting iOS Version

```javascript
function iOSversion() {

  if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    if (!!window.indexedDB) { return 'iOS 8 and up'; }
    if (!!window.SpeechSynthesisUtterance) { return 'iOS 7'; }
    if (!!window.webkitAudioContext) { return 'iOS 6'; }
    if (!!window.matchMedia) { return 'iOS 5'; }
    if (!!window.history && 'pushState' in window.history) { return 'iOS 4'; }
    return 'iOS 3 or earlier';
  }

  return 'Not an iOS device';
}
```