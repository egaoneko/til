# ngTrim

>If set to false AngularJS will not automatically trim the input. This parameter is ignored for input[type=password] controls, which will never trim the input.
>
>(default: true)

## Issue

`input`값에 기본적으로 `trim`이 되어 찾아보니 위와 같이 `input` 태그는 기본적으로 `trim`이 되고 있다.

## Solution

`ng-trim="false"`로 `trim`을 제거할 수 있다.

## Reference

* [input[text]](https://docs.angularjs.org/api/ng/input/input%5Btext%5D)