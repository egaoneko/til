# DEVIEW 2016

## Web Payment API의 현재와 미래

키노트 이후 첫 세션 중 웹과 관련한 유일한 트랙이고 처음보는 내용이어서 관심이가 듣게되었다. 큰 기대를 안하고 들어갔는데 생각보다 재미있는 내용이었다. Web Payment에서 사용하는 Service Worker도 작년인가 재작년인가에 듣고 써보지 못했는데 써볼 수 있을지는 의문이지만, 써볼 수 있는 기회가 생기면 좋을 것 같다.

[Slide](http://www.slideshare.net/deview/121-web-payment-api)

<iframe src="//www.slideshare.net/slideshow/embed_code/key/sxjAvK4zspLEUs" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/deview/121-web-payment-api" title="[121] web payment api의 현재와 미래 방진호임동우" target="_blank">[121] web payment api의 현재와 미래 방진호임동우</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/deview">NAVER D2</a></strong> </div>

W3C에서 워킹그룹으로 만들어져 표준으로 준비 중

* [WEB PAYMENTS AT W3C](https://www.w3.org/Payments/)

### 동기

> 왜 웹 표준화 기구에서 결제에 신경을 쓰는가?

쇼핑카트에서 결제 안하는 비율이 높다, 특히 모바일에서는 더 높다.

> why?

* 폼을 입력하기 힘들다.
* 모바일 친화적인 디자인이 아니다.
* 느린 로딩 속도

사용자들이 쉽게 표준화된 결제 방법을 제공하여 결제하기 쉽게 만들기 위해서 Web Payment API를 만든다.

### 신용카드를 사용한 결제(현재)

* Payment Request API, Payment Method Identifiers, Basic Card Payment

* 크롬(지원), 삼성 브라우저(거의 지원), 오페라 IE 파이어폭스(곧), 사파리(나중에)

![checkout button](http://image.slidesharecdn.com/121webpaymentapi-161023160512/95/121-web-payment-api-8-1024.jpg?cb=1477273252)

기존(폼 잔뜩) -> 체크아웃 버튼만 남김

![ui](http://image.slidesharecdn.com/121webpaymentapi-161023160512/95/121-web-payment-api-9-1024.jpg?cb=1477273252)

브라우저에서 결제에 대한 UI를 만들어준다.(사용자가 추가로 어떤 폼도 입력하지 않고 결제를 할 수 있게 해준다.)

![payment flow](http://image.slidesharecdn.com/121webpaymentapi-161023160512/95/121-web-payment-api-10-1024.jpg?cb=1477273252)

* 판매자 : 어떤 카드를 받겠다는 리스트와 비용을 전달
* 유저: 저장된 카드의 리스트 저장
* 브라우저 : 비교해서 교집합

![flow of api](http://image.slidesharecdn.com/121webpaymentapi-161023160512/95/121-web-payment-api-11-1024.jpg?cb=1477273252)

#### 이점

* 소비자
	* 어떤 쇼핑몰에 가서라도 동일한(편안한) UX를 제공
	* 새로운 사이트에서도 저장된 신용카드 사용 가능
* 판매자
	* 결제 시스템을 위한 UX 등의 개발 노력 절감
	* UX를 따로 구현하지 않고 필요한 것들만 전달
	* 서버에 카드 정보를 저장하기 위한 보안 서버 운용 비용 절감

#### 구현

<iframe src="//www.slideshare.net/slideshow/embed_code/key/sxjAvK4zspLEUs?startSlide=13" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/deview/121-web-payment-api" title="[121] web payment api의 현재와 미래 방진호임동우" target="_blank">[121] web payment api의 현재와 미래 방진호임동우</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/deview">NAVER D2</a></strong> </div>

```javascript
var methodData = [{	// 결제 방법(예: 신용카드)
	supportedMethods: ['visa', 'master']
}, {
	supportedMethods: ['payco pay'],
    data: {
    	merchantID: '12345',
        samPaySepcificField: true
    }
}];
var details = {		// 무엇을 결제할 것인가? (예: 상품 가격)
	total: {
    	label: '총 금액',
        amount: {currency: 'WON', value: '30000'}
    },
    displayItems: [{
    	label: '에드가 포우 티켓',
        amount: {currency: 'WON', value: '15000'}
    }, {
    	label: '한국 시리즈 티켓', ...,
    }]
};
var options = {		// 사용자로부터 수집할 정보 (예: 배송주소)
	shippingOptions: [{
        id: 'standard', label: '일반배송',
        amount: {currency: 'WON', value: '0'}
    }, {
    	id: 'express', label: '로켓배송',
        amount: {currency: 'WON', value: '5000'}
    }], ...
};

var pr = new PaymentRequest(methodData, details, options);

pr.show()
	.then(response => {
    	// 결제가 정상적으로 완료
        processResponse(response);
    }).catch(error => {
    	// 사용자가 취소하거나 오류 발생
        processError(error);
    });
```

![flow](http://image.slidesharecdn.com/121webpaymentapi-161023160512/95/121-web-payment-api-26-1024.jpg?cb=1477273252)

브라우저가 PG에 직접 요청하지 않고 판매자가 요청한다.

#### But

UI만 만들어줄뿐 그외에는 결국 코드를 작성해야 한다.

### 페이먼트 앱을 사용한 결제 (미래)

![payment app checkout](http://image.slidesharecdn.com/121webpaymentapi-161023160512/95/121-web-payment-api-28-1024.jpg?cb=1477273252)

![ui](http://image.slidesharecdn.com/121webpaymentapi-161023160512/95/121-web-payment-api-29-1024.jpg?cb=1477273252)

여러 페이먼트 앱들을 체크아웃 버튼 하나로 바꾼다.

![payment flow](http://image.slidesharecdn.com/121webpaymentapi-161023160512/95/121-web-payment-api-30-1024.jpg?cb=1477273252)

* 판매자 : 허용할 페이먼트 앱 리스트
* 브라우저 : 등록된 에이먼트 앱 리스트

#### 페이먼트 앱 등록

![register payment app](http://image.slidesharecdn.com/121webpaymentapi-161023160512/95/121-web-payment-api-31-1024.jpg?cb=1477273252)

Service Worker를 사용해 브라우저에 저장해 Service Worker 기능을 사용해 작동


![service worker](http://image.slidesharecdn.com/121webpaymentapi-161023160512/95/121-web-payment-api-36-1024.jpg?cb=1477273252)

> Service Worker?

Event based worker이고, 특정 event를 수신하는 deamon

* Document와 별개의 생명 주기를 가지며 심지어 브라우저가 죽어도 살아있음.
* 제공하는 site에 의해 **브라우저에 설치(install)**되고, **필요한 경우** 이벤트를 수신받은 **브라우저에 의해 활성화(activate)** 됨.
* 지정된 origin 및 scope에서만 동작하며, Secure Context에서 실행됨을 보장.

[Service Worker 101 (한국어) - Chang W. Doh](http://www.slideshare.net/cwdoh/service-worker-101)

![payment app is service worker](http://image.slidesharecdn.com/121webpaymentapi-161023160512/95/121-web-payment-api-37-1024.jpg?cb=1477273252)

* 명시적 설치 : 사용차가 직접 설치
* 묵시적 설치 : 쇼핑몰 또는 브라우저의 추천에 의한 설치

![flow of api](http://image.slidesharecdn.com/121webpaymentapi-161023160512/95/121-web-payment-api-32-1024.jpg?cb=1477273252)

페이먼트 앱에 대한 플로우가 추가

#### 이점

* 판매자
	* 다양한 페이먼트 앱의 추가/제거에도 Web page 변경없이 가능
	* Web page 유지보수 비용 절감
* 페이먼트 앱
	* 판매자에 추가가 용이함
	* 웹페이지 내의 공간 확보 없이 삽입하여 사용자에게 노출 가능

#### 구현

![impliment](http://image.slidesharecdn.com/121webpaymentapi-161023160512/95/121-web-payment-api-42-638.jpg?cb=1477273252)

![impliment](http://image.slidesharecdn.com/121webpaymentapi-161023160512/95/121-web-payment-api-43-638.jpg?cb=1477273252)

<iframe src="//www.slideshare.net/slideshow/embed_code/key/sxjAvK4zspLEUs?startSlide=34" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/deview/121-web-payment-api" title="[121] web payment api의 현재와 미래 방진호임동우" target="_blank">[121] web payment api의 현재와 미래 방진호임동우</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/deview">NAVER D2</a></strong> </div>

## REST에서 GraphQL과 Relay로 갈아타기

같은 세션에 많은 관심이 가는 것들 중, 가장 생소한 내용의 본 트랙을 선택하였다. GraphQL와 Relay에 대한 이해가 없이 들어가 많은 내용을 습득하지는 못했다. 슬라이드보다 더 자세한 설명이 담긴 블로그를 첨부하였다. 추가로 Q&A 시간에 JavaScript가 아닌 다른 Java, Python 언어에서 이용이 가능한지에 대한 질문이 많았는데, 이에 대한 해답은 [aeosome-graphql](https://github.com/chentsulin/awesome-graphql#lib-java)라는 깃 저장소가 좋은 답이 될 것 같다. 해당 저장소에는 명세, 커뮤니티, 각 언어별 라이브러리 등에 대한 소개가 있다.

[GraphQL 살펴보기](http://blog.sapzil.org/2015/09/01/graphql-rfc/)

[aeosome-graphql](https://github.com/chentsulin/awesome-graphql#lib-java)

[Slide](http://www.slideshare.net/deview/112rest-graph-ql-relay)

<iframe src="//www.slideshare.net/slideshow/embed_code/key/gw1x7HAmdm0AVD" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/deview/112rest-graph-ql-relay" title="[112]rest에서 graph ql과 relay로 갈아타기 이정우" target="_blank">[112]rest에서 graph ql과 relay로 갈아타기 이정우</a> </strong> from <strong><a target="_blank" href="//www.slideshare.net/deview">NAVER D2</a></strong> </div>

### REST API 현황과 한계

* 현황 : REST API에 대한 Response를 어떻게 돌려줘야하는지 정의되어 있지 않다. (회사별로 다양한 구현체가 존재)

* 한계 : 필드 제한에 어려움, 필드 타입이 모호함, Side Effect, Query Hell, 라이브러리 부족

### GraphQL

GraphQL은 클라이언트 애플리케이션에서 어떤 데이터가 필요한지 기술할 수 있는 쿼리 언어

* 쿼리를 클라이언트의 UI 계층 구조와 유사하게 구성
* 스키마가 미리 정의되어 있는 강타입 언어

[GraphQL](http://graphql.org/learn/)

#### Type

```javascript
type Query {
  me: User
}

type User {
  id: ID
  name: String
}

function Query_me(request) {
  return request.auth.user;
}

function User_name(user) {
  return user.getName();
}
```

#### Query
```javascript
{
  me {
    name
  }
}
```

#### Result
```javascript
{
  "me": {
    "name": "Luke Skywalker"
  }
}
```

### Relay

Relay는 GraphQL과 React로 애플리케이션을 개발하기 위한 프레임워크

[Relay](https://facebook.github.io/relay/)

### 요약

* GET, POST, PUT, DELETE으로 모든 것을 해결해야 함 -> 데이터 가져올 땐 query 사용, 변경할땐 mutation 사용
* 기본값으로 어떤걸 불러올지 정하기가 애매함 -> 항상 데이터 의존성을 명시
* 필드 타입이 정해져 있지 않아서 따로 문서화를 하지 않으면 협업이 힘듬 -> GraphQL은 타입이 정해져 있고 프로토콜 단에서 확인할 수 있음
* 데이터 의존성을 URI에 명세하려면 복잡해진다. -> 데이터 의존성을 명세한 query/mutation를 보낸다.
* 데이터 변경사항을 클라이언트에서 처리하는 방식이 제각각 -> Mutation Config만 잘 써주면 알아서 데이터 변경사항을 처리한다.

### 기타

* 문서 부족으로 Relay의 진입장벽이 높은 편
* 현재 Relay는 실시간 지원이 미비함
* 아직은 실험적인 생태계임

## Inside Fuse

### What is Fuse?

* Native mobile app development platform/engine
* Super fast nattive UI, animation & effects
* Annimation & UI in easy XML
* Buisiness logic in plain javascript
* optional: angular 2

![Example](https://res.cloudinary.com/fusetools/image/upload/w_450%2Ch_450%2Cdpr_1.0%2Cc_limit/example_v2/716a9535aa929126ffe689dfe4f6ede1__media/layout-example.webp)

```javascript
<App>
    <Image ux:Class="Icon" Density="2" StretchMode="PointPrecise" />
    <Font File="Assets/OpenSans-SemiBold.ttf" ux:Global="SemiBold" />

    <Grid ColumnCount="1" Rows="4.5*,100,4*">
        <Fuse.iOS.StatusBarConfig Style="Light" />

        <Text ux:Class="DefaultText" Color="#fff" Font="SemiBold" />

        <Grid Row="1" RowCount="1" Columns="Auto,Auto,1*" Color="#00000088">
            <DefaultText Margin="20,0,0,20" Alignment="Bottom" FontSize="70">73°</DefaultText>
            <Icon Margin="15,0,15,25" Alignment="Bottom" File="Assets/PartlyCloudyIconWhite.png" />
            <WrapPanel Margin="0,0,0,20" Alignment="Bottom">
                <DefaultText Value="SUNDAY, "/>
                <DefaultText Value="MARCH "/>
                <DefaultText Value="23" />
            </WrapPanel>
        </Grid>
        <Image Row="0" RowSpan="2" File="Assets/PaloAlto.png" StretchMode="UniformToFill" />
        <DockPanel Row="2" Color="#f3f3f3">
            <Grid ColumnCount="6" RowCount="1" Dock="Top" Height="80">
                <DefaultText ux:Class="StatText" Color="#1c1c1c" FontSize="14" Alignment="CenterLeft" />
                <Icon ux:Class="StatIcon" Margin="6" Alignment="CenterRight" />

                <Rectangle Alignment="Top" Height="1" Fill="#999b9b" Layer="Background" />

                <StatIcon File="Assets/FlagIcon.png" />
                <StatText>4 MPH</StatText>
                <StatIcon File="Assets/CompassIcon.png" />
                <StatText>SOUTH</StatText>
                <StatIcon File="Assets/UmbrellaIcon.png" />
                <StatText>23%</StatText>
            </Grid>
            <Grid RowCount="4" ColumnCount="5">
                <Rectangle Alignment="Top" Height="1" Fill="#999b9b" Layer="Background" />
                <DefaultText ux:Class="Weekday" Color="#939393" Alignment="Center" FontSize="12" />
                <DefaultText ux:Class="Temperature" Color="#333333" Alignment="Center" FontSize="20" Margin="6,0,0,0" />
                <Weekday>MON</Weekday>
                <Weekday>TUE</Weekday>
                <Weekday>WED</Weekday>
                <Weekday>THU</Weekday>
                <Weekday>FRI</Weekday>
                <Icon File="Assets/CloudsIcon.png" />
                <Icon File="Assets/SunnyIcon.png" />
                <Icon File="Assets/PartlyCloudyIcon.png" />
                <Icon File="Assets/PartlyCloudyIcon.png" />
                <Icon File="Assets/SunnyIcon.png" />
                <Temperature>83°</Temperature>
                <Temperature>85°</Temperature>
                <Temperature>81°</Temperature>
                <Temperature>82°</Temperature>
                <Temperature>86°</Temperature>
            </Grid>
        </DockPanel>
    </Grid>
</App>
```

### 성능 문제 없이 JavaScript를 사용하여 앱을 빌드를 어떻게?

![Single Thread](http://image.slidesharecdn.com/insidefuse-deview2016-161023163118/95/143inside-fuse-deview-2016-12-638.jpg?cb=1477284627)

![Two Thread](http://image.slidesharecdn.com/insidefuse-deview2016-161023163118/95/143inside-fuse-deview-2016-24-638.jpg?cb=1477284627)

* UI Render는 main thread 위에서 이루어지며, 나머지 JS business logic은 background thread에서 이루어진다.

* 두 UI와 JS간 통신은 Observable을 사용하여 이루어진다.

## Angular2 VS React

왜 사용하는 걸까? => 생산성

생산성?

* 학습 비용
* 생태계
* 신뢰성
* 개발환경 구축/유지
* 코드 구현의 용이성
* 커뮤니케이션