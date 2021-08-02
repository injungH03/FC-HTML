<h2>CSS Flex(Flexible Box)</h2>

<p>대부분 사이트는 전체 레이아웃이 수직 구성이며 ‘위-아래’로 스크롤 하여 사용합니다.
<br>레이아웃을 구성할 때 가장 많이 사용하는 요소(Elements)들이 기본적으로 블록(Block) 개념으로 표시(Display)되며 
이는 뷰(View)에 수직(위에서 아래로)으로 쌓이기 때문에 수직 구성은 상대적으로 쉽게 만들 수 있습니다.
<br>하지만 수평(왼쪽에서 오른쪽으로) 구성의 경우는 상황이 조금 다릅니다.</p><p>문제는 수평 구조를 만드는 속성이 명확하지 않았기 때문인데, 
그래서 많은 경우 <code>&lt;table&gt;</code>나 <code>float</code> 혹은 <code>inline-block</code> 등의 도움을 받았습니다.
<br>하지만 이러한 방법들은 다양한 문제(Clear, White space 등, 해결은 가능하지만..)를 가지고 있기 때문에 결국 수평 레이아웃 구성의 차선책일 뿐이며,<br> 
이제 우리는 Flex(Flexible Box)라는 명확한 개념(속성들)으로 레이아웃을 쉽게 구성할 수 있습니다.</p>
<br>
<blockquote><p>위에서 쉬운 수평 구성을 얘기했지만 Flex는 쉬운 수직 구성도 가능합니다.</p></blockquote>
<br>
<p>시작하기에 앞서 간단한 얘제를 살펴봅시다.<br><code>float</code> 속성을 이용한 수평 구성의 경우 다음과 같이 스타일을 작성할 수 있습니다.</p>

```html
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="clear-element"></div>
```
```css
.box {
    float: left;
}

.clear-element {
    clear: both;
    /* or left */
}
```
<p>자세한 설명은 생략하고, 위 방법은 보기엔 단순하지만 <code>box</code>를 제외한 <code>clear-element</code>라는 
이름(class)의 다음(next) 요소도 있어야 하기 때문에 실제 사용엔 매우 불편하며 명확하지 않은 방법으로써 많은 경우 아래 방식을 사용합니다.</p>

```html
<div class="clearfix">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```
```css
/* IE 핵이나 기타 방식을 제외하고 가장 원리에 충실한 방법 */
.clearfix::after {
    content: &quot;
    &quot;
    ;
    clear: both;
    display: block;
}
.box {
    float: left;
}
```

<p>예제를 보면 수평이 될 요소들에 직접! <code>float</code>를 적용하고 그 요소들의 Container(부모 요소)에 미리 설정한 
<code>clearfix</code>를 적용합니다.</p><p>그러면 Flexible Box(이하 Flex)는 어떻게 작성할 수 있을까요?<br>아주 간단합니다.

```html
<div class="box-container">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```
```css
.box-container {
    display: flex;
}
```
<p>Flex는 수평이 될 요소들의 Container(<code>box-container</code>)에 <code>display: flex;</code>를 적용합니다.<br>
    (세부 속성이 필요하지 않은 경우도 많기 때문에 상당히 쉽고 빠르게 수평 요소를 구성할 수 있습니다.)</p>

<h1>CSS3 Flexible Box</h1>
<p>Flex는 요소의 크기가 불분명하거나 동적인 경우에도, 각 요소를 정렬할 수 있는 효율적인 방법을 제공합니다.</p>
<p>우선 Flex는 2개의 개념으로 나뉩니다.<br>첫 번째는 Container 두 번째는 Items 입니다.
    <br>위에서 살펴본 바와 같이 Container는 Items를 감싸는 부모 요소이며, 각 Item을 정렬하기 위해선 Container가 필수입니다.</p>
<p>주의할 부분은 Container와 Items에 적용하는 속성이 구분되어 있다는 것입니다.<br>Container에는 <code>display</code>, <code>flex-flow</code>,
    <code>justify-content</code> 등의 속성을 사용할 수 있으며,
    <br>Items에는 <code>order</code>, <code>flex</code>, <code>align-self</code> 등의 속성을 사용할 수 있습니다.</p>
<p></p>

<img src="./img/flex-base.jpeg" alt="Flex">

<h2>Flex Container</h2>

<p>Flex Container를 위한 속성들은 다음과 같습니다.<br>주 축(main-axis)과 교차 축(cross-axis)의 개념은 뒤에서 살펴봅시다.</p>
<table>
    <thead>
        <tr>
            <th>속성</th>
            <th>의미</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>display</td>
            <td>Flex Container를 정의</td>
        </tr>
        <tr>
            <td>flex-flow</td>
            <td><code>flex-direction</code>와 <code>flex-wrap</code>의 단축 속성</td>
        </tr>
        <tr>
            <td>flex-direction</td>
            <td>Flex Items의 주 축(main-axis)을 설정</td>
        </tr>
        <tr>
            <td>flex-wrap</td>
            <td>Flex Items의 여러 줄 묶음(줄 바꿈) 설정</td>
        </tr>
        <tr>
            <td>justify-content</td>
            <td>주 축(main-axis)의 정렬 방법을 설정</td>
        </tr>
        <tr>
            <td>align-content</td>
            <td>교차 축(cross-axis)의 정렬 방법을 설정(2줄 이상)</td>
        </tr>
        <tr>
            <td>align-items</td>
            <td>교차 축(cross-axis)에서 Items의 정렬 방법을 설정(1줄)</td>
        </tr>
    </tbody>
</table>

<h3>display</h3>

<p><code>display</code> 속성으로 Flex Container를 정의합니다.<br>보통 요소의 표시 방법을 <code>display: block;</code>, <code>display:
        inline-block</code> 혹은 <code>display: none;</code> 같이 사용하는 경우가 많죠.<br>같은 요소의 표시 방법으로 Block이나 Inline이 아닌
    Flex(<code>display: flex</code>, <code>display: inline-flex</code>)로 정의합니다.</p>
<table>
    <thead>
        <tr>
            <th>값</th>
            <th>의미</th>
            <th>기본값</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>flex</td>
            <td>Block 특성의 Flex Container를 정의</td>
            <td></td>
        </tr>
        <tr>
            <td>inline-flex</td>
            <td>Inline 특성의 Flex Container를 정의</td>
            <td></td>
        </tr>
    </tbody>
</table>
<p><code>flex</code>와 <code>inline-flex</code>는 차이는 단순합니다.<br><code>display: flex;</code>로 지정된 Flex Container는 Block 요소와
    같은 성향(수직 쌓임)을 가지며,<br><code>display: inline-flex</code>로 지정된 Flex Container는 Inline(Inline Block) 요소와 같은 성향(수평 쌓임)을
    가집니다.</p>
<p>여기서 말하는 수직과 수평 쌓임은 Items가 아니라 Container라는 것에 주의합시다.<br>두 값의 차이는 내부에 Items에는 영향을 주지 않습니다.</p>
<p></p>
<img src="./img/flex-display.jpeg" alt="Flex">

<h3>flex-flow</h3>

<p>이 속성은 단축 속성으로 Flex Items의 주 축(main-axis)을 설정하고 Items의 여러 줄 묶음(줄 바꿈)도 설정합니다.</p>

```
flex-flow: 주축 여러줄묶음;
```
```css
.flex-container {
  flex-flow: row-reverse wrap;
}
```

<table>
    <thead>
        <tr>
            <th>값</th>
            <th>의미</th>
            <th>기본값</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>flex-direction</td>
            <td>Items의 주 축(main-axis)을 설정</td>
            <td><code>row</code></td>
        </tr>
        <tr>
            <td>flex-wrap</td>
            <td>Items의 여러 줄 묶음(줄 바꿈) 설정</td>
            <td><code>nowrap</code></td>
        </tr>
    </tbody>
</table>

<p>개별 속성을 알아봅시다.</p>
<h4>flex-direction</h4>

<p>Items의 주 축(main-axis)을 설정합니다.</p>
<table>
    <thead>
        <tr>
            <th>값</th>
            <th>의미</th>
            <th>기본값</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>row</td>
            <td>Itmes를 수평축(왼쪽에서 오른쪽으로)으로 표시</td>
            <td><code>row</code></td>
        </tr>
        <tr>
            <td>row-reverse</td>
            <td>Items를 <code>row</code>의 반대 축으로 표시</td>
            <td></td>
        </tr>
        <tr>
            <td>column</td>
            <td>Items를 수직축(위에서 아래로)으로 표시</td>
            <td></td>
        </tr>
        <tr>
            <td>column-reverse</td>
            <td>Items를 <code>column</code>의 반대 축으로 표시</td>
            <td></td>
        </tr>
    </tbody>
</table>

```
flex-direction: 주축;
```
<img src="./img/flex-direction.jpeg" alt="Flex">

<h4>주 축(main-axis)과 교차 축(cross-axis)</h4>

<p>위에서 언급했었던 주 축(main-axis)과 교차 축(cross-axis)의 개념은 다음과 같습니다.<br>값 <code>row</code>는 Items를 수평축으로 표시하므로 이때는 주 축이 수평이며 교차
    축은 수직이 됩니다.<br>반대로 값 <code>column</code>은 Items를 수직축으로 표시하므로 주 축은 수직이며 교차 축은 수평이 됩니다.<br>즉, 방향(수평, 수직)에 따라 주 축과 교차
    축이 달라집니다.</p>
<p></p>

<img src="./img/flex-direction-main-axis.jpeg" alt="Flex">

<h4>시작점(flex-start)과 끝점(flex-end)</h4>

<p>시작점(flex-start)과 끝점(flex-end)이라는 개념도 있습니다.<br>이는 주 축이나 교차 축의 시작하는 지점과 끝나는 지점을 지칭합니다.<br>역시 방향에 따라 시작점과 끝점이 달라집니다.</p>

<img src="./img/flex-direction-main-start.jpeg" alt="Flex"><br>
<img src="./img/flex-direction-cross-start.jpeg" alt="Flex">

<p>뒤에서 언급할 속성 중 값으로 <code>flex-start</code>와 <code>flex-end</code>를 사용하는데 이는 방향에 맞는 그 시작점과 끝점을 의미합니다.</p>

<h4>flex-wrap</h4>
<p>Items의 여러 줄 묶음(줄 바꿈)을 설정합니다.</p>
<table>
    <thead>
        <tr>
            <th>값</th>
            <th>의미</th>
            <th>기본값</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>nowrap</td>
            <td>모든 Itmes를 여러 줄로 묶지 않음(한 줄에 표시)</td>
            <td><code>nowrap</code></td>
        </tr>
        <tr>
            <td>wrap</td>
            <td>Items를 여러 줄로 묶음</td>
            <td></td>
        </tr>
        <tr>
            <td>wrap-reverse</td>
            <td>Items를 <code>wrap</code>의 역 방향으로 여러 줄로 묶음</td>
            <td></td>
        </tr>
    </tbody>
</table>

```
flex-wrap: 여러줄묶음;
```

<p>기본적으로 Items는 한 줄에서만 표시되고 줄 바꿈 되지 않습니다.<br>이는 지정된 크기(주 축에 따라 <code>width</code>나 <code>height</code>)를 무시하고 한 줄 안에서만
    가변합니다.<br>Items를 줄 바꿈 하려면 값으로 <code>wrap</code>을 사용해야 합니다.</p>

<img src="./img/flex-wrap.jpeg" alt="Flex">

<h3>justify-content</h3>

<p>주 축(main-axis)의 정렬 방법을 설정합니다.</p>
<table>
    <thead>
        <tr>
            <th>값</th>
            <th>의미</th>
            <th>기본값</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>flex-start</td>
            <td>Items를 시작점(flex-start)으로 정렬</td>
            <td><code>flex-start</code></td>
        </tr>
        <tr>
            <td>flex-end</td>
            <td>Items를 끝점(flex-end)으로 정렬</td>
            <td></td>
        </tr>
        <tr>
            <td>center</td>
            <td>Items를 가운데 정렬</td>
            <td></td>
        </tr>
        <tr>
            <td>space-between</td>
            <td>시작 Item은 시작점에, 마지막 Item은 끝점에 정렬되고 나머지 Items는 사이에 고르게 정렬됨</td>
            <td></td>
        </tr>
        <tr>
            <td>space-around</td>
            <td>Items를 균등한 여백을 포함하여 정렬</td>
            <td></td>
        </tr>
    </tbody>
</table>

```
justify-content: 정렬방법;
```

<img src="./img/flex-justify-content.jpeg" alt="Flex">

<h3>align-content</h3>

<p>교차 축(cross-axis)의 정렬 방법을 설정합니다.<br>주의할 점은 <code>flex-wrap</code> 속성을 통해 Items가 여러 줄(2줄 이상)이고 여백이 있을 경우만 사용할 수 있습니다.</p>
<blockquote>
    <p>Items가 한 줄일 경우 <code>align-items</code> 속성을 사용하세요.</p>
</blockquote>
<table>
    <thead>
        <tr>
            <th>값</th>
            <th>의미</th>
            <th>기본값</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>stretch</td>
            <td>Container의 교차 축을 채우기 위해 Items를 늘림</td>
            <td><code>stretch</code></td>
        </tr>
        <tr>
            <td>flex-start</td>
            <td>Items를 시작점(flex-start)으로 정렬</td>
            <td></td>
        </tr>
        <tr>
            <td>flex-end</td>
            <td>Items를 끝점(flex-end)으로 정렬</td>
            <td></td>
        </tr>
        <tr>
            <td>center</td>
            <td>Items를 가운데 정렬</td>
            <td></td>
        </tr>
        <tr>
            <td>space-between</td>
            <td>시작 Item은 시작점에, 마지막 Item은 끝점에 정렬되고 나머지 Items는 사이에 고르게 정렬됨</td>
            <td></td>
        </tr>
        <tr>
            <td>space-around</td>
            <td>Items를 균등한 여백을 포함하여 정렬</td>
            <td></td>
        </tr>
    </tbody>
</table>

```
align-content: 정렬방법;
```

<p>값 <code>stretch</code>는 교차 축에 해당하는 너비(속성 <code>width</code> 혹은 <code>height</code>)가 값이 <code>auto</code>(기본값)일 경우 교차
    축을 채우기 위해 자동으로 늘어납니다.</p>
<p><img src="./img/flex-align-content.jpeg" alt="Flex">

<h3>align-items</h3>

<p>교차 축(cross-axis)에서 Items의 정렬 방법을 설정합니다.<br>Items가 한 줄일 경우 많이 사용합니다.</p>
<p>주의할 점은 Items가 <code>flex-wrap</code>을 통해 여러 줄(2줄 이상)일 경우에는 <code>align-content</code> 속성이 우선합니다.<br>따라서
    <code>align-items</code>를 사용하려면 <code>align-content</code> 속성을 기본값(<code>stretch</code>)으로 설정해야 합니다.</p>
<table>
    <thead>
        <tr>
            <th>값</th>
            <th>의미</th>
            <th>기본값</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>stretch</td>
            <td>Container의 교차 축을 채우기 위해 Items를 늘림</td>
            <td><code>stretch</code></td>
        </tr>
        <tr>
            <td>flex-start</td>
            <td>Items를 각 줄의 시작점(flex-start)으로 정렬</td>
            <td></td>
        </tr>
        <tr>
            <td>flex-end</td>
            <td>Items를 각 줄의 끝점(flex-end)으로 정렬</td>
            <td></td>
        </tr>
        <tr>
            <td>center</td>
            <td>Items를 가운데 정렬</td>
            <td></td>
        </tr>
        <tr>
            <td>baseline</td>
            <td>Items를 문자 기준선에 정렬</td>
            <td></td>
        </tr>
    </tbody>
</table>

```
align-items: 정렬방법;
```
<img src="./img/flex-align-items.jpeg" alt="Flex">

<h2>Flex Items</h2>

<p>Flex Items를 위한 속성들은 다음과 같습니다.</p>
<table>
    <thead>
        <tr>
            <th>속성</th>
            <th>의미</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>order</td>
            <td>Flex Item의 순서를 설정</td>
        </tr>
        <tr>
            <td>flex</td>
            <td><code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code>의 단축 속성</td>
        </tr>
        <tr>
            <td>flex-grow</td>
            <td>Flex Item의 증가 너비 비율을 설정</td>
        </tr>
        <tr>
            <td>flex-shrink</td>
            <td>Flex Item의 감소 너비 비율을 설정</td>
        </tr>
        <tr>
            <td>flex-basis</td>
            <td>Flex Item의 (공간 배분 전) 기본 너비 설정</td>
        </tr>
        <tr>
            <td>align-self</td>
            <td>교차 축(cross-axis)에서 Item의 정렬 방법을 설정</td>
        </tr>
    </tbody>
</table>

<h3>order</h3>

<p>Item의 순서를 설정합니다.<br>Item에 숫자를 지정하고 숫자가 클수록 순서가 밀립니다.<br>음수가 허용됩니다.</p>
<blockquote>
    <p>HTML 구조와 상관없이 순서를 변경할 수 있기 때문에 유용합니다.</p>
</blockquote>
<table>
    <thead>
        <tr>
            <th>값</th>
            <th>의미</th>
            <th>기본값</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>숫자</td>
            <td>Item의 순서를 설정</td>
            <td><code>0</code></td>
        </tr>
    </tbody>
</table>

```
order: 순서;
```
<img src="./img/flex-order.jpeg" alt="Flex">
<h3>flex</h3>

<p>Item의 너비(증가, 감소, 기본)를 설정하는 단축 속성입니다.</p>
<table>
    <thead>
        <tr>
            <th>값</th>
            <th>의미</th>
            <th>기본값</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>flex-grow</td>
            <td>Item의 증가 너비 비율을 설정</td>
            <td><code>0</code></td>
        </tr>
        <tr>
            <td>flex-shrink</td>
            <td>Item의 감소 너비 비율을 설정</td>
            <td><code>1</code></td>
        </tr>
        <tr>
            <td>flex-basis</td>
            <td>Item의 (공간 배분 전) 기본 너비 설정</td>
            <td><code>auto</code></td>
        </tr>
    </tbody>
</table>

```
flex: 증가너비 감소너비 기본너비;
```
```css
.item {
  flex: 1 1 20px;  /* 증가너비 감소너비 기본너비 */
  flex: 1 1;  /* 증가너비 감소너비 */
  flex: 1 20px;  /* 증가너비 기본너비 (단위를 사용하면 flex-basis가 적용됩니다) */
}
```

<p><code>flex-grow</code>를 제외한 개별 속성은 생략할 수 있습니다.<br>만약 <code>flex: 1;</code>로 작성하면 <code>flex-grow: 1;</code>과
    같습니다.<br>그러면 나머지 속성은 생략했으니 기본값이 적용되어 <code>flex-shrink: 1;</code>, <code>flex-basis: auto;</code>가 되겠죠?<br>즉
    <code>flex: 1;</code> 혹은 <code>flex: 1 1;</code>은 <code>flex: 1 1 auto;</code>와 같다고 볼 수 있습니다만 그렇지 않습니다.</p>
<p><code>flex-basis</code>의 기본값은 <code>auto</code>입니다만 단축 속성인 <code>flex</code>에서 그 값을 생략할 경우 <code>0</code>이
    적용됩니다.<br>다시 정리하면 <code>flex: 1;</code> 혹은 <code>flex: 1 1;</code>은 <code>flex: 1 1 0;</code>이 된다는 것입니다.<br>이 부분을
    기억하지 않으면 엉뚱한 결과가 나올 수 있으니 주의합시다!</p>

<h4>flex-grow</h4>

<p>Item의 증가 너비 비율을 설정합니다.<br>숫자가 크면 더 많은 너비를 가집니다.<br>Item이 가변 너비가 아니거나, 값이 <code>0</code>일 경우 효과가 없습니다.</p>
<table>
    <thead>
        <tr>
            <th>값</th>
            <th>의미</th>
            <th>기본값</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>숫자</td>
            <td>Item의 증가 너비 비율을 설정</td>
            <td><code>0</code></td>
        </tr>
    </tbody>
</table>

```
flex-grow: 증가너비;
```


<p>모든 Items의 총 증가 너비(<code>flex-grow</code>)에서 각 Item의 증가 너비의 비율 만큼 너비를 가질 수 있습니다.<br>예를 들어 Item이 3개이고 증가 너비가 각각
    <code>1</code>, <code>2</code>, <code>1</code>이라면,<br>첫 번째 Item은 총 너비의 25%(1/4)을,<br>두 번째 Item은 총 너비의
    50%(2/4)를,<br>세 번째 Item은 총 너비의 25%(1/4)을 가지게 됩니다.</p>
<><img src="./img/flex-grow.jpeg" alt="Flex">

```html
<h1>flex-grow: </h1>

<div class="container container1">
  <div class="item">0</div>
  <div class="item">0</div>
  <div class="item">0</div>
  <div class="item">1</div>
</div>

<div class="container container2">
  <div class="item">1</div>
  <div class="item">3</div>
  <div class="item">1</div>
  <div class="item">0</div>
</div>

<div class="container container3">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">1</div>
  <div class="item">2</div>
</div>
```

```CSS
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
body {
  padding: 20px;
  font-family: "Noto Sans KR", Helvetica, sans-serif;
}
h1 {
  font-size: 22px;
  font-weight: 600;
  color: #643BFF;
  margin-bottom: 20px;
}
.container {
  width: 200px;
  height: 180px;
  background: #643BFF;
  margin-bottom: 10px;
  display: flex;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #fff;
  height: 150px;
}
.item:nth-child(1) { background: #FFC447; }
.item:nth-child(2) { background: #E87635; }
.item:nth-child(3) { background: #FF4847; }
.item:nth-child(4) { background: #D335E8; }

.container1 .item:nth-child(1) { flex-grow: 0; }
.container1 .item:nth-child(2) { flex-grow: 0; }
.container1 .item:nth-child(3) { flex-grow: 0; }
.container1 .item:nth-child(4) { flex-grow: 1; }

.container2 .item:nth-child(1) { flex-grow: 1; }
.container2 .item:nth-child(2) { flex-grow: 3; }
.container2 .item:nth-child(3) { flex-grow: 1; }
.container2 .item:nth-child(4) { flex-grow: 0; }

.container3 .item:nth-child(1) { flex-grow: 1; }
.container3 .item:nth-child(2) { flex-grow: 2; }
.container3 .item:nth-child(3) { flex-grow: 1; }
.container3 .item:nth-child(4) { flex-grow: 2; }
```
```js
TweenMax.to('.container', 8, {
    width: 700,
    repeat: -1,
    repeatDelay: 2,
    yoyo: true,
    ease: Power0.easeNone
  });
```
<h4>flex-shrink</h4>

<p>Item이 감소하는 너비의 비율을 설정합니다.<br>숫자가 크면 더 많은 너비가 감소합니다.<br>Item이 가변 너비가 아니거나, 값이 <code>0</code>일 경우 효과가 없습니다.</p>
<table>
    <thead>
        <tr>
            <th>값</th>
            <th>의미</th>
            <th>기본값</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>숫자</td>
            <td>Item의 감소 너비 비율을 설정</td>
            <td><code>1</code></td>
        </tr>
    </tbody>
</table>

```
flex-shrink: 감소너비;
```

<p>감소 너비(<code>flex-shrink</code>)는 요소의 너비에 영향을 받기 때문에 계산하기 까다롭습니다.<br>영향을 받는다는 요소의 너비는 <code>width</code>,
    <code>height</code>, <code>flex-basis</code> 등으로 너비가 지정된 경우를 의미합니다.<br>Container의 너비가 줄어 Items의 너비에 영향을 미칠 경우, 영향을
    미치기 시작한 지점부터 줄어든 거리 만큼 감소 너비 비율에 맞게 Item의 너비가 줄어듭니다.</p>
<p>예를 들어 Container의 너비가 줄어 Item의 너비에 영향을 미치기 시작한 지점부터 실제 줄어든 거리가 <code>90px</code>일 때,<br>요소 너비가 같은 Item이 2개이고 지정된 감소
    너비가 각각 <code>2</code>와 <code>1</code>이라면,<br>감소 너비는 2:1 비율이며,<br>첫 번째 Item은 <code>90px</code>의 2/3인
    <code>60px</code> 만큼 너비가 감소하고,<br>두 번째 Item은 <code>90px</code>의 1/3인 <code>30px</code> 만큼 너비가 감소합니다.</p>
<p>다른 예시로 Container의 너비가 줄어 Item의 너비에 영향을 미치기 시작한 지점부터 실제 줄어든 거리가 <code>90px</code>일 때,<br>요소 너비가 다른 Item이 2개이고 요소 너비는
    각각 <code>200</code>과 <code>100</code>이고,<br>지정된 감소 너비가 각각 <code>2</code>와 <code>1</code>이라면,<br><code>200 x 2 =
        400</code>과 <code>100 x 1 = 100</code> 즉 감소 너비는 4:1 비율이며,<br>첫 번째 Item은 <code>90px</code>의 4/5인
    <code>72px</code> 만큼 너비가 감소하고,<br>두 번째 Item은 <code>90px</code>의 1/5인 <code>18px</code> 만큼 너비가 감소합니다.</p>
<img src="./img/flex-shrink.jpeg" alt="Flex">

```html
<h1>flex-shrink: </h1>

<div class="container container1">
  <div class="item">1</div>
  <div class="item">1</div>
  <div class="item">1</div>
  <div class="item">1</div>
</div>

<div class="container container2">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">0</div>
  <div class="item">0</div>
</div>

<div class="container container3">
  <div class="item">1</div>
  <div class="item">4</div>
  <div class="item">1</div>
  <div class="item">1</div>
</div>
```
```CSS
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
body {
  padding: 20px;
  font-family: "Noto Sans KR", Helvetica, sans-serif;
}
h1 {
  font-size: 22px;
  font-weight: 600;
  color: #643BFF;
  margin-bottom: 20px;
}
.container {
  width: 550px;
  height: 180px;
  background: #643BFF;
  margin-bottom: 10px;
  display: flex;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #fff;
  height: 150px;
  flex-basis: 120px;
}
.item:nth-child(1) { background: #FFC447; }
.item:nth-child(2) { background: #E87635; }
.item:nth-child(3) { background: #FF4847; }
.item:nth-child(4) { background: #D335E8; }

.container2 .item:nth-child(1) { flex-shrink: 1; }
.container2 .item:nth-child(2) { flex-shrink: 2; }
.container2 .item:nth-child(3) { flex-shrink: 0; }
.container2 .item:nth-child(4) { flex-shrink: 0; }

.container3 .item:nth-child(1) { flex-shrink: 1; }
.container3 .item:nth-child(2) { flex-shrink: 4; }
.container3 .item:nth-child(3) { flex-shrink: 1; }
.container3 .item:nth-child(4) { flex-shrink: 1; }
```
```js
TweenMax.to('.container', 8, {
    width: 200,
    repeat: -1,
    repeatDelay: 2,
    yoyo: true,
    ease: Power0.easeNone
  });
```
<p>계산이 까다롭기 때문에 활용도는 조금 떨어진다고 생각합니다.<br>원리 정도만 이해하고 넘어갑시다.</p>
<h4>flex-basis</h4>
<p>Item의 (공간 배분 전) 기본 너비를 설정합니다.<br>값이 <code>auto</code>일 경우 <code>width</code>, <code>height</code> 등의 속성으로 Item의 너비를
    설정할 수 있습니다.<br>하지만 단위 값이 주어질 경우 설정할 수 없습니다.</p>
<table>
    <thead>
        <tr>
            <th>값</th>
            <th>의미</th>
            <th>기본값</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>auto</td>
            <td>가변 Item과 같은 너비</td>
            <td><code>auto</code></td>
        </tr>
        <tr>
            <td>단위</td>
            <td>px, em, cm 등 단위로 지정</td>
            <td></td>
        </tr>
    </tbody>
</table>

```
flex-basis: 기본너비;
```

<p><code>flex</code> 속성에서 설명한 것 같이 단축 속성 내에서 <code>flex-basis</code>를 생략하면 값이 <code>0</code>이 되는 것을 주의합시다.</p>
<img src="./img/flex-basis.jpeg" alt="Flex">

<h3>align-self</h3>

<p>교차 축(cross-axis)에서 개별 Item의 정렬 방법을 설정합니다.</p>
<p><code>align-items</code>는 Container 내 모든 Items의 정렬 방법을 설정합니다.<br>필요에 의해 일부 Item만 정렬 방법을 변경하려고 할 경우
    <code>align-self</code>를 사용할 수 있습니다.<br>이 속성은 <code>align-items</code> 속성보다 우선합니다.</p>
<table>
    <thead>
        <tr>
            <th>값</th>
            <th>의미</th>
            <th>기본값</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>auto</td>
            <td>Container의 <code>align-items</code> 속성을 상속받음</td>
            <td><code>auto</code></td>
        </tr>
        <tr>
            <td>stretch</td>
            <td>Container의 교차 축을 채우기 위해 Item을 늘림</td>
            <td></td>
        </tr>
        <tr>
            <td>flex-start</td>
            <td>Item을 각 줄의 시작점(flex-start)으로 정렬</td>
            <td></td>
        </tr>
        <tr>
            <td>flex-end</td>
            <td>Item을 각 줄의 끝점(flex-end)으로 정렬</td>
            <td></td>
        </tr>
        <tr>
            <td>center</td>
            <td>Item을 가운데 정렬</td>
            <td></td>
        </tr>
        <tr>
            <td>baseline</td>
            <td>Item을 문자 기준선에 정렬</td>
            <td></td>
        </tr>
    </tbody>
</table>
```
align-self: 정렬방법;
```
<img src="./img/flex-align-self.jpeg" alt="Flex">

[출처](https://heropy.blog/2018/11/24/css-flexible-box/)