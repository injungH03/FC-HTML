/*

// function
// 이름이 hello1 인 함수를 선언

function hello1() {
    console.log('hello1');
}

console.log(hello1, typeof hello1);


// const hello = function() {}
const hello1 = function () {
    console.log('hello1');
};

console.log(hello1, typeof hello1);


// 함수의 매개변수
// 함수를 호출할 때 값을 지정

function hello2(name) {
    console.log('hello2', name);
}

// const hello = function() {}
const hello2 = function (name) {
    console.log('hello2', name);
};

// 함수의 리턴
// 함수를 실행하면 얻어지는 값

function hello3(name) {
    return `hello3 ${name}`;
}

console.log(hello3('Mark'));

// const hello = function() {}
const hello3 = function (name) {
    return `hello3 ${name}`;
};


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

*/



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




