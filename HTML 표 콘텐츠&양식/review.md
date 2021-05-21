표 콘텐츠

```
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
```
<table>, <tr>, <th>, <td>
데이터 표(<table>)의 행(줄 / <tr>)과 열(칸, 셀(Cell) / <th>, <td>)을 생성.
(Table Row, Table Header, Table Data)

table { display: table; }
tr { display: table-row; }
th, td { display: table-cell; }
```

   <table>
        <!-- 3행 2열 -->
        <tr>
            <!-- th header 를 의미 -->
            <th>타입</th>
            <th>값</th>
        </tr>
        <tr>
            <!-- td data 를 의미 -->
            <td>알파벳</td>
            <td>A</td>
        </tr>
        <tr>
            <td>숫자</td>
            <td>7</td>
        </tr>
    </table>




```
<th>
‘머리글 칸’을 지정
```
<img src="./img(md)/th.png" width="650px" title="th img" alt="screenshot"></img>