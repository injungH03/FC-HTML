<h3><code>width</code></h3>
<p>요소의 가로 너비를 지정</p>
<br>
<h3>속성 값</h3>
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
            <td><code>auto</code></td>
            <td><code>브라우저가 너비를 계산</code></td>
            <td><code>auto</code></td>
        </tr>
        <tr>
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>cm</code> 등 단위로 지정</td>
            <td></td>
        </tr>
    </tbody>
</table>
<br>
<h3><code>height</code></h3>
<p>요소의 세로 너비를 지정</p>
<br>
<h3>속성 값</h3>
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
            <td><code>auto</code></td>
            <td><code>브라우저가 너비를 계산</code></td>
            <td><code>auto</code></td>
        </tr>
        <tr>
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>cm</code> 등 단위로 지정</td>
            <td></td>
        </tr>
    </tbody>
</table>
<br>

```html
<span>Text text</span>
```
```css
    div {
        width: auto; /* div 100% 에서 출발 */
        height: auto; /* div 0 에서 출발 */
    }
    span {
        width: auto; /* div 0 에서 출발 */
        height: auto; /* div 0 에서 출발 */
    }
```
<br>
<h3><code>max-width</code></h3>
<p>요소의 최대 가로 너비를 지정</p>
<h3>속성 값</h3>
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
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>%</code> 등 단위로 지정</td>
            <td><code>none</code></td>
        </tr>
        <tr>
            <td><code>auto</code></td>
            <td>브라우저가 너비를 계산</td>
            <td></td>
        </tr>
    </tbody>
</table>
<br>
<h3><code>min-width</code></h3>
<p>요소의 최소 가로 너비를 지정</p>
<h3>속성 값</h3>
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
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>%</code> 등 단위로 지정</td>
            <td><code>0</code></td>
        </tr>
        <tr>
            <td><code>auto</code></td>
            <td>브라우저가 너비를 계산</td>
            <td></td>
        </tr>
    </tbody>
</table>
<br>
<h3><code>max-height</code></h3>
<p>요소의 최대 세로 너비를 지정</p>
<br>
<h3><code>min-height</code></h3>
<p>요소의 최소 가로 너비를 지정</p>
<h3>속성 값</h3>
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
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>%</code> 등 단위로 지정</td>
            <td><code>0</code></td>
        </tr>
        <tr>
            <td><code>auto</code></td>
            <td>브라우저가 너비를 계산</td>
            <td></td>
        </tr>
    </tbody>
</table>
<br>
<h3><code>margin</code></h3>
<p>요소의 '외부(바깥) 여백'을 지정 <code>단축</code><br>
음수 값(Negative Values)을 사용할 수 있습니다.
</p>
<br>
<h3>속성 값</h3>
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
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>cm</code> 등 단위로 지정</td>
            <td><code>0</code></td>
        </tr>
        <tr>
            <td><code>auto</code></td>
            <td>브라우저가 너비를 계산</td>
            <td></td>
        </tr>
        <tr>
            <td><code>%</code></td>
            <td>부모 요소의 너비에 대한 비율로 지정</td>
            <td></td>
        </tr>
    </tbody>
</table>

```html
<div class="parent">
    <div class="cild"></div>
</div>
```
```css
    .parent {
        width: 400px;
        height: 200px;
        border: 4px solid red;
    }
    .child {
        width: 100px;
        height: 200px;
        border: 4px solid red;
        margin: 50%;
    }
```

<h3>사용법</h3>

```
margin: 위 우 아래 좌; <!-- 시계 방향 -->
margin: 위 [좌,우] 아래; 
margin: [위,아래] [좌,우];
margin: [위,아래,좌,우];
```
```css
.box {
    margin: 10px 20px 30px 40px; <!-- 시계 방향 -->
    margin: 10px 20px 40px;
    margin: 10px 40px;
    margin: 10px;
}
```
<br>
<h3><code>margin-top</code></h3>
<p>요소의 '외부(바깥) <strong>위쪽</strong> 여백'을 지정 <code>개별</code></p>
<br>
<h3><code>margin-bottom</code></h3>
<p>요소의 '외부(바깥) <strong>아래쪽</strong> 여백'을 지정 <code>개별</code></p>
<br>
<h3><code>margin-left</code></h3>
<p>요소의 '외부(바깥) <strong>왼쪽</strong> 여백'을 지정 <code>개별</code></p>
<br>
<h3><code>margin-right</code></h3>
<p>요소의 '외부(바깥) <strong>오른쪽</strong> 여백'을 지정 <code>개별</code></p>

```css
.box1 {
    margin: 10px 20px 30px 40px; /* 단축속성 */
}
.box2 {
    /* 개별속성 */
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 40px;
}
```
<br>
<h3>마진 중복(병합,Collapse)</h3>
<p>마진의 특정 값들이 '중복'되어 합쳐지는 현상</p>
<ol>
    <li>형제 요소들의 <code>margin-top</code>과 <code>margin-bottom</code>이 만났을 때</li>
    <li>부모 요소의 <code>margin-top</code>과 자식 요소의 <code>margin-top</code>이 만났을 때</li>
    <li>부모 요소의 <code>margin-bottom</code>과 자식 요소의 <code>margin-bottom</code>이 만났을 때</li>
</ol>
<p>'마진 중복'은 버그(오류)가 아닙니다. 현상을 우회하거나 응용할 수 있습니다.</p>

<h4>마진 중복 계산법</h4>
<p>마진 중복 현상이 발생시, 중복 값을 계산하는 방법</p>
<table>
    <thead>
        <tr>
            <td>조건</td>
            <td>요소A 마진</td>
            <td>요소B 마진</td>
            <td>계산법</td>
            <td>중복 값</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>둘 다 양수</td>
            <td><code>30px</code></td>
            <td><code>10px</code></td>
            <td>더 큰 값으로 중복</td>
            <td><code>30px</code></td>
        </tr>
        <tr>
            <td>둘 다 음수</td>
            <td><code>-30px</code></td>
            <td><code>-10px</code></td>
            <td>더 작은 값으로 중복</td>
            <td><code>-30px</code></td>
        </tr>
        <tr>
            <td>각각 양수와 음수</td>
            <td><code>-30px</code></td>
            <td><code>10px</code></td>
            <td><code>-30</code>+<code>10</code>=<code>-20px</code></td>
            <td><code>-20px</code></td>
        </tr>
    </tbody>
</table>

***

<h3><code>padding</code></h3>
<p>요소의'내부(안) 여백'을 지정 <code>단축</code></p>
<br>
<h3>속성 값</h3>
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
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>cm</code> 등 단위로 지정</td>
            <td><code>0</code></td>
        </tr>
        <tr>
            <td><code>%</code></td>
            <td>부모 요소의 너비에 대한 비율로 지정</td>
            <td></td>
        </tr>
    </tbody>
</table>
<h3>사용법</h3>

```
margin: 위 우 아래 좌; <!-- 시계 방향 -->
margin: 위 [좌,우] 아래; 
margin: [위,아래] [좌,우];
margin: [위,아래,좌,우];
```
```css
.box {
    margin: 10px 20px 30px 40px; <!-- 시계 방향 -->
    margin: 10px 20px 40px;
    margin: 10px 40px;
    margin: 10px;
}
```
<br>
<h3><code>padding-top</code></h3>
<p>요소의 '내부(안) <strong>위쪽</strong> 여백'을 지정 <code>개별</code></p>
<br>
<h3><code>padding-bottom</code></h3>
<p>요소의 '내부(안) <strong>아래쪽</strong> 여백'을 지정 <code>개별</code></p>
<br>
<h3><code>padding-left</code></h3>
<p>요소의 '내부(안) <strong>왼쪽</strong> 여백'을 지정 <code>개별</code></p>
<br>
<h3><code>padding-right</code></h3>
<p>요소의 '내부(안) <strong>오른쪽</strong> 여백'을 지정 <code>개별</code></p>

<h3>사용법</h3>

```css
.box1 {
    padding: 10px 20px 30px 40px; /* 단축속성 */
}
.box2 {
    /* 개별속성 */
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
}
```

<h3>크기 증가</h3>
<p>추가된 <code>padding</code> 값만큼 요소의 크기가 커지는 현상</p>
<br>
<h3>크기가 커지지 않도록 직접! 계산</h3>
<>
    /* 100 x 100(px) 크기의 요소 만들기 */
    .box {
        width: 60px; /* +40px */
        height: 80px; /* +20px */
        background: red;
        padding: 10px 20px;
    }
</>
<p><code>padding</code>이 추가된 값만큼 <code>width</code>와 <code>height</code> 값을 다시 계산합니다.</p>

<h3>크기가 커지지 않도록 자동! 계산</h3>

```
    /* 100 x 100(px) 크기의 요소 만들기 */
    .box {
        width: 100px; 
        height: 100px; 
        background: red;
        padding: 10px 20px;
        box-sizing: border-box;
    }
```
<p>직접 계산하지 않고 <code>box-sizing: border-box;</code>를 추가합니다.</p>
<br>

<h3><code>border</code></h3>
<p>요소의 '테두리 선'을 지정 <code>단축</code></p>
<br>
<h3>속성 값</h3>
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
            <td><code>border-width</code></td>
            <td>선의 두께(너비)</td>
            <td><code>medium</code></td>
        </tr>
        <tr>
            <td><code>border-style</code></td>
            <td>선의 종류</td>
            <td>none</td>
        </tr>
        <tr>
            <td><code>border-color</code></td>
            <td>선의 색상</td>
            <td>black</td>
        </tr>
    </tbody>
</table>
<h3>사용법</h3>

```
border: 두께 종류 색상;
```
```css
.box {
    border: 1px solid red;
}
```
<br>
<h3><code>border-width</code></h3>
<p>선의 두께(너비)를 지정 <code>단축</code><code>개별</code></p>
<h3>속성 값</h3>
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
            <td><code>medium</code></td>
            <td>중간 두께</td>
            <td><code>medium</code></td>
        </tr>
        <tr>
            <td><code>thin</code></td>
            <td>얇은 두께</td>
            <td></td>
        </tr>
        <tr>
            <td><code>thick</code></td>
            <td>두꺼운 두께</td>
            <td></td>
        </tr>
        <tr>
            <td><code>단위</code></td>
            <td><code>px</code>,<code>em</code>,<code>cm</code>등 단위로 지정</td>
            <td></td>
        </tr>
    </tbody>
</table>
<h3>사용법</h3>

```
border-width: 위 우 아래 좌; <!-- 시계 방향 -->
border-width: 위 [좌,우] 아래; 
border-width: [위,아래] [좌,우];
border-width: [위,아래,좌,우];
```
```css
.box {
    border-width: 10px 20px 30px 40px; <!-- 시계 방향 -->
    border-width: 10px 20px 40px;
    border-width: 10px 40px;
    border-width: 10px;
}
```
<br>
<h3><code>border-style</code></h3>
<p>선의 종류를 지정 <code>단축</code><code>개별</code></p>
<h3>속성 값</h3>
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
            <td><code>none</code></td>
            <td>선 없음</td>
            <td><code>none</code></td>
        </tr>
        <tr>
            <td><code>hidden</code></td>
            <td>선 없음과 동일(<code>table</code>요소에서 사용)</td>
            <td></td>
        </tr>
        <tr>
            <td><code>solid</code></td>
            <td>실선(일반선)</td>
            <td></td>
        </tr>
        <tr>
            <td><code>dotted</code></td>
            <td>점선</td>
            <td></td>
        </tr>
        <tr>
            <td><code>dashed</code></td>
            <td>파선</td>
            <td></td>
        </tr>
        <tr>
            <td><code>double</code></td>
            <td>두 줄선</td>
            <td></td>
        </tr>
        <tr>
            <td><code>groove</code></td>
            <td>홈이 파여있는 모양(선)</td>
            <td></td>
        </tr>
        <tr>
            <td><code>ridge</code></td>
            <td>솟은 모양(선,<code>groove</code>의 반대</td>
            <td></td>
        </tr>
        <tr>
            <td><code>inset</code></td>
            <td>요소 전체가 들어간 모양(선)</td>
            <td></td>
        </tr>
        <tr>
            <td><code>outset</code></td>
            <td>요소 전체가 나온 모양(선)</td>
            <td></td>
        </tr>
    </tbody>
</table>

<h3>사용법</h3>

```
border-width: 위 우 아래 좌; <!-- 시계 방향 -->
border-width: 위 [좌,우] 아래; 
border-width: [위,아래] [좌,우];
border-width: [위,아래,좌,우];
```
```css
.box {
    border-width: solid dotted double inset; <!-- 시계 방향 -->
    border-width: solid dotted inset;
    border-width: solid inset;
    border-width: solid;
}
```
<br>
<h3><code>border-color</code></h3>
<p>선의 색상을 지정 <code>단축</code><code>개별</code></p>
<h3>속성 값</h3>
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
            <td>색상</td>
            <td>선의 색상을 지정</td>
            <td><code>black</code></td>
        </tr>
        <tr>
            <td><code>transparent</code></td>
            <td>투명한 선(요소의 배경색이 보임)</td>
            <td></td>
        </tr>
    </tbody>
</table>
<br>
<h3>기타 속성1</h3>
<table>
    <thead>
        <tr>
            <th>속성</th>
            <th>의미</th>
            <th>사용 값</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>border-top</code></td>
            <td>위쪽 선</td>
            <td><code>두께 종류 색상</code></td>
        </tr>
        <tr>
            <td><code>border-top-width</code></td>
            <td>위쪽 선의 두께</td>
            <td><code>두께</code></td>
        </tr>
        <tr>
            <td><code>border-top-style</code></td>
            <td>위쪽 선의 종류</td>
            <td><code>종류</code></td>
        </tr>
        <tr>
            <td><code>border-top-color</code></td>
            <td>위쪽 선의 색상</td>
            <td><code>색상</code></td>
        </tr>
        <tr>
            <td><code>border-bottom</code></td>
            <td>아래쪽 선</td>
            <td><code>두께 종류 색상</code></td>
        </tr>
        <tr>
            <td><code>border-bottom-width</code></td>
            <td>아래쪽 선의 두께</td>
            <td><code>두께</code></td>
        </tr>
        <tr>
            <td><code>border-bottom-style</code></td>
            <td>아래쪽 선의 종류</td>
            <td><code>종류</code></td>
        </tr>
        <tr>
            <td><code>border-top-color</code></td>
            <td>아래쪽 선의 색상</td>
            <td><code>색상</code></td>
        </tr>
    </tbody>
</table>
<h3>기타 속성2</h3>
<table>
    <thead>
        <tr>
            <th>속성</th>
            <th>의미</th>
            <th>사용 값</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>border-left</code></td>
            <td>왼쪽 선</td>
            <td><code>두께 종류 색상</code></td>
        </tr>
        <tr>
            <td><code>border-left-width</code></td>
            <td>왼쪽 선의 두께</td>
            <td><code>두께</code></td>
        </tr>
        <tr>
            <td><code>border-left-style</code></td>
            <td>왼쪽 선의 종류</td>
            <td><code>종류</code></td>
        </tr>
        <tr>
            <td><code>border-left-color</code></td>
            <td>왼쪽 선의 색상</td>
            <td><code>색상</code></td>
        </tr>
        <tr>
            <td><code>border-right</code></td>
            <td>오른쪽 선</td>
            <td><code>두께 종류 색상</code></td>
        </tr>
        <tr>
            <td><code>border-right-width</code></td>
            <td>오른쪽 선의 두께</td>
            <td><code>두께</code></td>
        </tr>
        <tr>
            <td><code>border-right-style</code></td>
            <td>오른쪽 선의 종류</td>
            <td><code>종류</code></td>
        </tr>
        <tr>
            <td><code>border-right-color</code></td>
            <td>오른쪽 선의 색상</td>
            <td><code>색상</code></td>
        </tr>
    </tbody>
</table>

<h3>크기가 커지지 않도록 자동! 계산</h3>

```css
    .box {
        width: 100px;
        height: 100px;
        background: orange;
        border: 1px solid;
        box-sizing: border-box; /* 자동 계산 */
    }
```

***

<h3><code>box-sizing</code></h3>
<p>요소의 크기 계산 기준을 지정</p>
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
            <td><code>content-<br>box</code></td>
            <td>너비(<code>width</code>,<code>height</code>)만으로 요소의 크기를 계산</td>
            <td><code>content-<br>box</code></td>
        </tr>
        <tr>
            <td><code>border-<br>box</code></td>
            <td>너비(<code>width</code>,<code>height</code>)에 안쪿 여백(<code>padding</code>)과 테두리 선(<code>border</code>)<br>
            를 포함하여 요소의 크기를 계산</td>
            <td></td>
        </tr>
    </tbody>
</table>
<br>
<h3><code>display</code></h3>
<p>요소의 박스 타입(유형)을 설정</p>
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
            <td><code>block</code></td>
            <td>블록 요소(<code>&ltdiv&gt</code>등)</td>
            <td></td>
        </tr>
        <tr>
            <td><code>inline</code></td>
            <td>인라인 요소(<code>&ltspan&gt</code>등)</td>
            <td></td>
        </tr>
        <tr>
            <td><code>inline-block</code></td>
            <td>인라인-블록 요소(<code>&ltinput&gt</code>등)</td>
            <td></td>
        </tr>
        <tr>
            <td><code>기타</code></td>
            <td><code>table</code>,<code>table-cell</code>,<code>flex</code>등</td>
            <td></td>
        </tr>
        <tr>
            <td><code>none</code></td>
            <td>요소의 박스 타입이 없음(요소가 사라짐)</td>
            <td></td>
        </tr>
    </tbody>
</table>
<br>
<h3><code>overflow</code></h3>
<p>요소의 크기 이상으로 내용(자식요소)이 넘쳤을 때,<br>
내용의 보여짐을 제어 <code>단축</code></p>
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
            <td><code>visible</code></td>
            <td>넘친 부분을 자르지 않고 그대로 보여줌</td>
            <td><code>visible</code></td>
        </tr>
        <tr>
            <td><code>hidden</code></td>
            <td>넘친 부분을 잘라내고, 보이지 않도록 함</td>
            <td></td>
        </tr>
        <tr>
            <td><code>scroll</code></td>
            <td>넘친 부분을 잘라내고, 스크롤바를 이용하여 볼 수 있도록 함(강제)</td>
            <td></td>
        </tr>
        <tr>
            <td><code>auto</code></td>
            <td>넘친 부분이 있는 경우만 잘라내고, 스크롤바를 이용하여 볼 수 있도록 함(자동)</td>
            <td></td>
        </tr>
    </tbody> 
</table>
<br>
<h3><code>opacity</code></h3>
<p>요소의 투명도를 지정</p>
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
            <td>숫자</td>
            <td><code>0</code>부터<code>1</code>사이의 소수점과 숫자</td>
            <td><code>1</code></td>
        </tr>
    </tbody>
</table>
<h3>사용법</h3>

```
opacity: 투명도;
```
```css
.half {
    opacity: 0.5; /* 50% 투명도, 반투명 */
}
.transparent {
    opacity: 0; /* 0% 투명도, 투명 */
}
.box {
    opacity: .75; /* 75% 투명도, 반투명 */
}
```