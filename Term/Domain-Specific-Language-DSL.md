# Domain Specific Language(DSL)

## 정의

> 도메인 특화 언어(Domain-specific language)는 특정한 도메인을 적용하는데 특화된 컴퓨터 언어이다. 이는 어느 도메인에서나 적용 가능한 범용 언어(General-purpose language)와는 반대되는 개념이다.
>
> [도메인 특화 언어 - 위키백과](https://ko.wikipedia.org/wiki/%EB%8F%84%EB%A9%94%EC%9D%B8_%ED%8A%B9%ED%99%94_%EC%96%B8%EC%96%B4)

## 내부 DSL과 외부 DSL

### 내부 DSL

* 호스트 언어 구문을 이용하여 자체적으로 의존하는 무언가를 만드는 경우에 해당된다.

* 내부 DSL에서는 API와 DSL의 경계가 모호해 비슷하게 생각하는 경향이 있다.
	* 좀 더 일반 사용자가 알아보기 쉬운 API가 내부 DSL로 생각해도 될 듯 하다.
* 호스트 언어 능력과 지금까지 사용하던 도구를 그대로 사용할 수 있다는 점, 처리 결과를 쉽게 예측할 수 있어서 해당 언어를 잘 알면 친근할 수 있다.
* 형태
	* 메타 프로그래밍의 형태로 언어에 미니 언어를 만들 수 있다. 
	* 원래 언어로 새로운 구문으로 도입 된다. 그래서 언어 확장을 일으켜 다른 언어가 된다.
	* 인라인 코드 형태로 표현될 수도 있다.
* 적합한 언어 : Lisp, Ruby, Smalltalk

### 외부 DSL
* 호스트 언어와 다른 언어 (XML, Makefile과 같은 고유 형식)에서 생성된 DSL.
* GUI 도구를 제공해 주는 것이 특징.
* 외부 DSL에서는 DSL과 범용 언어(GPL : General Purpose Language)과의 경계가 모호해지는 경향이 있다.
	* 그 차이는 언어 작성자와 언어 사용자의 목적에 있다. 특정 영역에서 언어의 작성자가 아닌 사용자의 목적에 부합하는, 이해를 할 수 있으면 외부 DSL이다.
* 외부 DSL 개발자가 자유롭게 DSL의 형식을 결정할 수 있다.
* 형태
	* 실행 파일에서 DSL 을 동적 로딩할 수 있다.
	* DSL 컴파일러를 만들어서 표현할 수 있다.
	* DSL을 범용 언어로 코드로 변환한다.
* 적합한 언어 : Java, C#, C++

## 장점과 단점

### 장점

* 도메인 특화 언어에서 쓰여진 문장은 그 분야의 사람들이 이해하는데 불편함이 없다.(도메인 수준에서 검증, 확인이 가능)
* 비즈니스 정보 체계의 개발을 전통적인 소프트웨어 개발자들에게서 도메인에 깊은 지식을 가지고 있는 더 큰 도메인 전문가 그룹으로 옮기는데 도움을 준다.

### 단점

* 초기 비용(새로운 언어 습득, 설계, 구현 및 유지, 툴 개발) 많다.
* 적용분야가 좁다.
* 예제를 찾아보기 힘들다.
* 하위 호환성을 유지해야한다.


## 예

도메인 특화 언어에는 매우 넓은 다양성이 존재한다. HTML과 같이 웹페이지 분야에서 널리 쓰이는 언어가 있는가 하면, GNU Emacs 와 XEmacs를 위한 Emacs Lisp와 같이 한정된 분야에서 사용되는 언어도 있다.

* java
	* ANT, Maven, struts-config.xml, Seasar2 S2DAO, HQL(Hibernate Query Language), JMock
* Ruby
	* Rails Validations, Rails ActiveRecord, Rake, RSpec, Capistrano, Cucumber
* 기타
	* SQL, CSS, Regular Expression(정규식), Make, graphviz

## 관련용어

* [General Purpose Language - Wikipedia](https://en.wikipedia.org/wiki/General-purpose_language)
* [Mini language - Wikipedia](https://en.wikipedia.org/wiki/Mini_language)

## 참조

* [도메인 특화 언어 - 위키백과](https://ko.wikipedia.org/wiki/%EB%8F%84%EB%A9%94%EC%9D%B8_%ED%8A%B9%ED%99%94_%EC%96%B8%EC%96%B4)
* [[ DSL ] Domain Specific Language - #1 DSL](http://ccambo.blogspot.kr/2014/02/dsl-domain-specific-language-1-dsl.html)
* [DSL(Domain Specific Language) 이해하기](http://www.mimul.com/pebble/default/2013/06/21/1371806174467.html)
* [Introduction to Domain Specific Languages - InfoQ](https://www.infoq.com/presentations/domain-specific-languages)