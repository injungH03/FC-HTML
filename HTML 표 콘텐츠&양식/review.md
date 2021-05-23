표 콘텐츠

```HTML
<table>
  <caption>Fruits</caption>
  <colgroup>
    <col span="2" style="background-color: yellowgreen;">
    <col style="background-color: tomato;">
  </colgroup>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>F123A</td>
      <td>Apple</td>
      <td>$22</td>
    </tr>
    <tr>
      <td>F098B</td>
      <td>Banana</td>
      <td>$19</td>
    </tr>
  </tbody>
</table>
```

***

```
<table>, <tr>, <th>, <td>
데이터 표(<table>)의 행(줄 / <tr>)과 열(칸, 셀(Cell) / <th>, <td>)을 생성.
(Table Row, Table Header, Table Data)

table { display: table; }
tr { display: table-row; }
th, td { display: table-cell; }
```
```
<th>
‘머리글 칸’을 지정
```
<img src="./img(md)/th.png" width="650px" title="th img" alt="screenshot"></img>

***

```
<td>
‘일반 칸’을 지정
```
<table>
    <thead>
        <tr>
            <th>속성</th>
            <th>의미</th>
            <th>값</th>
            <th>기본값</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td>headers</td>
        <td>
            "관련된 하나 이상의 다른 머리글 칸" <code>id</code> " 속성 값"
        </td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>clospan</td>
        <td>확장하려는(병합) 열의 수</td>
        <td></td>
        <td>
            <code>1</code>
        </td>
    </tr>
    <tr>
        <td>rowspan</td>
        <td>확장하려는(병합) 열의 수</td>
        <td></td>
        <td>
            <code>1</code>
        </td>
    </tr>
    </tbody>
</table>

***

```
<caption>
표의 제목을 설정.

열리는 TABLE 태그 바로 다음에 작성해야 함.
<table> 당 하나의 <caption>만 사용 가능.

caption { display: table-caption; }
```

```HTML
<table>
    <caption>He-Man and Skeletor facts</caption>
    <tr>
        <td> </td>
        <th scope="col" class="heman">He-Man</th>
        <th scope="col" class="skeletor">Skeletor</th>
    </tr>
    <tr>
        <th scope="row">Role</th>
        <td>Hero</td>
        <td>Villain</td>
    </tr>
    <tr>
        <th scope="row">Weapon</th>
        <td>Power Sword</td>
        <td>Havoc Staff</td>
    </tr>
    <tr>
        <th scope="row">Dark secret</th>
        <td>Expert florist</td>
        <td>Cries at romcoms</td>
    </tr>
</table>
```

***

```
<colgroup>, <col />
표의 열들을 공통적으로 정의하는 컬럼(<col>)과 그의 집합(<colgroup>).
(Column, Column Group)

colgroup { display: table-column-group; }
col { display: table-column; }
```
<table>
    <thead>
        <tr>
            <th>속성</th>
            <th>의미</th>
            <th>값</th>
            <th>기본값</th>
        </tr>    
    <thead>
    <tbody>
        <tr>
            <td>span</td>
            <td>연속되는 열 수</td>
            <td>숫자(Number)</td>
            <td>
                <code>1</code>
            </td>
        </tr>
    <tbody>
</table>

***

<h2>
    <span> 
    <code>thead,tbody,tfoot</code>
    </span>
</h2>
