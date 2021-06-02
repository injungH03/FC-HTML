<h2>Expression</h2>
<p>값을 만들어내는 간단한 코드를 표현식이라고 한다.<br>
표현식은 값을 만들어내기 때문에 함수의 인자로 사용할 수 있다.
</p>

<h2>Statement</h2>
<ul>
  <li>하나 혹은 여러 개의 표현식이 모여 문장을 이룬다.</li>
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

<br>
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

<br>
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

<br>
<h3>const 상수를_지칭하는_이름 = 값;</h3>
<p>상수를 선언하면서 바로 값을 할당하는 방법</p>
<br>
<h3>let 변수를_지칭하는_이름;</h3>
<p>변수를 선언하는 방법</p>
<br>
<h3>변수를_지칭하는_이름 = 값;</h3>
<p>변수에 값을 할당하는 방법</p>
<br>
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

<br>
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

<br>
<h3>var 의 유효 범위 </h3>
<p>함수 스코프</p>

<br>
<h3>function () {}</h3>
<p>함수</p>

<br>
<h3>var와 호이스팅(var & hoisting)</h3>

<p>hoisting - 아래 있는 선언을(만) 끌어 올리다.</p>

<br>
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
<br>
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
<ul>
  Falsy
  <li>false, 0, ", null, undefinded, NaN</li>
</ul>

<h4>표현식이 참으로 평가될 때</h4>
<ul>
  Truethy
  <li>Falst의 반대: true, 0이 아닌 숫자, '문자열', {}, []</li>
</ul>

<h4>else {}</h4>
<ul>
  <li>if에 해당하지 않을 때</li>
</ul>

<h4>else if{}</h4>
<ul>
  <li>if에 해당하지 않을 때</li>
</ul>

<h4>논리 연산자를 이용한 조건문 평가</h4>
<ul>
  <li>[&&,||,!]</li>
</ul>

<h4>논리 연산자를 이용한 조건부 실행</h4>

<h4>삼항 연산자를 이용한 조건부 실행</h4>

<h4>switch를 이용한 조건문</h4>

***

<h3>반복문(Iteration Statements)</h3>

```JavaScript
// 반복문이 없다면?
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');

// for 문을 사용한다면?
// 보통 어떤 유한한 횟수만큼 반복할 때는 for 문을 사용합니다.

for (let i = 0; i < 5; i++) {
  console.log('안녕하세요');
}
```
<br>
<br>
<h4>for(초기화; 반복 조건; 반복이 된 후 실행되는 코드) { <br>
반복이 되는 코드 블럭 <br>
}</h4>

```JavaScript
for(a; b; c) {
  d
}
e
// 실행 순서
// a -> d -> c -> b -> d -> c -> b -> e
```
<br>
<br>
<h4>for(;;) { <br>
d <br>
}</h4>

```JavaScript
for(;;) {
  console.log('안녕하세요');
  if (Math.random() * 100 > 90) {
    break;
  }
}
```
<br>
<br>
<h4>whlie(조건) { <br>
  조건이 거짓이 될 떄까지 반복 실행<br>
}</h4>

```JavaScript
// while 무한 루프
while (true) {
  console.log('안녕하세요');
  if (Math.random() * 100 > 90) {
    break;
  }
}
```
<br>
<br>
<h4>do { <br>
  조건이 거짓이 될 떄까지 반복 실행<br>
} while(조건);</h4>

```JavaScript
do {
  console.log('안녕하세요');
} while (Math.random() * 100 <= 90);
```
<br>
<br>
<h4>for of (iterable)<br>
for in (모든 프로퍼티)</h4>


```JavaScript
// for of
for (const i of [1, 2, 3]) {
  console.log(i);
}

// for in
Object.prototype.test = function() {};

for (const i in {a: 1, b: 2, c: 3}) {
  console.log(i);
}
```

***

<h3>함수(function)</h3>

***

<h4>function hello() {}</h4>
<ul>
<li>함수를 만들 떄 사용하는 키워드</li>
</ul>

```JavaScript
// function
// 이름이 hello1 인 함수를 선언

function hello1() {
  console.log('hello1');
}

console.log(hello1, typeof hello1);

// 함수의 매개변수
// 함수를 호출할 때 값을 지정

function hello2(name) {
  console.log('hello2', name);
}

// 함수의 리턴
// 함수를 실행하면 얻어지는 값

function hello3(name) {
  return `hello3 ${name}`;
}

console.log(hello3('Mark'));
```
<br>
<br>
<h4>const hello = function() {}</h4>
<ul>
<li>함수를 만들 떄 사용하는 키워드</li>
</ul>

```JavaScript
// 이름이 hello1 인 함수를 선언
// const hello = function() {}
const hello1 = function () {
    console.log('hello1');
};

console.log(hello1, typeof hello1);


// 함수의 매개변수
// 함수를 호출할 때 값을 지정
// const hello = function() {}
const hello2 = function (name) {
    console.log('hello2', name);
};

// 함수의 리턴
// 함수를 실행하면 얻어지는 값
// const hello = function() {}
const hello3 = function (name) {
    return `hello3 ${name}`;
};
```
<br>
<br>
<h4>선언적 function 과 익명 함수를 만들어 변수에 할당</h4>

```JavaScript
//차이점

var hello2;
console.log(hello2);

hello1();
// hello2();
hello3();

function hello1() {
    console.log('hello1');
} 
// 선언적 방신은 어디있던지 JavaScript 특성상 함수를 먼저 메로리에 올린다.

hello2 = function() {
    console.log('hello2');
};

const hello3 = function() {
    console.log('hello3')
};
```
<br>
<br>
<h4>const hello = new function();</h4>
<ul>
<li>생성자 함수로 함수를 만드는 방법</li>
</ul>

```JavaScript
// new Functioon(/* 인자1, 인자2, ..., 함수의 바디 */);

const sum = new Function('a', 'b', 'c', 'return a + b + c');

console.log(sum(1, 2, 3));
```
<br>
<br>
<h4>function 과 new Function());</h4>

```JavaScript
// 차이점
globae.a = 0;


{
  const a 1;

  const test = new Function('return a');

  console.log(test());
}

{
  const a = 2;

  const test = function() {
    return a;
  }

  console.log(test());
}
```
<br>
<br>
<h4>() => {} arrow function(es6)</h4>

```JavaScript
// arrow 함수를 만들어 이름이 hello1 인 변수에 할당

const hello1 = () => {
    console.log('hello1');
};

// 함수의 매개변수
// 함수를 호출할 때 값을 지정

// 매개변수가 하나일 때, 괄호 생략 가능

const hello2 = name => {
    console.log('hello2' , name);
};

const hello3 = (name, age) => {
    console.log('hello3', name, age);
};

// 함수의 리텅
// 함수를 실행하면 얻어지는 값

const hello4 = name => {
    return `hello4 ${name}`;
}

const hello5 = name => `hello5 ${name}`;
```
<br>
<br>
<h4>new 함수(); 생성자 함수</h4>

```JavaScript
//  생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법

function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

const p = new Person('Mark', 37);

console.log(p, p.name, p.age);

const a = new Person('injung', 33);

console.log(a, a.name, a.age);


// arrow 에서는 this가 생기지 않는다.
const Cat = (name, age) => {
    console.log(this);
    this.name = name;
    this.age = age;
};

const c = new cat('냥이', 1);
```
<br>
<br>
<h4>함수 안에서 함수를 만들어 리턴</h4>

```JavaScript
// 함수를 호출하면 함수를 만들어서 리턴

function plus(base) {
  return function(num) {
    return base + num;
  }
}

const plus5 = plus(5);
console.log(pluse5(10));

const plus7 = plus(7);
console.log(plus7(8));
```
<br>
<br>
<h4>함수를 호출할 때, 인자로 함수를 사용</h4>

```JavaScript
// 함수를 인자로 하여 함수를 호출

function hello(c) {
  console.log('hello');
  c();
}

hello(function() {
  console.log('콜백');
});
```

***

<h3>객체</h3>
<br>
<h4>함수, 클래스(틀) => 객체, 개체, object</h4>
<br>
<h4>function 틀() {} => new 틀()</h4>

```JavaScript
// 생성자 함수로 객체 만들기
// 생성자 함수

function A() {}

const a = new A();
console.log(a, typeof a);
console.log(A());

// 생성하면서 데이터 넣기

function B(name, age) {
  console.log(name, age);
}

const b = new B();
const c = new B('Mark', 37)
console.log(B());
```

<br>
<h4>객체에 속성 추가하기 property</h4>

```JavaScript
// 값을 속성으로 넣기
function A() {
  this.name = 'Mark';
}

const a = new A(); // {name: 'Makr'}
console.log(a); 

// 함수를 속성으로 넣기
function B() {
  this.hello = function() {
    console.log('hello');
  };
}

new B().hello();

```
<br>
<h4>new Object()</h4>
<p>Object로 객체 만들기</p>

```JavaScript
// new Object

const a = new Object();

console.log(a, typeof a);

const b = new Object(true);

console.log(b, typeof b);

const c = new Objcet({name : 'Mark'});

console.log(c, typeof c);
```
<br>
<h4>프로토타입 체인</h4>
<p>.prototype</p>

```JavaScript
// prototype

function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.hello = function() {
  //   console.log('hello', this.name, this.age);
  // };
}

Person.prototype.hello() = function() {
  console.log('hello', this.name, this.age);
};

const p = new Person('Mark', 37);

p.hello();
console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);
console.log(Person.prototype.hello);

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person);
console.log(p instanceof Object);
```
<br>
<h4>프로토타입을 이용한 객체 확장</h4>
<p>.prototype</p>

```JavaScript
// prototype 상속

function Person() {}

Person.prototype.hello = function() {
    console.log('hello');
};

function Korean(region) {
    this.region = region;
    this.where = function() {
        console.log('where', this.region);
    };
}

Korean.prototype = Person.prototype;

const k = new Korean('Seoul');

k.hello();
k.where();

console.log(k instanceof Korean);
console.log(k instanceof Pserson);
console.log(k instanceof Object);
```

<br>
<h4>객체 리터럴</h4>

```JavaScript
// 객체 리터럴

const a = {};

console.log(a, typeof a);

const b = {
  name: 'Mark',
};

console.log(b, typeof b);

const c = {
  name: 'Mark',
  hello1() {
    console.log('hello1', this.name);
  },
   hello2: function() {
    console.log('hello2', this.name);
  },
   hello3: () => {
    console.log('hello3', this);
  },
};

c.hello1();
c.hello2();
c.hello3();
```