# Ajax

### JavaScript Ajax

```javascript
//객체 생성부분
var xmlhttp;
if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} 
else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
 
//Ajax구현부분
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
         //통신 성공시 구현부분
    }
}
xmlhttp.open("GET", "exam.xml", true);
xmlhttp.send();
```

```javascript
var request = new XMLHttpRequest();
request.addEventListener('load', function() {},false);
request.addEventListener('error', function() {},false);
xmlhttp.open("GET", "/api/my/name", true);
xmlhttp.send();
```

#### 함수

* onreadystatechange : 비동기 통신시 서버와의 통신이 이루어 진 후 동작될 함수를 말합니다.
* send : 데이터 교환을 요청하는 함수입니다.
* open(GET or POST, url, async) : 서버와 데이터를 교환할 때 필요한 정보를 입력합니다. 첫번째 인자값은 Get,Post를 지정해주며 두번째 인자 값은 데이터를 교환할 서버의 url을, 세번째 인자 값은 비동기로 진행할 것인지에 대해서 입력해줍니다. 동기로 진행할 경우 위 onreadystatechange 함수 필요없이 응답을 기다렸다가 send함수 뒤에 나오는 script코드를 응답이 오면 동작하게 됩니다.

#### 속성

* readyState : ajax통신의 진행중인 상태를 알려줍니다. 값에 따라 의미하는 상태는 다음과 같습니다.
	* 0 : 초기화 되지 않은 상태 (open메소드가 아직 호출되지 않은 상태)
	* 1 : open메소드가 호출된 상태 (send메소드는 호출 되지 않은 상태)
	* 2 : 송신완료, 요청을 시작한 상태 ( 요청은 하지 않았지만 데이터가 아직 오지 않은 상태)
	* 3 : 수신 중인 상태 (데이터가 들어오고 있는 상태)
	* 4 : 수신 완료 (데이터를 모두 받은 상태)
* Status : 데이터 수신의 성공 여부를 판단해주는 속성입니다 값에 따라 의미하는 상태는 다음과 같습니다
	* 0 : 로컬로 접근 성공을 의미합니다.
	* 200 : 해당 url로 접근 성공을 의미합니다.
	* 403 : 접근이 거부되었음을 의미합니다.
	* 404 : 해당 url이 없음을 의미합니다.
	* 500 : 서버오류를 의미합니다.
* responseXML : 받은 데이터를 XML타입으로 변환 시켜줍니다.
* responseText : 받은 데이터를 텍스트 타입으로 변환 시켜줍니다.

### jQuery Ajax

```javascript
//dictionary.js 구현
$(document).ready(function() {
	$('#ajax').click(function() {
		$.ajax({
			url:'ajax.xml',
			type:'GET',
			dataType: 'xml',
			success: function(data){
				$('#dictionary').empty();
				$.each($(data).find('entry'), function(){
					var $entry = $(this);
					var html ='<div class="entry">';
					html +='<h3 class="term">'+ $entry.attr('term'); +'</h3>';
					html +='<div class="part">'+ $entry.attr('part'); +'</div>';
					html +='<div class="definition">'+  $entry.text()+'</div>';
					html +='</div>';
					$('#dictionary').append(html);
				});// end each
			}// end
		});// end ajax
		return false;
	});
});
```

#### 옵션

* url : 통신을 원하고자 하는 URL주소를 입력합니다.(필수 입력 값)
* data : 서버로 보낼 데이터를 입력합니다.
* type : GET, POST등의 통신 방식 지정합니다.
* dataType : 통신의 결과로 넘어올 데이터의 종류를 지정합니다.
* success(data) : 통신 성공시 호출 해야하는 함수를 지정합니다. 매개변수로 결과로 넘어온 데이터를 받습니다.
* error : 통신 실패시 호출 해야하는 함수를 지정합니다.
* complete : 통신 성공 여부와 관계없이 통신이 끝난 후 호출 해야하는 함수를  지정합니다.
* beforeSend : 통신 전에 호출 해야하는 함수를 지정합니다.
* async : 비동기(true), 동기(false) 여부를 지정합니다.

### AngularJS Ajax

#### $http

```javascript
// Simple GET request example:
$http({
  method: 'GET',
  url: '/someUrl'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
```

##### 속성

* data – `{string|Object}` – The response body transformed with the transform functions.
* status – `{number}` – HTTP status code of the response.
* headers – `{function([headerName])}` – Header getter function.
* config – `{Object}` – The configuration object that was used to generate the request.
* statusText – `{string}` – HTTP status text of the response.

#### $resource

```javascript
// Define CreditCard class
var CreditCard = $resource('/user/:userId/card/:cardId',
 {userId:123, cardId:'@id'}, {
  charge: {method:'POST', params:{charge:true}}
 });

// We can retrieve a collection from the server
var cards = CreditCard.query(function() {
  // GET: /user/123/card
  // server returns: [ {id:456, number:'1234', name:'Smith'} ];

  var card = cards[0];
  // each item is an instance of CreditCard
  expect(card instanceof CreditCard).toEqual(true);
  card.name = "J. Smith";
  // non GET methods are mapped onto the instances
  card.$save();
  // POST: /user/123/card/456 {id:456, number:'1234', name:'J. Smith'}
  // server returns: {id:456, number:'1234', name: 'J. Smith'};

  // our custom method is mapped as well.
  card.$charge({amount:9.99});
  // POST: /user/123/card/456?amount=9.99&charge=true {id:456, number:'1234', name:'J. Smith'}
});

// we can create an instance as well
var newCard = new CreditCard({number:'0123'});
newCard.name = "Mike Smith";
newCard.$save();
// POST: /user/123/card {number:'0123', name:'Mike Smith'}
// server returns: {id:789, number:'0123', name: 'Mike Smith'};
expect(newCard.id).toEqual(789);
```

##### 사용법

```javascript
$resource(url, [paramDefaults], [actions], options);
```

* url

`string` 이고, `/user/:username` 처럼 `:<param>` 형태로 입력가능하다. 전체 url을 넣어도 된다.

* paramDefaults

`url parameters object` 이고, `/path/:verb` 일때 파라미터값이 `{verb:'greet', name:'dowon'}` 이면 url 결과는 `/path/greet?name=dowon` 으로 간다. **`@`가 앞에 붙으면 전달하는 객체(json)에서 값을 추출하여 대입한다.**

```javascript
var User = $resource('/user/:userId', {userId:'@id'});
var user = User.get({userId:123}, function() {
 user.abc = true;
 user.$save();
});
```

* actions

`object.<object>` 이고, `$http.config`의 `action` 을 상속받으며 사용자 정의하여 `action` 을 추가할 수 있다.

```javascript
{action1: {method:?, params:?, isArray:?, headers:?, ...},
action2: {method:?, params:?, isArray:?, headers:?, ...},
...}
```

* 리턴타입

기본적으로 resource에서 제공하는 `action` 과 사용자 정의 `action` 을 담아서 리턴한다.

```javascript
// Default
{ 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} };
```

### Reference

* [JavaScript, jQuery, 그리고 Ajax](http://www.nextree.co.kr/p9521/)
* [$http](https://docs.angularjs.org/api/ng/service/$http)
* [$resource](https://docs.angularjs.org/api/ngResource/service/$resource)
* [Angular.js $resource 이용하여 Service 만들기](http://mobicon.tistory.com/389)