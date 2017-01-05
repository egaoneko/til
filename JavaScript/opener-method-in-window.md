# opener method in window

현재 윈도우(window)를 오픈한 윈도우의 레퍼런스(reference)를 반환합니다.

윈도우A에서 `window.open()`을 통해 윈도우B을 열었다면, `window.opener`를 통해  윈도우B에서 윈도우 A를 제어할 수 있습니다.

```javascript
objRef = window.opener;
```

> 현재의 윈도우가 다른 윈도우에 의해 열렸다면, 현재 윈도우는 자신을 오픈(open)한 윈도우의 레퍼런스를 window.opener라는 이름으로 가지고 있습니다. 
>
>현재 윈도우가 다른 윈도우에 의해 열리지 않았다면, 이 메서드는 NULL을 반환합니다.
>
>Windows 폰 브라우저는 window.opener를 지원하지 않습니다.(tested with Microsoft Edge 25.10586.36.0) 
>
>어떤 브라우저들은 rel="noopener" 속성(attribute)를 통해 window.opener의 레퍼런스가 세팅 돠는 것을 막을 수 있습니다.
>[Window.opener](https://developer.mozilla.org/ko/docs/Web/API/Window/opener)

## Example

```javascript
if (window.opener != indexWin) {
  window.opener.location.reload();  // 오프너 윈도우의 페이지를 리로드 합니다.
}
```