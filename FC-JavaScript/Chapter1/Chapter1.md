<h2>Expression</h2>
<p>값을 만들어내는 간단한 코드를 표현식이라고 한다.<br>
표현식은 값을 만들어내기 때문에 함수의 인자로 사용할 수 있다.
</p>

<h2>Statement</h2>
<ul>
  <li>하나 혹은 여러 개의 표션식이 모여 문장을 이룬다.</li>
  <li>모든 표현식은 문장이 될 수 있다.</li>
  <li>(보통) 문장의 끝에는 세미 콜론을 붙인다.</li>
  <li>한 줄에 문장이 하나인 경우에는 세미 콜론을 붙이지 않아도 문제가 없다.</li>
  <li>하지만, 관례적으로 붙인다.</li>
  <li>한 줄에 여러 문장을 적을 경우, 세미 콜론으로 문장을 구분해야 한다.</li>
  <li>마지막 문장은 세미 콜론을 붙이지 않아도 문제가 없다.</li>
  <li>마지막 문장의 결과가 반환됨.</li>
  <li>조건문 (if), 반복문 (for) 도 문장이다.</li>
  <li>이 경우에는 마자막 } 뒤에 세미콜론을 붙이지 않는다.</li>
</ul>

<h2>Keywords</h2>
<ul>
  <li>자바스크립트에서 특정한 목적을 위해 사용하는 단어</li>
  <li>이러한 키워드 들은 예약어(?)로 지정되어 있다.</li>
</ul>
<br>
<p>
<code>var</code> name = 'Mark' //<code>var</code> 라는 단어는 변수를 선언할 때 사용하는 키워드입니다.
</p>


<h2>Reserved Words</h2>
<p>프로그램을 작성할 때, 변수명, 함수명 등 이름으로 사용할 수 없는 단어</p>

<p>
<code>var return</code> = '변수명'; //<code>return</code>은 예약어라 변수명으로 사용할 수 없다.
</p>
<p><code>function</code> for() {} //<code>for</code> 는 예약어라 함수명으로 사용할 수 없다.
</p>


<h2>Reserved keywords</h2>
<p>이미 특정한 목적을 위해 사용하기 때문에 사용할 수 없는 예약어</p>

<h2>Future reserved keywords</h2>
<p>앞으로 특정한 목적을 위해 사용할 가능성이 있어서 사용할 수 없는 예약어</p>



<h2>식별자(Identifier)</h2>
<p>코드 내의 변수, 함수, 혹은 속성을 식별하는 문자열</p>
<p>
<code>var</code> = 'Mark'; 
</p>
<p>
<code>function</code> hello() {}
</p>
<p>
<code>var</code> person = {name: 'Mark', age: 37};
</p>

<p>대소문자를 구분한다.</p>
<p>
<code>var</code> myName = 'Mark';
</p>
<p>
<code>var</code> myname = 'Mark';
</p>

<ul>
  <li>
  '유니코드 문자','$','_','숫자(0-9)' 를 사용할 수 있지만, 숫자로 시작할 수는 없다.
  </li>
  <li>'예약어'는 사용할 수 없고, '공백 문자'도 사용할 수도 없다.</li>
  <li>프로그램에서 사용하는 변수나 함수의 이름을 짓는 것은 언제나 어려운 일이다.</li>
  <li>의미없는 이름은 사용하지 않고, 역할에 맞는 적절한 이름을 짓도록 노력해야 한다.</li>
</ul>

[JavaScript variable name validator](https://mothereff.in/js-variables)

***

<h2>변수(variable)와 상수(constant)</h2>

```JavaScript
// 5 와 10을 더해서,
// 3 으로 나누어 나머지가 0이면, '야호3' 를 출력하고,
// 5 로 나누어 나머지가 0이면, '야호5' 를 출력합니다.

if ((5 + 10) % 3 === 0) {
  console.log('야호3');
}
if ((5 + 10) % 5 === 0) {
  console.log('야호5');
}
```

***

<h3>const 상수를_지칭하는_이름</h3>
<p>상수를 선언하는 방법</p>

```JavaScript
// 5 와 10을 더해서,
// sum 이라는 이름의 상수에 보관한 뒤,
// 3 으로 나누어 나머지가 0이면, '야호3' 를 출력하고,
// 5 로 나누어 나머지가 0이면, '야호5' 를 출력합니다.

const sum = 5 + 10;

if ((5 + 10) % 3 === 0) {
  console.log('야호3');
}
if ((5 + 10) % 5 === 0) {
  console.log('야호5');
}
```

***

<h3>const 상수를_지칭하는_이름 = 값;</h3>
<p>상수를 선언하면서 바로 값을 할당하는 방법</p>

<h3>let 변수를_지칭하는_이름;</h3>
<p>변수를 선언하는 방법</p>

<h3>변수를_지칭하는_이름 = 값;</h3>
<p>변수에 값을 할당하는 방법</p>

<h3>let 변수를_지칭하는_이름 = 값;</h3>
<p>변수에 값을 할당하는 방법</p>

```JavaScript
// 5 와 10을 더해서,
// sum 이라는 이름의 상수에 보관한 뒤,
// 3 으로 나누어 나머지가 0이면, '야호3' 를 출력하고,
// 5 로 나누어 나머지가 0이면, '야호5' 를 출력합니다.
// result 라는 변수는 3으로 나누어 떨어지거나, 5 로 나누어 떨어지면 true 라는 값을 가지고,
// 아니면 false 라는 값을 가진다.

const sum = 5 + 10;
let result = false;

if (sum % 3 === 0) {
  console.log('야호3');
  result = true;
}
if (sum % 5 === 0) {
  console.log('야호5');
  result = true;
}

console.log(result);
```

***

<h2>변수의 유효 범위(scope of variables)</h2>

<h3>const, let 의 유효 범위</h3>
<p>블록 스코프, 블록 - {}</p>

```JavaScript
//조건문
if(true) {
  let age = 37;
  console.log(age);
}
//age++;

//반복문
for (let i = 0; i < 5; i++) {
  const message = 'hello:' + i;
  console.log(message);
}
//console.log(message);


//함수
function hello1() {
  const name = 'Mark';
  console.log(name);
}
//console.log(name);

//arrow 함수
const hello2 = () => {
  const age = 37;
  console.log(age);
}
//console.log(age);
```

***

<h3>var 의 유효 범위 </h3>
<p>함수 스코프</p>

***

<h3>function () {}</h3>
<p>함수</p>

***

<h3>var와 호이스팅(var & hoisting)</h3>

<p>hoisting - 아래 있는 선언을(만) 끌어 올리다.</p>

***

<h3>자료형(Data Types)</h3>

<h4>변수가 가지는 고정 타입이 없다.</h4>
<p>하지만 타입이 없는 것은 아니다.</p>

<h4>데이터 타입</h4>
<ul> 기본 타입(Primitive values)
  <li>Boolean</li>
  <li>Null</li>
  <li>Undefined</li>
  <li>Number</li>
  <li>String</li>
  <li>Symbol(ECMAScript 6에 추가됨)</li>
</ul>
<ul>객체(Objects)</ul>

***

<h3>조건문(Conditional Statements)</h3>

```JavaScript
/*
if (표현식) {
  표현식이 참으로 평가될 때, 실행되는 문장들의 모음
}
*/

if(true) {
  console.log('항상 실행');
}

if(false) {
  console.log('항상 실행되지 않음');
}
```

<h4>표현식이 거짓으로 평가될 때</h4>
<h5>Falsy</h5>
<p>false, 0, ", null, undefinded, NaN</p>

<h4>표현식이 참으로 평가될 때</h4>
<h5>Truethy</h5>
<p>Falst의 반대: true, 0이 아닌 숫자, '문자열', {}, []</p>

<h4>else {}</h4>
<p>if에 해당하지 않을 때</p>

<h4>else if{}</h4>
<p>if에 해당하지 않을 때</p>

***

<h3>논리 연산자를 이용한 조건문 평가</h3>
<p>&&,||,!</p>

<h3>논리 연산자를 이용한 조건부 실행</h3>

<h3>삼항 연산자를 이용한 조건부 실행</h3>

<h3>switch를 이용한 조건문</h3>