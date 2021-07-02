<h3><code>background</code></h3>
<p>요소의 배경을 설정 <code>단축</code></p>
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
            <td><code>background-color</code></td>
            <td>배경 색상</td>
            <td><code>transparent</code></td>
        </tr>
        <tr>
            <td><code>background-image</code></td>
            <td>하나 이상의 배경 이미지</td>
            <td><code>none</code></td>
        </tr>
        <tr>
            <td><code>background-repeat</code></td>
            <td>배경 이미지의 반복</td>
            <td><code>repeat</code></td>
        </tr>
        <tr>
            <td><code>background-position</code></td>
            <td>배경 이미지의 위치</td>
            <td><code>0 0</code></td>
        </tr>
        <tr>
            <td><code>background-attachment</code></td>
            <td>배경 이미지의 스크롤 여부(특성)</td>
            <td><code>scroll</code></td>
        </tr>
    </tbody>
</table>
<h3>사용법</h3>

```
background: 색상 이미지경로 반복 위치 스크롤특성;
```
```css
.box1 {
    background: red url("../img/image.jpg") no-repeat left top scroll;
    /* 색상 이미지경로 반복 위치 스크롤특성 */
}
.box2 {
    background: url("../img/image.jpg") no-repeat right 100px;
    /* 이미지경로 반복 위치 */
}
.box3 {
    background: red;
    /* 색상 */
}
```
<h3><code>background-color</code></h3>
<p>요소의 배경 색상을 지정 <code>개별</code></p>
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
            <td>색상</td>
            <td>요소의 배경 색상</td>
            <td></td>
        </tr>
        <tr>
            <td><code>transparent</code></td>
            <td>투명</td>
            <td><code>transparent</code></td>
        </tr>
    </tbody>
</table>
<h3><code>background-image</code></h3>
<p>요소의 배경에 하나 이상의 이미지를 삽입 <code>개별</code></p>
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
            <td>이미지 없음</td>
            <td><code>none</code></td>
        </tr>
        <tr>
            <td><code>url("경로")</code></td>
            <td>이미지 경로(URL)</td>
            <td></td>
        </tr>
    </tbody>
</table>
<h3>사용법</h3>

```
background-image: url("경로");
```
```css
.box {
    background-image: url("../img/image.jpg");
    width: 120px;
    height: 80px;
}
```
<p>배경 이미지 삽입 시, 요소의 크기가 설정되어 있어야 배경 이미지가 보일 수 있습니다.</p>

```css
.box1 {
    /* 개별속성 */
    background-image: url("../img/i1.jpg"),
        url("../img/i2.jpg"),
        url("../img/i3.jpg");
}
.box2 {
    /* 단축속성 */
    background-image: url("../img/i1.jpg") no-repeat,
        url("../img/i2.jpg") no-repeat 100px 50px,
        url("../img/i3.jpg") repeat-x;
}
```
<p>하나 이상의 배경 이미지를 삽입할 경우 <code>,</code>로 구분합니다. 먼저 작성된 이미지가 더 위에 쌓입니다.<br>
이런 '다중 배경 이미지'는 IE8 이하 버전에 사용할 수 없습니다.</p>
<h3><code>background-repeat</code></h3>
<p>배경 이미지의 반복을 설정 <code>개별</code></p>
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
            <td><code>repeat</code></td>
            <td>배경 이미지를 수직,수평으로 반복</td>
            <td><code>repeat</code></td>
        </tr>
        <tr>
            <td><code>repeat-x</code></td>
            <td>배경 이미지를 수평으로 반복</td>
            <td></td>
        </tr>
        <tr>
            <td><code>repeat-y</code></td>
            <td>배경 이미지를 수직으로 반복</td>
            <td></td>
        </tr>
        <tr>
            <td><code>no-repeat</code></td>
            <td>반복 없음</td>
            <td></td>
        </tr>
    </tbody>
</table>
<h3><code>background-position</code></h3>
<p>배경 이미지의 위치를 설정 <code>개별</code></p>
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
            <td><code>%</code></td>
            <td>왼쪽 상단 모서리는 <code>0% 0%</code>,<br>오른쪽 하단 모서리는 <code>100% 100%</code></td>
            <td><code>0% 0%</code></td>
        </tr>
        <tr>
            <td>방향</td>
            <td>방향을 입력하여 위치 설정<br><code>top</code>,<code>bottom</code>,<code>left</code>,<code>right</code>,<code>center</code></td>
            <td></td>
        </tr>
        <tr>
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>cm</code>등 단위로 지정</td>
            <td></td>
        </tr>
    </tbody>
</table>
<h3>사용법</h3>
<h4>값이 방향일 경우</h4>

```
background-position: 방향1 방향2;
```
<h4>값이 단위(<code>%</code>,<code>px</code> 등)일 경우</h4>

```
background-position: X축 Y축;
```
<h3><code>background-attachment</code></h3>
<p>요소가 스크롤될 때 배경 이미지의 스크롤 여부(특성) 설정 <code>개별</code></p>
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
            <td><code>scroll</code></td>
            <td>배경 이미지가 요소를 따라서 같이 스크롤 됨</td>
            <td><code>scroll</code></td>
        </tr>
        <tr>
            <td><code>fixed</code></td>
            <td>배경 이미지가 뷰포트(Viewport)에 고정되어, 요소와 같이 스크롤되지 않음</td>
            <td></td>
        </tr>
        <tr>
            <td><code>local</code></td>
            <td>요소 내 스크롤 시 배경 이미지가 같이 스크롤 됨</td>
            <td></td>
        </tr>
    </tbody>
</table>
<h3><code>background-size</code></h3>
<p>배경 이미지의 크기를 지정</p>
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
            <td><code>auto</code></td>
            <td>배경 이미지가 원래의 크기로 표시됨</td>
            <td><code>auto</code></td>
        </tr>
        <tr>
            <td>단위</td>
            <td>- <code>px</code>,<code>em</code>,<code>%</code> 등 단위로 지정<br>
                - <code>width height</code> 형태로 입력 가능(E.g <code>120px 370px</code>)<br>
                - <code>width</code>만 입력하면 비율에 맞게 지정됨(E.g <code>120px</code>)
            </td>
            <td></td>
        </tr>
        <tr>
            <td><code>cover</code></td>
            <td>- 배경 이미지의 크기 비율을 유지하며,요소의 더 넓은 너비에 맞춰짐<br>
                - 이미지가 잘릴 수 있음
            </td>
            <td></td>
        </tr>
        <tr>
            <td><code>contain</code></td>
            <td>- 배경 이미지의 크기 비율을 유지하며, 요소의 더 짧은 너비에 맞춰짐<br>
                - 이미지가 잘리지 않음
            </td>
            <td></td>
        </tr>
    </tbody>
</table>
