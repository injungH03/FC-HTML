<h3><code>font</code></h3>
<p>글자 관련 속성들을 지정 <code>단축</code></p>
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
            <td><code>font-style</code></td>
            <td>글자 기울기 지정</td>
            <td><code>normal</code></td>
        </tr>
        <tr>
            <td><code>font-weight</code></td>
            <td>글자 두께 지정</td>
            <td><code>normal</code></td>
        </tr>
        <tr>
            <td><code>font-size</code></td>
            <td>글자 크기 지정</td>
            <td><code>medium(16px)</code></td>
        </tr>
        <tr>
            <td><code>line-height</code></td>
            <td>줄 높이(줄 간격)지정</td>
            <td><code>normal(Reset.css 적용 시 1)</code></td>
        </tr>
        <tr>
            <td><code>font-family</code></td>
            <td>글꼴(서체) 지정</td>
            <td><code>운영체제(브라우저)에 따라 달라짐</code></td>
        </tr>
    </tbody>
</table>
<h3>사용법</h3>

```
font: 기울기 두께 크기 / 줄높이 글꼴;
```
```css
.box {
    font: italic bold 20px / 1.5 "Arial", sans-serif;
}
```
```css
.box {
    font: 30px / 1.5;   /* ERROR */
    font: bold;  /* ERROR */
    font: bold sans-serif;  /* ERROR */
    font: 30px / 1.5 sans-serif; 
    font: bold 30px sans-serif;
    font: italic 30px / 1.5 "Arial". sans-serif;
}
```
<p>단축 속성을 사용하려면 font-size와 font-family를 필수로 입력해야 합니다.</p>
<br>
<h3><code>font-style</code></h3>
<p>글자 스타일(기울기)을 지정<code>개별</code></p>
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
            <td><code>normal</code></td>
            <td>스타일 없음</td>
            <td><code>normal</code></td>
        </tr>
        <tr>
            <td><code>italic</code></td>
            <td>이텔릭체(활자)</td>
            <td></td>
        </tr>
        <tr>
            <td><code>oblique</code></td>
            <td>기울어진 글자</td>
            <td></td>
        </tr>
    </tbody>
</table>
<br>
<h3><code>font-weight</code></h3>
<p>글자의 두께(가중치)를 지정<code>개별</code></p>
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
            <td><code>normal</code></td>
            <td>기본 글자 두께, <code>400</code>과 동일</td>
            <td><code>normal(400)</code></td>
        </tr>
        <tr>
            <td><code>bold</code></td>
            <td>글자 두껍게, <code>700</code>과 동일</td>
            <td></td>
        </tr>
        <tr>
            <td><code>bolder</code></td>
            <td>부모(상위) 요소보다 더 두껍게(<code>bold</code>보다 두껍다는 개념이 아님)</td>
            <td></td>
        </tr>
        <tr>
            <td><code>lighter</code></td>
            <td>부모(상위) 요소보다 더 얇게</td>
            <td></td>
        </tr>
        <tr>
            <td><code>숫자</code></td>
            <td><code>100</code>부터 <code>900</code>까지의 100단위의 숫자 9개, <code>normal</code>과 <code>bold</code>이외의 <br>두께를 제공하는 글꼴(서체)을 위한 설정</td>
            <td></td>
        </tr>
    </tbody>
</table>

<h3>일반적인 두께의 이름</h3>
<p><code>font-weight</code>의 각 값은 일반적으로 다음과 같은 글꼴의 이름으로 표현됨</p>
<table>
    <thead>
        <tr>
            <td>값</td>
            <td>일반적인 두께 이름</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>100</code></td>
            <td>Thin(Hairline)</td>
        </tr>
        <tr>
            <td><code>200</code></td>
            <td>Extra Light(Ultra Light)</td>
        </tr>
        <tr>
            <td><code>300</code></td>
            <td>Light</td>
        </tr>
        <tr>
            <td><code>400</code></td>
            <td>Normal</td>
        </tr>
        <tr>
            <td><code>500</code></td>
            <td>Medium</td>
        </tr>
        <tr>
            <td><code>600</code></td>
            <td>Semi Bold(Demi Bold)</td>
        </tr>
        <tr>
            <td><code>700</code></td>
            <td>Bold</td>
        </tr>
        <tr>
            <td><code>800</code></td>
            <td>Extra Bold(Ultra Bold)</td>
        </tr>
        <tr>
            <td><code>900</code></td>
            <td>Black(Heavy)</td>
        </tr>
    </tbody>
</table>
<h3>상대적 두께</h3>
<p><code>bolder</code><code>lighter</code>를 사용할 경우<br>
부모(상위) 요소에게 상속받은 값에서 다음과 같이 계산됨</p>
<table>
    <thead>
        <tr>
            <td>상속 값</td>
            <td><code>bolder</code></td>
            <td><code>lighter</code></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>100</code></td>
            <td><code>400</code></td>
            <td><code>100</code></td>
        </tr>
        <tr>
            <td><code>200</code></td>
            <td><code>400</code></td>
            <td><code>100</code></td>
        </tr>
        <tr>
            <td><code>300</code></td>
            <td><code>400</code></td>
            <td><code>100</code></td>
        </tr>
        <tr>
            <td><code>400</code></td>
            <td><code>700</code></td>
            <td><code>100</code></td>
        </tr>
        <tr>
            <td><code>500</code></td>
            <td><code>700</code></td>
            <td><code>100</code></td>
        </tr>
        <tr>
            <td><code>600</code></td>
            <td><code>900</code></td>
            <td><code>400</code></td>
        </tr>
        <tr>
            <td><code>700</code></td>
            <td><code>900</code></td>
            <td><code>400</code></td>
        </tr>
        <tr>
            <td><code>800</code></td>
            <td><code>900</code></td>
            <td><code>700</code></td>
        </tr>
        <tr>
            <td><code>900</code></td>
            <td><code>900</code></td>
            <td><code>700</code></td>
        </tr>
    </tbody>
</table>
<h3>숫자 값과 두께의 불일치</h3>
<p>글꼴(서체)의 정확한 두께를 숫자로 표현할 수 없는 경우에만..</p>
<ol>
    <li><code>400</code>이 주어지면 <code>500</code>을 사용하고, <code>500</code>이 불가하면 <code>500</code>미만의 다른 두께 사용</li>
    <li><code>500</code>이 주어지면 <code>400</code>을 사용하고, <code>400</code>이 불가하면 <code>400</code>미만의 다른 두께 사용</li>
    <li><code>400</code>미만 값이 주어지면, 가장 가까운 숫자의 얇은 두께 사용</li>
    <li><code>500</code>초과 값이 주어지면, 가장 가까운 숫자의 두꺼운 두께를 사용</li>
</ol>
<p>예를들면, <code>normal</code> 과 <code>bold</code>만 지원하는 글꼴일 경우,<br>
<code>100</code>~<code>500</code>은 <code>normal</code>을 의미하고, <code>600</code>~<code>900</code>은 <code>bold</code>를 의미합니다.</p>
<br>

<h3><code>font-size</code></h3>
<p>글자의 크기를 지정 <code>개별</code></p>
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
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>cm</code> 등 단위로 지정</td>
            <td><code>16px</code></td>
        </tr>
        <tr>
            <td><code>%</code></td>
            <td>부모(상위)요소의 비율로 지정</td>
            <td></td>
        </tr>
        <tr>
            <td><code>xx-small</code></td>
            <td>가장 작은 크기</td>
            <td></td>
        </tr>
        <tr>
            <td><code>x-small</code></td>
            <td>더 작은 크기</td>
            <td></td>
        </tr>
        <tr>
            <td><code>small</code></td>
            <td>작은 크기</td>
            <td></td>
        </tr>
        <tr>
            <td><code>medium</code></td>
            <td>중간 크기</td>
            <td><code>medium</code></td>
        </tr>
        <tr>
            <td><code>large</code></td>
            <td>큰 크기</td>
            <td></td>
        </tr>
        <tr>
            <td><code>x-large</code></td>
            <td>더 큰 크기</td>
            <td></td>
        </tr>
        <tr>
            <td><code>xx-large</code></td>
            <td>가장 큰 크기</td>
            <td></td>
        </tr>
        <tr>
            <td><code>smaller</code></td>
            <td>부모(상위)요소보다 작은 크기</td>
            <td></td>
        </tr>
        <tr>
            <td><code>larger</code></td>
            <td>부모(상위)요소보다 큰 크기</td>
            <td></td>
        </tr>
    </tbody>
</table>
<br>
<h3><code>line-height</code></h3>
<p>줄 높이(줄 간격) 지정<code>개별</code></p>
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
            <td><code>normal</code></td>
            <td>브라우저의 기본 정의를 사용(<code>1</code>~<code>1.4</code>)</td>
            <td><code>normal</code></td>
        </tr>
        <tr>
            <td>숫자</td>
            <td>요소 자체 글꼴 크기의 배수로 지정</td>
            <td></td>
        </tr>
        <tr>
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>cm</code>등 단위로 지정</td>
            <td></td>
        </tr>
        <tr>
            <td><code>%</code></td>
            <td>요소 자체 글꼴 크기의 비율로 지정</td>
            <td></td>
        </tr>
    </tbody>
</table>
<br>
<h3><code>font-family</code></h3>
<p>글꼴(서체) 지정<code>개별</code></p>
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
            <td>글꼴이름</td>
            <td>글꼴(서체)후보 목록을 지정</td>
            <td></td>
        </tr>
        <tr>
            <td><code>serif</code></td>
            <td>글꼴 계열 이름을 지정</td>
            <td></td>
        </tr>
        <tr>
            <td><code>sans-serif</code></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><code>monospace</code></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><code>cursive</code></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td><code>fantasy</code></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
<h3>사용법</h3>

```
font-family: [글꼴후보1, 글꼴후보2...], 글꼴계열;
```
```css
.box {
    font-family: Arial, "Open Sans", "돋움", dotum, sans-serif;
}
```
<p>글꼴 계열은 필수로 입력해야 합니다.</p>
<h3>글꼴 계열(Generic family)</h3>
<table>
    <thead>
        <tr>
            <td>계열</td>
            <td>의미</td>
            <td>예시</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>serif</code></td>
            <td>바탕체 계열</td>
            <!-- <td style="font-family: serif">Hello World!</td> -->
        </tr>
        <tr>
            <td><code>sans-serif</code></td>
            <td>고딕체 계열</td>
            <!-- <td style="font-family: sans-serif">Hello World!</td> -->
        </tr>
        <tr>
            <td><code>monospace</code></td>
            <td>고정너비(가로폭이 동등한) 글꼴 계열</td>
            <!-- <td style="font-family: monospace">Hello World!</td> -->
        </tr>
        <tr>
            <td><code>cursive</code></td>
            <td>필기체 계열</td>
            <!-- <td style="font-family: cursive">Hello World!</td> -->
        </tr>
        <tr>
            <td><code>fantasy</code></td>
            <td>장식(재미있는 문자 표현을 포함하는)글꼴 계열</td>
            <!-- <td style="font-family: fantasy">Hello World!</td> -->
        </tr>
    </tbody>
</table>
<br>
<h3>문자(Text)관련 속성</h3>
<br>
<h3><code>color</code></h3>
<p>문자의 색상을 지정</p>
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
            <td>문자의 색상을 지정</td>
            <td><code>rgb(0,0,0)</code></td>
        </tr>
    </tbody>
</table>
<h3>색상 표현</h3>
<table>
    <thead>
        <tr>
            <td>표현</td>
            <td>의미</td>
            <td>예시</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>색상이름</td>
            <td>브라우저에서 제공하는 색상의 이름</td>
            <td><code>red,blue</code></td>
        </tr>
        <tr>
            <td>Hex 색상코드</td>
            <td>16진수 색상(Hexadecimal Colors)</td>
            <td><code>#000000</code></td>
        </tr>
        <tr>
            <td>RGB</td>
            <td>빛의 삼원색</td>
            <td><code>rgb(255, 255, 255)</code></td>
        </tr>
        <tr>
            <td>RGBA</td>
            <td>빛의 삼원색, 투명도</td>
            <td><code>rgba(255, 0, 0, .5)</code></td>
        </tr>
        <tr>
            <td>HSL</td>
            <td>색상,채도,명도</td>
            <td><code>hsl(120, 100%, 50%)</code></td>
        </tr>
        <tr>
            <td>HSLA</td>
            <td>색상,채도,명도,투명도</td>
            <td><code>hsla(120, 100%, 50%, .3)</code></td>
        </tr>
    </tbody>
</table>
<p>위 표는 색상을 이용하는 모든 속성(property)의 값으로 사용할 수 있습니다.<br>
<code>RGBA</code>:Red,Green,Blue,Alpha channel<br>
<code>HSLA</code>:Hue,Saturation,Lightness,Alpha channel</p>
<br>
<h3><code>text-align</code></h3>
<p>문자 정렬 방식을 지정</p>
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
            <td><code>left</code></td>
            <td>왼쪽 정렬</td>
            <td></td>
        </tr>
        <tr>
            <td><code>right</code></td>
            <td>오른쪽 정렬</td>
            <td></td>
        </tr>
        <tr>
            <td>center</td>
            <td>가운데 정렬</td>
            <td></td>
        </tr>
        <tr>
            <td>justify</td>
            <td>양쪽 맞춤</td>
            <td></td>
        </tr>
    </tbody>
</table>
<p><code>direction</code> 속성(텍스트 방향 및 쓰기 방향 지정/ <code>ltr</code>,<code>rtl</code>)의 값에 의해서<br>
<code>text-align</code>속성의'기본 값'이 변경될 수 있습니다.<br>
일반적으로 <code>left</code>가 기본 값으로 사용됩니다.
</p>
<br>
<h3><code>text-decoration</code></h3>
<p>문자의 장식(line)을 설정</p>
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
            <td>선 없음</td>
            <td><code>none</code></td>
        </tr>
        <tr>
            <td><code>underlind</code></td>
            <td>밑줄을 지정</td>
            <td></td>
        </tr>
        <tr>
            <td><code>overline</code></td>
            <td>윗줄을 지정</td>
            <td></td>
        </tr>
        <tr>
            <td><code>line-through</code></td>
            <td>중앙 선(가로지르는)을 지정</td>
            <td></td>
        </tr>
    </tbody>
</table>
<br>
<h3><code>text-indent</code></h3>
<p>(첫번째 줄의)들여쓰기를 지정</p>
<p>음수 값(Negative Values)을 사용할 수 있습니다. <br>
음수 값을 사용하면 첫째 줄은 왼쪽으로 들여쓰기(내어쓰기) 됩니다.</p>
<br>
<h3><code>letter-spacing</code></h3>
<p>문자의 자간(글자 사이 간격)을 설정</p>
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
            <td><code>normal</code></td>
            <td>단어 사이의 일반 간격</td>
            <td><code>normal</code></td>
        </tr>
        <tr>
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>cm</code>등 단위로 지정</td>
            <td></td>
        </tr>
    </tbody>
</table>
<h3>word-spacing</h3>
<p>단어 사이(띄어쓰기)의 간격을 설정</p>
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
            <td><code>normal</code></td>
            <td>단어 사이의 일반 간격</td>
            <td><code>normal</code></td>
        </tr>
        <tr>
            <td>단위</td>
            <td><code>px</code>,<code>em</code>,<code>cm</code>등 단위로 지정</td>
            <td></td>
        </tr>
    </tbody>
</table>