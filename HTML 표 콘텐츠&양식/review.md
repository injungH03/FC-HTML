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