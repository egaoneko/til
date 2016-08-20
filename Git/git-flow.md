# git flow

> [Vincent Driessen’s의 branching model](http://nvie.com/git-model)을 적용하여 고수준으로 저장소를 관리하기 위한 Git 확장 콜렉션

![git-branching-model.png](../img/Git/git-flow/git-branching-model.png)

Vincent의 branching model은 "feature – develop – release – hotfixes – master" 단계로 branch를 나눠서 코드를 관리하는 전략이다. gitflow는 이 모델을 사용자가 쉽게 접근할 수 있도록 확장 명령어 셋을 제공한다.

### 설치

* [https://github.com/nvie/gitflow/wiki/Installation](https://github.com/nvie/gitflow/wiki/Installation)

### 브랜치

#### 주요 브랜치

* master : 최종 릴리즈한 안정화 버전
* develop : 다음 릴리즈를 위해 개발중인 최신 버전

#### 보조 브랜치

* feature : 특정 기능 개발을 위한 branch
* release : 릴리즈 점검을 위한 branch
* hotfix : 긴급 버그 픽스를 위한 branch
* support : 버전 호환성 문제 처리를 위한 branch

### 명령어

![git-flow-commands.png](../img/Git/git-flow/git-flow-commands.png)

### Reference

* [GitHub](https://github.com/nvie/gitflow)
* [git-flow cheatsheet](http://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html)
* [A successful git branching model](http://dogfeet.github.io/articles/2011/a-successful-git-branching-model.html)
* [gitflow, 쉬운 git branch 관리](http://huns.me/development/1131)