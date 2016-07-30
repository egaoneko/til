# HTML5 Presentation Systems

### Reveal.js

수직 혹은 수평적으로 슬라이드를 배치할 수 있는 미려한 프레젠테이션 프레임워크이다. 다양한 효과와 플러그인을 제공하며, 특히 마크다운을 지원한다.

한 슬라이드는 ``section`` 태그로 구분된다. 각 슬라이드는 ``/#/\d``의 URL로 접근이 가능하며, 기본적으로는 해당 슬라이드의 순서로 접근 가능하다. ``id``속성을 통하여 변경 가능하다.

* [Demo Site](http://lab.hakim.se/reveal-js/)
* [GitHub](https://github.com/hakimel/reveal.js)
* [Online Editor](https://slides.com/?ref=github)

### Impress.js

[prezi](https://prezi.com/)같은 프레젠테이션을 만들 수 있게 해주는 프레젠테이션 프레임워크이다. Reveal.js에 비하여 어렵지만 강렬한 효과를 보여줄 수 있다.

한 슬라이드는 x, y, z 위치와 회전 속성을 가진 ``div`` 태그로 구분된다. 각 슬라이드는 ``/#/step-\d``의 URL로 접근이 가능하며, 기본적으로는 해당 슬라이드의 순서로 접근 가능하다. ``id``속성을 통하여 변경 가능하다.

* [Demo Site](http://impress.github.io/impress.js/)
* [GitHub](https://github.com/impress/impress.js)

### Shower

빠르고 모든 브라우저에서 잘 동작한다고 한다. ``ESC``를 눌렀을 때의 thumbnail view가 인상적이다.

한 슬라이드는 ``section`` 태그로 구분되며, thumbnail view의 제목과 내용은 ``header`` 태그안에 작성된다. 각 슬라이드는 ``/#\d``의 URL로 접근이 가능하며, 기본적으로는 해당 슬라이드의 순서로 접근 가능하다. ``id``속성을 통하여 변경 가능하다.

* [Demo Site](https://shwr.me/)
* [GitHub](https://github.com/shower/shower)

### Deck.js

오래된 프레젠테이션 프레임워크이다. Reveal.js에 비해 기능이 부족하다.

한 슬라이드는 ``section`` 태그로 구분된다. 각 슬라이드를 URL로 접근이 가능하지 않은 것 같다.

* [Demo Site](http://imakewebthings.com/deck.js/introduction/)
* [GitHub](https://github.com/imakewebthings/deck.js)

### Addtion

아래와 같이 GitHub Page를 이용할 수 있다.

```bash
git clone https://github.com/username/repository.git

cd your-local-repository
git checkout --orphan gh-pages

git add .
git commit -m "Adding Reveal.js files for presentation"
git push origin gh-pages
```

### Reference

* [5 of the Best Free HTML5 Presentation Systems](https://www.sitepoint.com/5-free-html5-presentation-systems/)
* [Github Pages for Reveal.js Slides Created With Emacs Org-Mode](http://jr0cket.co.uk/2014/01/github-pages-for-revealjs-slides-via-emacs-org-mode.html.html)