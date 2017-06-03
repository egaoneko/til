# Submodule

## 서브모듈 시작하기

```sh
$ git submodule add git://github.com/chneukirchen/rack.git rack
$ git commit -m 'first commit with submodule rack'
```

## 서브모듈이 있는 프로젝트 Clone하기

```sh
$ git clone git://github.com/schacon/myproject.git
$ git submodule init
$ git submodule update
$ git merge origin/master
```

## Reference

* [6.6 Git 도구 - 서브모듈](https://git-scm.com/book/ko/v1/Git-%EB%8F%84%EA%B5%AC-%EC%84%9C%EB%B8%8C%EB%AA%A8%EB%93%88)
* [Git: 서브모듈 이해하기 (git submodule)](http://ohgyun.com/711)