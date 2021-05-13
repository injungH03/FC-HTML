header tag mdn
https://developer.mozilla.org/ko/docs/Web/HTML/Element/header

footer tag mdn
https://developer.mozilla.org/ko/docs/Web/HTML/Element/footer

h1 tag mdn
https://developer.mozilla.org/ko/docs/Web/HTML/Element/Heading_Elements

main tag mdn
https://developer.mozilla.org/ko/docs/Web/HTML/Element/main

한눈에 보는 HTML 요소(Elements & Attributes) 총정리
https://heropy.blog/2019/05/26/html-elements/


```
<article>
    
독립적으로 구분되거나 재사용 가능한 영역을 설정.
(매거진/신문 기사, 블로그 등)
일반적으로 <h1>~<h6>를 포함하여 식별.
작성일자와 시간을 <time>의 datetime 속성으로 작성.
article { display: block; }
```
Ex)
<article class="forecast">
    <h1>Weather forecast for Seattle</h1>
    <article class="day-forecast">
        <h2>03 March 2018</h2>
        <p>Rain.</p>
    </article>
    <article class="day-forecast">
        <h2>04 March 2018</h2>
        <p>Periods of rain.</p>
    </article>
    <article class="day-forecast">
        <h2>05 March 2018</h2>
        <p>Heavy rain.</p>
    </article>
</article>

```
<section>
문서의 일반적인 영역을 설정.
일반적으로 <h1>~<h6>를 포함하여 식별.
section { display: block; }

section 특정 구역 설정하는 부분에서의 역할 비슷함, 제목을 포함해서 의미를 포함
div  의미 X
```
Ex)
<h1>Choosing an Apple</h1>
<section>
    <h2>Introduction</h2>
    <p>This document provides a guide to help with the important task of choosing the correct Apple.</p>
</section>



```
<aside>
문서의 별도 콘텐츠를 설정.
(보통 광고나 기타 링크 등의 사이드바(Side bar)를 설정)
aside { display: block; }
Ex)
```

![image](https://user-images.githubusercontent.com/71302348/118098314-b4281680-b40e-11eb-9491-e7056dee9401.png)

<!-- <img src="https://user-images.githubusercontent.com/71302348/118098314-b4281680-b40e-11eb-9491-e7056dee9401.png"> -->

 ```
<nav>
다른 페이지 링크를 제공하는 영역을 설정.
(Navigation, 보통 메뉴(Home, About, Contact), 목차, 색인 등을 설정)
nav { display: block; }

영역을 설정하는 테그들은 블럭요소
```
Ex)
<!DOCTYPE html>
<html>
<body>

<h1>The nav element</h1>

<p>The nav element defines a set of navigation links:</p>

<nav>
<a href="/html/">HTML</a> |
<a href="/css/">CSS</a> |
<a href="/js/">JavaScript</a> |
<a href="/python/">Python</a>
</nav>

</body>
</html>

