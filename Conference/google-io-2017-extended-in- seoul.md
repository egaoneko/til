# [Google I/O 2017 Extended in Seoul](https://io-extended-seoul-17.firebaseapp.com/)

## Keynote (권순선)

* [AudioSet](https://research.google.com/audioset/)
* [Youtube-8M](https://research.google.com/youtube8m/)
* [Open Images](https://research.googleblog.com/2016/09/introducing-open-images-dataset.html)

## Hacknews Reader PWA with Javascript Frameworks (Jimmy Moon)

* [PNPWA]()
* [Next.js](https://github.com/zeit/next.js/)
* [webpatetest.org](https://www.webpagetest.org/)
* lighthouse
* bundle size
* [CodeBusking (코드버스킹)](https://github.com/codebusking)

## ProtoPie URL Share 기능과 PWA 적용 (김성훈)

* Sevice Worker & Manifest.json
* [AMP](https://www.ampproject.org/ko/)
* [여러분의 첫 Progressive Web App](https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/?hl=ko)
* [pwa exampels](https://pwa.rocks/)

## WebAssembly (도창욱)

* [웹어셈블리 - MDN](https://developer.mozilla.org/ko/docs/WebAssembly)

### Why?

* [Compiling for the Web with WebAssembly (Google I/O '17) - YouTube](https://www.youtube.com/watch?v=6v4E6oksar0)
* NaCl
    * 좋은 결과를 내지 못했다.
* JS의 성능이 좋아졌고, 기능도 많아졌다.
* V8의 JS 실행 방식의 최적화함에도 불구하고도 성능이 필요하다.
* 큰 프로젝트를 다른 언어로의 다시 작성하는 것에는 매우 큰 노력이 필요하다.
* 즉, JS의 발전 != 모든 이슈 해결
* WebAssembly 도 이슈의 일부를 해결하고자 한다.
* W3C에서 새로 진행중인 새 **표준**이다. (모든 브라우저 밴더들이 참여하고 있다.)

### WebAssembly 란?

인전한(Safety) **로딩과 실행**을 **네이티브 수준의 성능**으로 제공하기 위한 Compact & Portable(multi browser, nodejs and etc) **Binary Format**

**Text Format** -> **Binary Format**

### 실행 환경과 API의 연동

#### 전통적인 VM

* GC
* Compile
* 중간 언어를 사용(성능 문제)

#### 모던 브라우저

* WebAssembly 모듈은 JS 모듈과 같은 레벨

### How to do?

* [Emscripten](https://github.com/kripken/emscripten)
* C 코드가 Web Browswer에서 실행할 수 있다.

### 지원

* 모든 모던 브라우저에서 지원한다.

### 배워야하나요?

* 대대수의 경우 wasm을 직접 사용할 필요는 없습니다.
* 다른 언어로부터의 컴파일 타겟
* 빠른 로딩 및 실행 속도
* 사장님이 시켰을때...?

## IT의 변화와 NoOPS, 빅데이타, 머신러닝 (조대협)

### 소프트웨어 기술 중심의 변화

* Enterprise(기업 중심) -> Internet Service(인터넷 회사) -> Start up Mobile Service (스타트업, 1인개발자, 앱)

### NoOPS

* DevOPS 끝물...
* 클라우드 기반에서 운영이 필요 없어짐

### 빅데이터

* 빅데이터 끝물...
* 클아우드 기반의 데이터 분석 아키텍쳐
* 실시간 분석도 가능
* Big Query
    * [BigQuery 및 Firebase Analytics를 사용한 모바일 앱의 이해](https://developers-kr.googleblog.com/2016/10/using-bigquery-and-firebase-analytics-to-understand-your-mobile-app.html)
* [Firebase Analytics](https://firebase.google.com/docs/analytics/?hl=ko)
    * 모바일 게임 로깅
    * 모바일 터치 히트맵
    * AB 테스팅
* 빅데이터 분석 시스템 구현 전략
    * 정보 모델 설계 -> 실장님이 물어보는 것
    * 데이터 기반의 의사 결정 문화 개발 -> A4용지가 BI보다 강하다.
    * 단기 무료 솔루션 -> 중기 무료 + 자체 구현 솔루션
    * 중요!! 데이터 접근성을 높여라(엑설 다운...?)

### 머신러닝

* 이론 완성
* Tensorflow
* 머신러닝 알고리즘에 집중할 필요 없다. -> 아이디어 필요, 업무에 대한 지식
    * Vision API
    * Speech API
        * Azar
    * Translate API
    * Video Intelligence API
* 머신러닝 파이프라인
    * 필요한 데이터를 물흐르듯이 넣어 줄 수 있어야한다.
* 빅데이터 & 머신러닝 파이프라인(합쳐줘야 한다.)