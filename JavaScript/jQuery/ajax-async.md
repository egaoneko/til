# Ajax의 async 설정

Spring에서 게시글과 덧글을 작성하고, 게시글에 덧글을 Ajax를 사용하여 붙이는 방식으로 작성해 나가고 있었다. 우여곡절 끝에 Ajax를 통해 덧글은 비동기적으로 작동하여 게시글 읽기 페이지가 다시 불러오지 않고 덧글 부분만 불러올 수 있게 되었다.

문득, 덧글 쓰기 부분과 답글, 삭제같은 부분을 로그인하지 않은 사용자에게 보여주지 않도록 만들고 싶은 욕구가 생겼다.

```javascript
function isLogin() {
    var ret;
    $.ajax({
        type: "GET",
        url: contextPath + "/isLogin.do",
        success: function() {
            ret = true;
        },
        statusCode: {
            500: function() {
                alert("로그인을 하지 않았습니다.");
                ret = false;
            }
        },
    });
    return ret
}
```

위와 같이 Ajax를 이용하여 로그인을 하였으면 ``true``를, 로그인을 하지 않았으면 ``false``를 반환하는 함수를 작성하였다.

```javascript
function toggleWrite(separator) {

    if(isLogin()==false){
        return;
    }

    $('#'+separator+'_write').toggle()
    $('#'+separator+'_write_btn').toggle()
}
```

위에서 작성한 ``isLogin()``함수를 사용하여 글쓰기 버튼을 눌렀을 때 반환되어지는 값이 ``false``라면 실행되어지지 않도록 작성하였다. 하지만 원하는대로 작동되어지지 않았으며 ``isLogin()``의 반환 값을 확인해보면 ``undifined``가 반환되어짐을 확인할 수 있었다.

Ajax의 설명은 [사랑베베님의 블로그](http://ozit.tistory.com/58)에 다음과 같이 잘 설명되어 있다.
>Ajax는 Asynchronous Javascript And XML 의 약자로, 일반적으로 클라이언트와 서버측의 데이터 전송 및 처리를 비동기적(Asynchronous)으로 처리하는 것에 그 목적이 있습니다.
>
>Ajax를 사용함으로써, 서버측에 데이터를 요청한 후, 그 데이터의 수신이 완료될 때까지 기다리지 않고, 다른 작업을 바로 진행할 수 있습니다. 그러한 이유로 좀더 웹페이지를 자유롭게 구성할 수 있게 되었고, 불필요한 잦은 페이지 로딩을 줄일 수 있습니다.
>
>여기서 설명하려는 것은 이런 Ajax는 대부분 비동기방식 그대로 사용하지만, 경우에 따라서는 동기(Synchronous)방식으로 사용할 경우도 종종 생긴다는 것입니다.
>이는 Ajax를 통해 서버측에 데이터를 요청하고, 이 데이터의 결과를 모두 수신 받은 다음 단계로 진행하도록 하는 경우가 있을 수 있다는 이야기입니다.

필자가 겪은 문제는 위 인용글의 마지막 문단에 해당된다.

>여기서 설명하려는 것은 이런 Ajax는 대부분 비동기방식 그대로 사용하지만, 경우에 따라서는 동기(Synchronous)방식으로 사용할 경우도 종종 생긴다는 것입니다.
>이는 Ajax를 통해 서버측에 데이터를 요청하고, 이 데이터의 결과를 모두 수신 받은 다음 단계로 진행하도록 하는 경우가 있을 수 있다는 이야기입니다.

``isLogin()``은 ``toggleWrite()``이 실행되기 전에 반드시 선행되어야하는 작업이다. 위에서 작성된 것과 같이 ``isLogin()``을 비동기방식으로 작성한다면 로그인이 되었는지 확인을 하는 부분을 지나 ``toggleWrite()``가 비정상적으로 진행되어진다. ``isLogin()``함수는 ``toggleWrite()``함수 외에도 다양한 답글, 삭제와 관련된 함수에서도 사용되기 때문에 해당 함수들도 정상적으로 작동하지 않았다.

이를 해결하는 방법은 정말 간단하다. 아래와 같이 Ajax를 작성할때 ``async``속성의 값을 ``false``로 작성하면 된다. 이렇게 값을 설정하면 Ajax는 더 이상 비동기방식으로 동작하지 않고 동기방식으로 동작하게 되고 위에서 겪었던 문제를 해결할 수 있다.

```javascript
function isLogin() {
    var ret;
    $.ajax({
        type: "GET",
        url: contextPath + "/isLogin.do",
        success: function() {
            ret = true;
        },
        statusCode: {
            500: function() {
                alert("로그인을 하지 않았습니다.");
                ret = false;
            }
        },
        async: false
    });
    return ret
}
```

``async``에 대하여 더 알고 싶은 것이 있다면 다음 [jQuery API 문서](http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings)에서 확인할 수 있다.
