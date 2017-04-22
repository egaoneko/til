# Download file using Ajax

## Issue

단순한 Ajax 통신을 통해서는 파일이 다운로드 되지 않는다.

## Solve

`form` 태그를 통해 `submit`하여 다운로드한다.

```javascript
$.download = function (url, data, method) {
    // url과 data를 입력받음
    if (url && data) {
        // data 는  string 또는 array/object 를 파라미터로 받는다.
        data = typeof data == 'string' ? data : $.param(data);
        // 파라미터를 form의  input으로 만든다.
        var inputs = '';
        $.each(data.split('&'), function () {
            var pair = this.split('=');
            inputs += '<input type="hidden" name="' + pair[0] + '" value="' + pair[1] + '" />';
        });
        // request를 보낸다.
        $('<form action="' + url + '" method="' + (method || 'post') + '">' + inputs + '</form>')
            .appendTo('body').submit().remove();
    }
};
```

## Reference

* [jQuery 이용한 Ajax 파일 다운로드](http://egloos.zum.com/purunjong/v/2510155)