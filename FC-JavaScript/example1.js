//블럭
{
    //
    const name = 'Mark';
    console.log(name);
}

// console.log(name);

//밖에서 안으로

let age = 37;

{
    age++;
    console.log(age);
}

console.log(age);

//중첩
{
    {
        {
            console.log(age);
        }
    }
}


// var 함수 스코프
var a = 0;

(function() {
    a++;
    console.log(a)
})();

console.log(a);

(function() {
    var b = 0;
    console.log(b);
})();

b++;
console.log(b);


// 블록 스코프
var c = 0;

{
    c++;
    console.log(c);
}

{
    var d= 0;
    console.log(d);
}

console.log(d);


// 호이스팅

// 함수 먼저
function hello1() {
    console.log('hello1');
}

hello1();

// 함수의 호출을 먼저
hello2();

function hello2() {
    console.log('hello2')
}

// var를 사용한 변수

age = 6;
age++;
console.log(age);

var age;

//
var name;

console.log(name);

name = 'MARK';

console.log(name);


//var name = 'injung';

name = 'injung';

// let 먼저 선언이 되어야 사용 가능 (그래서 호이스팅 현상이 일어나지 않는다.)

console.log(name);

name = 'Mark';

console.log(name);

let name;


// 자료형(Data Types)

let whatever = 'Mark';

whatever = 37;

whatever = true;


