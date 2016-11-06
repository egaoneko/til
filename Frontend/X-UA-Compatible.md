# X-UA-Compatible

## 렌더링 모드 적용

`<meta>` 태그를 사용해서 어떤 렌더링 엔진을 사용할 것인지 전달

```xml
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

* `IE=5` : 관용모드(quirks mode)로 지정된 DOCTYPE에 상관없이 IE5 렌더링 방식이 사용
* `IE=7` : IE7 표준모드로 지정된 DOCTYPE에 상관없이 IE7 표준 모드 렌더링 방식이 사용
* `IE=EmulateIE7` : IE7 에뮬레이션 모드로 지정된 DOCTYPE에 따라 IE7 표준모드나 관용모드로 렌더링
* `IE=8` : IE8 표준모드로 지정된 DOCTYPE에 상관없이 IE8 표준모드로 렌더링
* `IE=EmulateIE8` : IE8 에뮬레이션 모드로 지정된 DOCTYPE에 따라 IE8 표준모드나 관용모드로 렌더링
* `IE=edge` : 최신모드로 지정된 DOCTYPE에 상관없이 IE8 이상 버전에서 항상 최신 표준 모드로 렌더링

---

* 마이크로소프트는 실험적인 프로젝트가 아닌 이상 `IE=edge` 모드를 지정할 것을 권장
*  구식 콘텐츠를 위한 특정 렌더링 엔진을 사용하려면 앞서 나열한 content 속성의 다양한 값 중 하나를 지정
* 만약 `X-UA-Compatible`이 지정된 meta 태그가 없다면 사용자가 호환성 보기를 선택했는지, 개발자의 사이트가 마이크로소프트 호환성 정보 관리 사이트 목록에 있는지(트래픽이 많은 사이트만 해당)등의 요인에 가변적
* 과거에는 `content="IE=edge,chrome=1"` 처럼 대체 방법으로 크롬 프레임이라는 ActiveX를 설치하라는 것을 추천했는데 크롬 프레임의 개발 종료로 이제 더 이상 비추천

## 서버에 렌더링 모드 적용

* Apache나 IIS 같은 웹서버에서 설정하여 HTTP 헤더를 통해 정보를 지정 가능
* `X-UA-Compatible` 속성 값은 IE에서만 작동하는 비표준 속성이기에, W3C에서 제공하는 유효성 검사툴(Validator)들은 이 속성 값이 적용되어 있다면 오류로 판단
* 모든 웹페이지에 해당 태그를 작성하지 않아도 되도록 웹서버 설정을 권장
* 아래의 구문을 `httpd.conf` 혹은 `.htaccess`에 설정

```bash
# ------------------------------------------------------------------------------
# | Better website experience                                                  |
# ------------------------------------------------------------------------------

# Force IE to render pages in the highest available mode in the various
# cases when it may not: http://hsivonen.iki.fi/doctype/ie-mode.pdf.

<IfModule mod_headers.c>
    Header set X-UA-Compatible "IE=edge"
    # `mod_headers` can't match based on the content-type, however, we only
    # want to send this header for HTML pages and not for the other resources
    <FilesMatch "\.(appcache|crx|css|cur|eot|gif|htc|ico|jpe?g|js|m4a|m4v|manifest|mp4|oex|oga|ogg|ogv|opus|otf|pdf|png|safariextz|svgz?|ttf|vcf|webapp|webm|webp|woff|xml|xpi)$">
    Header unset X-UA-Compatible
    </FilesMatch>
</IfModule>
```

## Reference

* [X-UA-Compatible, IE=edge, 호환성 보기](http://webdir.tistory.com/38)