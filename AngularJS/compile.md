# $compile

### Problem

* [Plunker](https://embed.plnkr.co/eTGzrS/)

<iframe style="width: 100%; height: 600px" src="https://embed.plnkr.co/eTGzrS/" frameborder="0" allowfullscren="allowfullscren"></iframe>

### Solution

```javascript
모듈명.controller('컨트롤러명', ['$scope', '$compile' , function($scope, $compile)
{
	//jQuery API인 $.ajax()를 활용해 HTML 페이지를 불러온다.
	$.ajax({
		url:"앵귤러가포함된HTML파일.html",
		cache:'false',
		success: function(data)
		{
			$('#객체ID').html( $compile(data)($scope) );
		}
	}).done(function()
	{
		//완료된 후?
	});
	
	
	//$compile 서비스로 먼저 앵귤러가 인식하도록 컴파일을 한번 해준후,
	//실제 페이지에 추가해준다는 것이 핵심이다!!
	
}
```

```javascript
//1단계 : 임의의 HTML 내용을 적용시키기 위해 먼저 HTML을 DOM 요소로 파싱한다.
var template = angular.element('<div>{{name}}</div>');
 
//2단계: 템플릿을 컴파일한다.
var linkFunction = $compile(template);

//3단계: 스코프를 컴파일한 템플릿과 연결한다.
linkFunction($scope);

//4단계: HTML 요소를 반영한다.
element.append( template );


//1-4단계를 한번에 처리
//element.append( $compile('<div>{{name}}</div>)($scope) );
```

### Reference

* [$compile 이란 무엇인가?](http://programmingsummaries.tistory.com/132)