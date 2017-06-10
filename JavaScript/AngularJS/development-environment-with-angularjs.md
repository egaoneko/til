# AngularJS 개발환경 구성

[https://github.com/jeado/ngbook](https://github.com/jeado/ngbook)

### Node.js설치

[https://nodejs.org/ko/](https://nodejs.org/ko/)

### Gurnt 설치

자바스크립트 프로젝트를 위한 태스크 기반의 커맨드 라인 빌드 툴이다. 다양한 플러그인을 제공하고 있고 grunt-contrib-connect 플러그인으로 간단히 웹 서버를 구동할 수 있다.

[http://gruntjs.com/](http://gruntjs.com/)

```bash
sudo npm install -g grunt-cli
npm install
grunt webserver
```

### Bower 설치

트위터에서 만든 웹을 위한 패키지 관리 도구다. jQuery, AngularJS, Require.js 등과 같이 자바스크립트 라이브러리를 하나의 패키지로 보고 이러한 패키지를 쉽게 추가하고 삭제할 수 있게 해준다.

[https://bower.io/](https://bower.io/)

```bash
sudo npm install -g bower
bower install angluar
bower install jquery
bower init
```

### anglular-seed

angular 팀에서 제공하는 AngularJS 웹 애플리케이션 기반 프로젝트다. 초기에 빠르게 개발을 시작할 수 있게 제공하고 있다.

[https://github.com/angular/angular-seed](https://github.com/angular/angular-seed)

```bash
sudo npm install -g karma
npm install
npm start
npm test
```

### 스케폴딩

건설에서 주로 사용하는 용어로 큰 컨물이나 시설물을 건설하거나 보수하기 위해 사람이나 장비, 자재 등을 올려 작업할 수 있게 임시로 설치한 가시설물을 뜻한다. 웹 애플리케이션 개발에서도 비슷한 의미로 해석되며 소스 코드나 구조나 개발에 필요한 코드를 추가해 가면서 하나의 웹 애플리케이션을 개발하는 것이다.

[http://yeoman.io/](http://yeoman.io/)

```bash
sudo npm install -g grunt-cli bower yo generator-karma generator-angular
mkdir smapleApp && cd $_
yo angluar sampleApp
grunt server
```

### Reference

* [시작하세요! AngularJS 프로그래밍](http://book.naver.com/bookdb/book_detail.nhn?bid=7545225)