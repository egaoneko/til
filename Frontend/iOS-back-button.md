# iOS back button

## Problem

iOS에서 back button을 눌렀을 때를 감지가 잘되지 않아는 문제가 발생하였다. back button으로 돌아온 원 페이지에서는 페이지가 `BFCache`로 인하여 reload되지 않는 문제또한 발생하였다. 

## Solution

이를 `pageshow` 이벤트를 감지하여 처리하였다.

```javascript
window.onpageshow = function (event) {
	if (event.persisted) {
		console.log('BFCahe로부터 복원됨');
	}
	else {
		console.log('새로 열린 페이지');
	}
};

$(window).bind("pageshow", function (event) {
	if (event.originalEvent.persisted) {
		console.log('BFCahe로부터 복원됨');
	}
	else {
		console.log('새로 열린 페이지');
	}
});
```

## Addition problem

pc에서 `event.persisted`가 계속 `false`로 반환된다.

* [microsoft](https://connect.microsoft.com/IE/feedback/details/817726/persisted-attribute-of-the-pageshow-event-is-incorrect-after-use-of-the-back-button)

## Reference

* [브라우저에서 뒤로가기 수행시, 자바스크립트가 실행되지 않는 이유](http://programmingsummaries.tistory.com/380)
* [Working with BFCache](https://developer.mozilla.org/en-US/docs/Working_with_BFCache)
* [jQuery pageshow Event](http://www.w3schools.com/jquerymobile/event_pageshow.asp)