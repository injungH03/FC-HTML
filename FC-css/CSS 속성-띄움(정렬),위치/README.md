<h3><code>float</code></h3>
<p>요소의 좌우 방향으로 띄움(수평 정렬)</p>
<h3>속성 값</h3>
<table>
    <thead>
        <tr>
            <td>값</td>
            <td>의미</td>
            <td>기본값</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>none</code></td>
            <td>요소 띄움 없음</td>
            <td><code>none</code></td>
        </tr>
        <tr>
            <td><code>left</code></td>
            <td>왼쪽으로 띄움</td>
            <td></td>
        </tr>
        <tr>
            <td><code>right</code></td>
            <td>오른쪽으로 띄움</td>
            <td></td>
        </tr>
    </tbody>
</table>
<h3>사용법</h3>

```
float: 방향
```
```css
img {
    float: left;
}
```

<h4>단순 띄움</h4>
<img src="./img/단순띄움.png" width="450px" title="단순띄움 이미지" alt="ExImg1">
<p>요소에 <code>float</code>속성을 적용하면, 적용된 요소 주변으로 문자(text)가 흐르게 됩니다.</p>
<h4>단순 해제</h4>
<img src="./img/단순해제.png" width="450px" title="단순해제 이미지" alt="ExImg2">
<h4>수평 정렬</h4>
<img src="./img/수평정렬.png" width="450px" title="수평정렬 이미지" alt="ExImg3">
<p>각 요소에 <code>float</code>속성이 적용되면 차례로 '<strong>정렬</strong>'됩니다.</p>
<h4>정렬 해제</h4>
<img src="./img/정렬해제.png" width="450px" title="정렬해제 이미지" alt="ExImg4">

```css
.box {
    width: 150px;
    height: 100px;
    background: tomato;
    color: white;
    font-size: 30px;
    margin: 10px;
    float: right;
}
.box4 {
    width: 200px;
    height: 150px;
    background: orange;
    clear: both; /* clear:right */
}
```
<h3><code>float</code> 해제</h3>
<p><code>float</code>속성이 적용된 요소의 주위로 다른 요소들이 흐르게 되는데<br>
이를 방지하기 위해 속성을 '해제'해야함
</p>
<ol>
    <li>형제요소에 <code>clear: (left,right,both)</code> 추가하여 해제</li>
    <li>부모요소에 <code>overflow: (hidden,auto)</code> 추가하여 해제</li>
    <li>부모요소에 <code>clearfix</code>클래스 추가하여 해제(<strong>추천!</strong>)</li>
</ol>
<h4>형제 요소에서 해제</h4>
<p><code>float</code>속성이 추가된 요소의 다음 형제요소에 <code>clear</code>속성 추가</p>

```html
<div class="float-left"></div>
<div class="float-left"></div>
<div class="next"></div>
```
```css
.float-left {
    width: 100px;
    height: 100px;
    background: red;
    float: left;
}
.next {
    clear: both;
}
```
<h4>부모 요소에서 해제 1</h4>
<p><code>float</code>속성이 추가된 요소의 부모요소에 <code>overflow</code>속성 추자</p>

```html
<div class="parent">
    <div class="child"></div>
    <div class="child"></div>
</div>
```
```css
.parent {
    overflow: hidden; /* or `auto` */
}
.child {
    float: left;
}
```
<h4>부모 요소에서 해제 2 (추천!)</h4>
<p><code>float</code>속성이 추가된 요소의 부모요소에 미리 지정된 <code>clearfix</code>클래스 추가</p>

```html
<div class="parent clearfix">
    <div class="child"></div>
    <div class="child"></div>
</div>
```
```css
.clearfix::after {
    content: "";
    clear: both;
    display: block; /* `table` */
}
.child {
    float: left;
}
```
<h4><code>display</code> 수정</h4>
<p><code>float</code>속성이 추가된 요소는 <code>display</code>속성의 값이 대부분 <code>block</code>으로 수정됨</p>
<table>
    <thead>
        <tr>
            <td>지정 값</td>
            <td>변화 값</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>inline</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>inline-block</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>inline-table</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-row</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-row-group</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-column</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-column-group</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-cell</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-caption</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-header-group</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-footer-group</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>flex</code></td>
            <td><code>flex</code>/<code>float</code>속성 효과 없음</td>
        </tr>
        <tr>
            <td><code>inline-flex</code></td>
            <td><code>inline-flex</code>/<code>float</code>속성 효과없음</td>
        </tr>
        <tr>
            <td>그 외</td>
            <td>변화없음</td>
        </tr>
    </tbody>
</table>
<h3>clear</h3>
<p><code>float</code>속성이 적용되지 않도록 지정(해제)</p>
<table>
    <thead>
        <tr>
            <td>값</td>
            <td>의미</td>
            <td>기본값</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>none</code></td>
            <td>요소 띄움 허용</td>
            <td><code>none</code></td>
        </tr>
        <tr>
            <td><code>left</code></td>
            <td>왼쪽 띄움 해제</td>
            <td></td>
        </tr>
        <tr>
            <td><code>right</code></td>
            <td>오른쪽 띄움 해제</td>
            <td></td>
        </tr>
        <tr>
            <td><code>both</code></td>
            <td>양쪽(왼쪽,오른쪽) 모두 띄움 해제</td>
            <td></td>
        </tr>
    </tbody>
</table>
<br>
<h3>position</h3>
<p>요소의 위치 지정 방법의 유형(기준)을 설정</p>
<h3>속성 값</h3>
<table>
    <thead>
        <tr>
            <td>값</td>
            <td>의미</td>
            <td>기본값</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>static</code></td>
            <td>유형(기준)없음/배치 불가능</td>
            <td><code>static</code></td>
        </tr>
        <tr>
            <td><code>relative</code></td>
            <td>요소 자신을 기준으로 배치</td>
            <td></td>
        </tr>
        <tr>
            <td><code>absolute</code></td>
            <td>위치 상 부모 요소를 기준으로 배치</td>
            <td></td>
        </tr>
        <tr>
            <td><code>fixed</code></td>
            <td>브라우저(뷰포트)를 기준으로 배치</td>
            <td></td>
        </tr>
        <tr>
            <td><code>sticky</code></td>
            <td>스크롤 영역 기준으로 배치</td>
            <td></td>
        </tr>
    </tbody>
</table>
<h4><code>top</code></h4>
<p>요소의 <code>position</code> 기준에 맞는 '위쪽'에서의 거리(위치)를 설정</p>
<table>
    <thead>
        <tr>
            <td>값</td>
            <td>의미</td>
            <td>기본값</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>auto</code></td>
            <td>브라우저가 계산</td>
            <td><code>auto</code></td>
        </tr>
        <tr>
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>cm</code>등 단위로 지정</td>
            <td><code>0</code></td>
        </tr>
        <tr>
            <td><code>%</code></td>
            <td>부모(위치 상의 부모(조상)) 요소의 세로 너비의 비율로 지정, 음수 값 허용</td>
            <td></td>
        </tr>
    </tbody>
</table>
<h4><code>bottom</code></h4>
<p>요소의 <code>position</code> 기준에 맞는 '아래쪽'에서의 거리(위치)를 설정</p>
<table>
    <thead>
        <tr>
            <td>값</td>
            <td>의미</td>
            <td>기본값</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>auto</code></td>
            <td>브라우저가 계산</td>
            <td><code>auto</code></td>
        </tr>
        <tr>
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>cm</code>등 단위로 지정</td>
            <td><code>0</code></td>
        </tr>
        <tr>
            <td><code>%</code></td>
            <td>부모(위치 상의 부모(조상)) 요소의 세로 너비의 비율로 지정, 음수 값 허용</td>
            <td></td>
        </tr>
    </tbody>
</table>
<h4><code>left</code></h4>
<p>요소의 <code>position</code> 기준에 맞는 '왼쪽'에서의 거리(위치)를 설정</p>
<table>
    <thead>
        <tr>
            <td>값</td>
            <td>의미</td>
            <td>기본값</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>auto</code></td>
            <td>브라우저가 계산</td>
            <td><code>auto</code></td>
        </tr>
        <tr>
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>cm</code>등 단위로 지정</td>
            <td><code>0</code></td>
        </tr>
        <tr>
            <td><code>%</code></td>
            <td>부모(위치 상의 부모(조상)) 요소의 가로 너비의 비율로 지정, 음수 값 허용</td>
            <td></td>
        </tr>
    </tbody>
</table>
<h4><code>right</code></h4>
<p>요소의 <code>position</code> 기준에 맞는 '오른쪽'에서의 거리(위치)를 설정</p>
<table>
    <thead>
        <tr>
            <td>값</td>
            <td>의미</td>
            <td>기본값</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>auto</code></td>
            <td>브라우저가 계산</td>
            <td><code>auto</code></td>
        </tr>
        <tr>
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>cm</code>등 단위로 지정</td>
            <td><code>0</code></td>
        </tr>
        <tr>
            <td><code>%</code></td>
            <td>부모(위치 상의 부모(조상)) 요소의 가로 너비의 비율로 지정, 음수 값 허용</td>
            <td></td>
        </tr>
    </tbody>
</table>
<br>
<h3><code>sticky</code></h3>
<p>스크롤 영역 기준으로 배치</p>

```
.box {
    position: sticky;
    top: 0;
}
```
<p>IE 지원 불가</p>
<br>
<h3>요소 쌓임 순서(Stack order)</h3>
<p>요소가 쌓여 있는 순서를 통해<br>어떤 요소가 사용자와 가깝게 있는지(더 위에 쌓이는지)를 결정(Z축)</p>
<ol>
    <li><code>static</code>을 제외한 <code>position</code>속성의 값이 있을 경우 가장 위에 쌓임(값은 무관)</li>
    <li><code>position</code>이 모두 존재한다면 <code>z-index</code>속성의 숫자 값이 높을 수록 위에 쌓임</li>
    <li><code>position</code>속성의 값이 있고, <code>z-index</code>속성의 숫자 값이 같다면,<br>'HTML'의 마지막 코드일 수록 위에 쌓임(나중에 작성한 코드(요소))</li>
</ol>
<p>position > z-index > HTML마지막코드</p>

<h3><code>display</code> 수정</h3>
<p><code>absolute</code>,<code>fixed</code>속성 값이 적용된 요소는 <code>display</code>속성의 값이 대부분 <code>block</code>으로 수정됨</p>
<table>
    <thead>
        <tr>
            <td>지정 값</td>
            <td>변화 값</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>inline</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>inline-block</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>inline-table</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-row</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-row-group</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-column</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-column-group</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-cell</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-caption</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-header-group</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>table-footer-group</code></td>
            <td><code>block</code></td>
        </tr>
        <tr>
            <td><code>flex</code> </td>
            <td><code>flex</code>/<code>position</code>속성 효과 없음</td>
        </tr>
        <tr>
            <td><code>inline-flex</code></td>
            <td><code>inline-flex</code>/<code>position</code>속성 효과없음</td>
        </tr>
        <tr>
            <td>그 외</td>
            <td>변화없음</td>
        </tr>
    </tbody>
</table>