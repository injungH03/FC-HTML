<h2>기본문법</h2>

***

```
선택자 {
속성: 속성값;
속성: 속성값;
}
```

<h3>전체 선택자(Universal Selector)</h3>
<p>(요소 내부)의 모든 요소를 선택</p>

```CSS
* {
color: red;
}
```
<br>
<h3>태그 선택자(Type Selector)</h3>
<p>태그 이름이 <code>E</code>인 요소 선택</p>

```CSS
li {
color: red;
}
```
```HTML
<div>
    <ul>
        <li>사과</li> <!--선택-->
        <li>딸기</li><!--선택-->
        <li>오렌지</li><!--선택-->
    </ul>
    <div>당근</div>
    <p>토마토</p>
    <span>오렌지</span>
</div>
```
<br>

<h3>클래스 선택자(Class Selector)</h3>
<p>HTML <code>class</code> 속성의 값이 <code>E</code>인 요소 선택</p>

```CSS
.orange {
color: red;
}
```
```HTML
<div>
    <ul>
        <li>사과</li>
        <li>딸기</li>
        <li class="orange">오렌지</li><!--선택-->
    </ul>
    <div>당근</div>
    <p>토마토</p>
    <span class="orange">오렌지</span><!--선택-->
</div>
```

<br>
<h3>아이디 선택자(ID Selector)</h3>
<p>HTML <code>id</code> 속성의 값이<code>E</code>인 요소 선택</p>

```CSS
#orange {
color: red;
}
```
```HTML
<div>
    <ul>
        <li>사과</li>
        <li>딸기</li>
        <li id="orange" class="orange">오렌지</li><!--선택-->
    </ul>
    <div>당근</div>
    <p>토마토</p>
    <span class="orange">오렌지</span>
</div>
```
<br>
<h3>일치 선택자(Basic Combinator)</h3>
<p><code>E</code>와<code>F</code>를 동시에 만족하는 요소 선택</p>

```CSS
span.orange {
color: red;
}
```
```HTML
<div>
    <ul>
        <li>사과</li>
        <li>딸기</li>
        <li class="orange">오렌지</li>
    </ul>
    <div>당근</div>
    <p>토마토</p>
    <span class="orange">오렌지</span><!--선택-->
</div>
```
<br>
<h3>자식 선택자(Child Combinator)</h3>
<code>E</code>의 자식 요소 <code>F</code>를 선택

```CSS
ul > .orange {
color: red;
}
```
```HTML
<div>
    <ul>
        <li>사과</li>
        <li>딸기</li>
        <li class="orange">오렌지</li> <!--선택-->
    </ul>
    <div>당근</div>
    <p>토마토</p>
    <span class="orange">오렌지</span>
</div>
```

<br>
<h3>후손(하위) 선택자(Descendant Combinator)</h3>
<p><code>E</code>의 후손(하위) 요소<code>F</code>를 선택 <br>
'띄어쓰기'가 선택자의 기호로 사용된다.</p>

```CSS
div .orange {
color: red;
}
```
```HTML
<div>
    <ul>
        <li>사과</li>
        <li>딸기</li>
        <li class="orange">오렌지</li> <!--선택-->
    </ul>
    <div>당근</div>
    <p>토마토</p>
    <span class="orange">오렌지</span> <!--선택-->
</div>
```
<br>
<h3>인접 형제 선택자(Adjacent Sibling Combinator)</h3>
<p><code>E</code>의 다음 형제 요소<code>F</code>하나만 선택</p>

```CSS
.orange + li {
color: red;
}
```

```HTML
<ul>
    <li>사과</li>
    <li>딸기</li>
    <li class="orange">오렌지</li>
    <li>망고</li> <!--선택-->
    <li>사과</li>
</ul>
```
<br>
<h3>일반 형제 선택자(General Sibling Combinator)</h3>
<p><code>E</code>의 다음 형제 요소<code>F</code>모두 선택</p>

```CSS
.orange ~ li {
color: red;
}
```
```HTML
<ul>
    <li>사과</li>
    <li>딸기</li>
    <li class="orange">오렌지</li>
    <li>망고</li> <!--선택-->
    <li>사과</li> <!--선택-->
</ul>
```
<br>

***

<h3>HOVER</h3>
<p>
    <code>E</code>에 마우스(포인터)가 올라가 있는 동안에만 <code>E</code>선택<br>
    E:hover
</p>

<br>
<h3>ACTIVE</h3>
<p>
    <code>E</code>를 마우스로 클릭하는 동안에만<code>E</code>선택<br>
    E:active
</p>
<br>
<h3>FOCUS</h3>
<p>
    <code>E</code>가 포커스 된 동안에만<code>E</code>선택<br>
    E:focus
</p>
<br>
<h3>FIRST CHILD</h3>
<p>
    <code>E</code>가 형제 요소 중 첫번째 요소라면 선택<br>
    E:first-child
</p>

```css
.fruits li:first-child {
color: red;
}
```
```html
<ul class="fruits">
    <li>사과</li> <!--선택-->
    <li>딸기</li>
    <li>오렌지</li>
    <li>망고</li>
    <li>사과</li>
</ul>
```
<br>
<h3>LAST CHILD</h3>
<p>
    <code>E</code>가 형제 요소 중 마지막 요소라면 선택<br>
    E:last-child
</p>

```css
.fruits li:last-child {
color: red;
}
```
```html
<ul class="fruits">
    <li>사과</li>
    <li>딸기</li>
    <li>오렌지</li>
    <li>망고</li>
    <li>사과</li> <!--선택-->
</ul>
```
<br>
NTH CHILD
<p>
    <code>E</code>가 형제 요소 중 <code>n</code>번째 요소라면 선택<br>
    (<code>n</code>키워드 사용시 <code>0</code>부터 해석(Zero-base))
    E:nth-child(n)
</p>

```css
.fruits li:nth-child(2) {
color: red;
}
```
```html
<ul class="fruits">
    <li>사과</li>
    <li>딸기</li> <!--선택-->
    <li>오렌지</li>
    <li>망고</li>
</ul>
```
<br>

```css
.fruits li:nth-child(2n) {
color: red;
}
```
```html
<ul class="fruits">
    <li>사과</li>
    <li>딸기</li> <!--선택-->
    <li>오렌지</li>
    <li>망고</li> <!--선택-->
</ul>
<!-- '짝수'번째 요소들만 선택할 수 있습니다. -->
```
<br>

```css
.fruits li:nth-child(n+3) {
color: red;
}
```
```html
<ul class="fruits">
    <li>사과</li>
    <li>딸기</li>
    <li>오렌지</li> <!--선택-->
    <li>망고</li> <!--선택-->
</ul>
<!-- 3번째 요소부터 이후 요소들을 선택합니다. -->
```
<br>

```css
.fruits p:nth-child(1) {
color: red;
}
```
```html
<!-- 선택된 요소 없음 -->
<div class="fruits">
    <div>딸기</div>
    <p>사과</p>
    <p>망고</p>
    <span>오렌지</span>
</div>
<!-- .fruits 의 첫번째 자식 요소가 <p></p> 가 아니기 때문에 선택되지 않습니다. -->
```

<h3>NTH OF TYPE</h3>
<p>
    <code>E</code>의 타입(태그이름)과 동일한 타입인 형제 요소 중 <code>E</code>가 <code>n</code> 번째 요소라면 선택<br>
    (<code>n</code> 키워드 사용시 <code>0</code>부터 해석(Zero-base))<br>
    태그를 찾는 용도로만 사용<br>
    E:nth-of-type(n)
</p>

```css 
.fruits {
    font-size: 40px;
}

.fruits p:nth-of-type(1) {
    color: red;
}
```
```html
<div class="fruits">
    <div>오렌지</div>
    <p>사과</p> <!-- 적용 -->
    <p>망고</p>
    <span>딸기</span>
</div>
```
<br>

<h3>부정 선택자(Negation Selector)</h3>
<p><code>S</code> 가 아닌 <code>E</code> 선택<br>
E:not(S) / e-검색 s-선택자
</p>

```html
<ul class="fruits">
    <li>오렌지</li>
    <li class="strawberry">딸기</li> <!-- class="strawberry" 만 적용되지 않는다. -->
    <li>망고</li>
    <li>사과</li>
</ul>
```
```css
.fruits {
font-size: 40px;
}
.fruits li:not(.strawberry) {
color: red;
}
```

***

<h2>가상 요소 선택자(Pseudo-Elements Selectors)</h2>
<br>
<h3>BEFORE</h3>
<p><code>E</code> 요소 내부의 앞에, 내용(content)을 삽입</p>
<code>E::before</code>

```html
<!-- ul>li{$}*10    -->
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
</ul>
```
```css
ul li::before {
content: "숫자";
/* 내용을 적지 않더라도 content 속성이 있어야 적용된다. */
width: 30px;
height: 30px;
background: red;
margin-right: 20px;
display: inline-block;
border-radius: 50%;
}
```
<br>
<h3>AFTER</h3>
<p><code>E</code> 요소 내부의 뒤에, 내용(content)을 삽입</p>
<code>E::after</code>

```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
</ul>
```
```css
ul li::after {
content: url("https://heropy.blog/css/images/vendor_icons/css3.png");

}
```
<br>
<h2>속성 선택자(Attribute Selectors)</h2>
<br>
<h3>ATTR</h3>
<p>속성 <code>attr</code>을 포함한 요소 선택</p>
<code>[attr]</code>

```HTML
<input type="text" value="Example">
<input type="password" value="1234">
<input class="disabled" type="text" value="disabled text" disabled>
```
```CSS
[disabled] {
opacity: 0.2;
/* 투명도 20% */
color: red;
}
```
<br>
<h3>ATTR=VALUE</h3>
<p>속성 <code>attr</code>을 포함하며 속성 값이 <code>value</code> 요소 선택</p>
<code>[attr=value]</code>

```HTML
<input type="text" value="Example">
<input class="password" type="password" value="1234">
<input class="disabled" type="text" value="disabled text" disabled>
```
```CSS
[type="password"] {
opacity: 0.5;
/* 투명도 20% (*/
color: red;
}
```
<br>
<h3>ATTR^=VALUE</h3>
<p>속성 <code>attr</code>을 포함하며 속성 값이 <code>value</code>로 시작하는 요소 선택</p>
<code>[attr^=value]</code>

```HTML
<button class="btn-success">Success</button>
<button class="btn-danger">Danger</button>
<button>Normal</button>
```
```CSS
[class^="btn-"] {
font-weight: bold;
border-radius: 20px;
}
```
<br>
<h3>ATTR$=VALUE</h3>
<p>속성 <code>attr</code>을 포함하며 속성 값이 <code>value</code>로 끝나는 요소 선택</p>
<code>[attr$=value]</code>

```HTML
<button class="btn-success">Success</button>
<button class="btn-danger">Danger</button>
<button>Normal</button>
```
```CSS
[class$="succes"] {
color: green;
}
```
<br>
<h3>상속(Inheritance)</h3>

```CSS
.ecosystem {
color: red;
}
```
```HTML
<div class="ecosystem">생태계
    <!-- RED -->
    <div class="animal">동물
        <!-- RED -->
        <div class="diger">호랑이</div> <!-- RED -->
        <div class="lion">사자</div> <!-- RED -->
        <div class="elephant">코끼리</div> <!-- RED -->
    </div>
    <div class="plant">식물</div> <!-- RED -->
</div>
```
<p>생태계(.ecosystem)에 적용된 색상이, 하위 요소들에게도 적용</p>


<h3>상속되는 속성들(properties)</h3>

<ul>
    <li>font
        <ul>
            <li>font-size</li>
            <li>font-weight</li>
            <li>font-style</li>
            <li>line-height</li>
            <li>font-family</li>
        </ul>
    </li>
    <li>color</li>
    <li>text-align</li>
    <li>text-indent</li>
    <li>text-decoration</li>
    <li>letter-spacing</li>
    <li>opacity</li>
    etc...(글자를 다루는 속성들이 상속이 된다.)
</ul>

<br>
<h3>강제 상속</h3>

```HTML
<div class="parent">
    <div class="child"></div>
</div>
```
```CSS
.parent {
position: absolute; /* 상속되지 않는 속성과 값 */
}
.child {
position: inherit; /* 강제 상속 받아 position: absolute; 와 동일 */
}
```
<p>상속되지 않는 속성(값)도 inherit 이라는 값을 사용하여 '부모'에서'자식'으로 강제 상속시킬 수 있다. '자식'을 제외한 '후손'에게는 적용되지 않으며,<br>
    모든 속성이 강제 상속을 사용할 수 있는 것은 아니다.
</p>
<br>
<h3>우선순위</h3>

```html
<body>
    <!-- 인라인 선언 방식 -->
    <div id="color_yello" class="color_green" style="color: orange">Hello world!</div>
</body>
```

```CSS
div {color: red !important;} /* !important */

#color_yello { color: yellow; } /* 아이디 선택자 */

.color_green { color: green; } /* 클래스 선택자 */

div { color: blue; } /* 태그 선택자 */

* { color: darkblue; } /* 전체 선택자 */

body { color: violet; } /* 상속 */

/*
하나의 요소를 가르키는 7개의 색상이 있다.
Hello world! 라는 문자는 어떤 색상이 될까?
*/
```
<br>
<h3>우선순위 결정</h3>

<p><strong>같은 요소가 여러 선언의 대상이 될 경우,<br>
        어떤 선언의 CSS 속성(property)을 우선 적용할지 결정하는 방법</strong></p>

<ol>
    <li>명시도 점수가 높은 선언이 우선(명시도)</li>
    <li>점수가 같은 경우, 가장 마지막에 해석(늦게 작성한)되는 선언이 우선(선언 순서)</li>
    <li>명시도는 '상속' 규칙보다 우선(중요도)</li>
    <li><code>!important</code>가 적용된 선언 방식이 다른 모든 방식보다 우선(중요도)</li>
</ol>

<p>우선 순위에는 '중요도,명시도,선언 순서'의 개념이 있습니다. 각 개념이 의미하는 것을 기억하세요.</p>
<br>

<h4>1. 가장 중요(<code>!important</code)></h4>
<p><strong>모든 선언을 무시하고 가장 우선<br>
        점수:<code>∞</code> pt</strong></p>

```CSS
div {
color: red !important; /* 가장 우선 */
}
```
<br>
<h4>2. 인라인 선언 방식(Style Attribute)
</h4>
<p><strong>인라인 선언(HTML <code>style</code>속성을 사용)<br>
        점수:<code>1000</code> pt</strong></p>

```HTML
<div style="color: orange;">HELLO WORLD</div>
```
<br>
<h4>3. 아이디(ID Selector)</h4>
<p><strong>아이디 선택자</strong><br>
점수: <code>100</code> pt</p>

```CSS
#color yellow {
    color: yellow;
}
```
<br>
<h4>4. 클래스(class Selector)</h4>
<p><strong>클래스 선택자</strong><br>
점수: <code>10</code> pt</p>

```CSS
.color green {
    color: green;
}
```
<br>
<h4>5. 태그(Type Selector)</h4>
<p><strong>태그 선택자</strong><br>
점수: <code>1</code> pt</p>

```CSS
span {
    color: blue;
}
```
<br>
<h4>6. 전체(Universal Selector)</h4>
<p><strong>전체 선택자</strong><br>
점수: <code>0</code> pt</p>

```CSS
* {
    color: darkblue;
}
```
<br>
<h4>7. 상속(CSS Inheritance)</h4>
<p><strong>상속 받은 속성은 항상 우선하지 않음</strong><br>
점수: 계산하지 않음</p>

```CSS
body {
    color: violet;
}
```
<br>
<h4>예제</h4>

```CSS
.list li.item { color: red; } /* 21pt (클,태,클) */
.list li:hover { color: red; } /* 21pt (클,태,가상(클)) */
.box::before { content: "Good"; color: red; } /* 11pt (클,요소(태그))*/
#submit span { color: red;} /* 101pt (아이디,태) */
header .menu li:nth-child(2) { color: red; } /* 22pt (태,클,태,가상(클))*/
h1 { color: red;} /* 1pt (태) */
:not(.box) { color: red; } /* 10pt (부정,클) */
:not(span) { color: red; } /* 1pt (부정,태) */
```
<p>:hover 처럼 '가상 클래스'는 '클래스'선택자의 점수(10pt)를 가지며, ::before 처럼<br>
'가상 요소'는 '태그' 선택자의 점수(1pt)를 가집니다. 부정선택자 :not()은 점수를 가지지 않습니다.</div></p>