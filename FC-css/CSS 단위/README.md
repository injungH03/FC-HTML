```html
<div class="container">
    Container
    <div class="parent">
        parent
        <div class="child">child1</div>
        <div class="child">child2</div>
    </div>
</div>
```

```css
body * {
    border: 2px solid;
}
.container {
    width: 600px;
}
.parent {
    width: 300px; /* 50% %는 부모 요소의 영향을 받는다.*/
}
.child {
    width: 150px; /* 50% %는 부모 요소의 영향을 받는다.*/
}
```

***

<h3>em<h3>

```html
div class="container">
    Container
    <div class="parent">
        parent
        <div class="child">child1</div>
        <div class="child">child2</div>
    </div>
</div>

```
```css
body * {
    border: 2px solid;
}
.container {
    width: 60em; /* em 폰트 크기의 영향을 받는다. */
    font-size: 10px; 
}
.parent {
    width: 30em; /* 상속을 받는다. */ 
    font-size: 2em; /* 상속받은 폰트 사이즈의 2배 */
}
.child {
    width: 15em;
}
```
***

<h3>rem<h3>

```html
div class="container">
    Container
    <div class="parent">
        parent
        <div class="child">child1</div>
        <div class="child">child2</div>
    </div>
</div>

```
```css
html {
    font-size: 10px;
}
body * {
    border: 2px solid;
}
.container {
    width: 60em; /* em 폰트 크기의 영향을 받는다. */
    font-size: 10px; 
}
.parent {
    width: 30em; /* 상속을 받는다. */ 
    font-size: 2em; /* 상속받은 폰트 사이즈의 2배 */
}
.child {
    width: 20rem; /* rem은 html에 지정된 폰트 사이즈만을 받는다. */
    font-size: 2em;
}
```

***

<h3>vw, vm</h3>

```html
<div class="container"></div>
```
```css
.container {
    width: 50vw; /* 백분율 */
    height: 50vh;
    background: red;
}
```
***

<h3>vmin, vmax</h3>

```html
<div class="container"></div>
```
```css
.container {
    width: 50vmax; /* 뷰포트 사이즈 가로,세로 중에 더 넓은 사이즈에 적용됨 */
    height: 30vmin; /* 뷰포트 사이즈 가로,세로 중에 짧은 사이즈에 적용됨 */
    background: red;
}
```

