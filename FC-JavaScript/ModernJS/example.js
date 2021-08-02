//switch/case 문

const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default:
    console.log('모르겠네요..');
}


/*
함수를 만들 때는 function 키워드를 사용하며, 함수에서 어떤 값을 받아올지 정해주는데 이를 파라미터(매개변수)라고 부릅니다.
함수 내부에서 return 키워드를 사용하여 함수의 결과물을 지정 할 수 있습니다.
추가적으로, return 을 하게 되면 함수가 끝납니다. 만약 다음과 같이 코드가 작성된다면, return 아래의 코드는 호출이 안됩니다.

function add(a, b) {
  return a + b;
  console.log('호출이 되지 않는 코드!');
}

const sum = add(1, 2);
console.log(sum);

*/


// 점수를 성적등급으로 변환하기 , 이번에는 점수가 주어졌을 때 A, B, C, D, F 등급을 반환하는 함수를 만들어봅시다.
function getGrade(score) {
    if (score === 100) {
        return 'A+';
    } else if (score >= 90) {
        return 'A';
    } else if (score === 89) {
        return 'B+';
    } else if (score >= 80) {
        return 'B';
    } else if (score === 79 ) {
        return 'C+';
    } else if (score >= 70) {
        return 'C';
    } else if (score === 69) {
        return 'D+'
    } else if (score >= 60) {
        return 'D'
    } else {
        return 'F';
    }
}

const grade = getGrade(30);
console.log(grade);


/*
화살표 함수
function 키워드 대신에 => 문자를 사용해서 함수를 구현했는데요, 화살표의 좌측에는 함수의 파라미터, 화살표의 우측에는 코드 블록이 들어옵니다.

const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));
*/

const getGrade = score => {
    if (score === 100) {
      return 'A+';
    } else if (score >= 90) {
      return 'A';
    } else if (score === 89) {
      return 'B+';
    } else if (score >= 80) {
      return 'B';
    } else if (score === 79) {
      return 'C+';
    } else if (score >= 70) {
      return 'C';
    } else if (score === 69) {
      return 'D+';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  };
  const grade = getGrade(90);
  console.log(grade);







//
//
// 함수에서 객체를 파라미터로 받기
const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

// const { name } = ironMan;
// console.log(name);
// 토니 스타크

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

function print({ alias, name, actor }) { // function print(hero) { - 1번 //  print({ alias, name, actor }) - 3번 
    // const { alias, name, actor } = hero; - 2번
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`; // 객체 비구조화 할당(객체 구조 분해)
    // const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);

// 아이언맨(토니 스타크) 역할을 맡은 배우는 로버트 다우니 주니어 입니다.
// 캡틴 아메리카(스티븐 로저스) 역할을 맡은 배우는 크리스 에반스 입니다.


//
// 객체 안에 함수 넣기 
const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    say: function() { // 함수가 객체안에 들어가게 되면, this 는 자신이 속해있는 객체를 가르키게 됩니다. , 함수를 선언 할 때에는 이름이 없어도 됩니다.
// say: () -> {  화살표 함수로 선언하면 제대로 작동 안함, 이유는 function 으로 선언한 함수는 this 가 제대로 자신이 속한 객체를 가르키게 되는데, 화살표 함수는 그렇지 않기 때문
      console.log(this.sound);
    }
  };
   
const cat = {
    name: '야옹이',
    sound: '야옹~'
};



cat.say = dog.say;
dog.say(); // 멍멍!
cat.say(); // 야옹~

const catSay = cat.say;
catSay(); // undefined


//
//

const dog = {
    _name: '멍멍이',
    get name() {
        console.log('_name을 조회합니다..');
        return this._name;
    },
    set name(value) {
        console.log('이름이 바뀝니다..' + value);
        this._name = value;
    }
};

console.log(dog.name);
// _name을 조회합니다..
// 멍멍이
dog.name = '뭉뭉이';
console.log(dog.name);
// 이름이 바뀝니다..뭉뭉이
// _name을 조회합니다..
// 뭉뭉이


//
//
// Getter 함수와 Setter 함수
// Getter 함수는 특정 값을 조회 할 때 우리가 설정한 함수로 연산된 값을 반환합니다.

const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        console.log('a가 바뀝니다.');
        this._a = value; 
        this.calculate();
    },
    set b(value) {
        console.log('b가 바뀝니다.');
        this._b = value;
        this.calculate();
    }
};

console.log(numbers.sum); // 3
numbers.a = 5; // a가 바뀝니다. calculate
numbers.b = 7; // b가 바뀝니다. calculate
numbers.a = 9; // a가 바뀝니다. calculate
console.log(numbers.sum); // 16
console.log(numbers.sum); // 16 
console.log(numbers.sum); // 16

//
//
// 배열
// 배열에 새로운 항목을 추가 할 때에는 배열이 지니고있는 내장 함수인 push 함수를 사용합니다.

const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

console.log(objects.length);

objects.push({
  name: '멍뭉이'
});

console.log(objects.length);

//
//
//for 문
/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}


for (초기 구문; 조건 구문; 변화 구문;) {
  코드
}
*/

//
//
// for in
/*
const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

각 함수의 역할은 다음과 같습니다.

Object.entries: [[키, 값], [키, 값]] 형태의 배열로 변환
Object.keys: [키, 키, 키] 형태의 배열로 변환
Object.values: [값, 값, 값] 형태의 배열로 변환
객체가 지니고 있는 값에 대하여 반복을 하고 싶다면 위 함수들을 사용하셔도 되고, for...in 구문을 사용하셔도 됩니다.

const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}
*/



//
//
// break 와 continue

/*

반복문 안에서는 break 와 continue 를 통하여 반복문에서 벗어나거나, 그 다음 루프를 돌게끔 할 수 있습니다.

for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // 다음 루프를 실행
  console.log(i);
  if (i === 5) break; // 반복문을 끝내기
}

i 가 2 일땐 continue 를 하여 원래 console.log 를 해야 하지만 그 코드를 수행하지 않고 바로 3으로 넘어갑니다.

i 가 5 일땐 break 를하여 반복문을 종료시킵니다.

*/


// numbers 라는 배열을 파라미터로 받아서 총합을 구하는 함수를 만들어봅시다.
function sumOf(numbers) {
    let sum = 0; // 초기 합은 0부터 시작
    for (let i = 0; i < numbers.length; i++) { // i가 numbers.length보다 작을 때까지 반복
        sum += numbers[i]; // sum에 하나하나 더해서
    }
    return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);
// 결과는 15


/*
숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환해보세요.

function biggerThanThree(numbers) {

}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); //[4, 5, 6, 7]
*/









/*
정답

function biggerThanThree(numbers) {
  const array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) {
      array.push(numbers[i]);
    }
  }
  return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]

export default biggerThanThree;
*/








//
//forEach

/*
forEach 는 가장 쉬운 배열 내장함수입니다. 기존에 우리가 배웠던 for 문을 대체 시킬 수 있습니다.
*/

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

// 1
// function print(hero) {
//     console.log(hero);
// }
// superheroes.forEach(print)

// 2
// superheroes.forEach(function(hero){
//     console.log(hero);
// })

// 3 
superheroes.forEach(hero => {
    console.log(hero);
});

/*
forEach 함수의 파라미터로는, 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어줍니다. 이 함수의 파라미터 hero는 각 원소를 가르키게 됩니다.
이렇게 함수형태의 파라미터를 전달하는 것을 콜백함수 라고 부릅니다. 함수를 등록해주면, forEach 가 실행을 해주는 거죠.
*/




//
//
// map
/*
map 은 배열 안의 각 원소를 변환 할 때 사용 되며, 이 과정에서 새로운 배열이 만들어집니다.
예를 들어서 다음과 같은 배열이 있다고 가정해봅시다.

const array = [1, 2, 3, 4, 5, 6, 7, 8];

만약에 배열 안의 모든 숫자를 제곱해서 새로운 배열을 만들고 싶다면 어떻게 해야 할까요? 
map 함수를 사용하지 않고 우리가 지금까지 배운 지식들을 활용하면 다음과 같이 구현 할 수 있습니다.
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];
for (let i = 0; i < array.length; i++) {
    squared.push(array[i] * array[i]);
}

console.log(squared);

// forEach를 사용
const array = [1, 2, 3, 4, 5, 6, 7, 8];

array.forEach(n => { // 숫자 n에 대하여
    squared.push(n * n);
});

console.log(squared);

// map을 사용

// 1
/*
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const square = n => n * n; // n을 파라미터로 받아와서 n * n 을 결과로 내보내라
const squared = array.map(square);
console.log(squared);
/*


/*
map 함수의 파라미터로는 변화를 주는 함수를 전달해줍니다. 이를 변화함수라고 부르도록 하겠습니다.
현재 우리의 변화함수 square 는 파라미터 n 을 받아와서 이를 제곱해줍니다.
array.map 함수를 사용 할 때 square 를 변화함수로 사용함으로서, 내부의 모든 값에 대하여 제곱을 해서 새로운 배열을 생성하였습니다.
변화 함수를 꼭 이름을 붙여서 선언 할 필요는 없습니다. 코드를 다음과 같이 작성해도 됩니다.
*/

// 2
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const squared = array.map(n => n * n);
console.log(squared);

// [1, 4, 9, 16, 25, 36, 49, 64];

const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

const texts = items.map(item => item.text);
console.log(texts);

//
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];






//
const todos = [
    {
      id: 1,
      text: '자바스크립트 입문',
      done: true
    },
    {
      id: 2,
      text: '함수 배우기',
      done: true
    },
    {
      id: 3,
      text: '객체와 배열 배우기',
      done: true
    },
    {
      id: 4,
      text: '배열 내장함수 배우기',
      done: false
    }
  ];

  // const index = todos.indexOf(3); // -1 일치하는 것이 없다. 여기서 id: 3을 찾고 싶으면 findIndex를 사용해야함
  const index = todos.findIndex(todo => todo.id === 3); // 결과값: 2
  // const todo = todos.find(todo => todo.id === 3); // find 함수는 findIndex 랑 비슷한데, 찾아낸 값이 몇번째인지 알아내는 것이 아니라, 찾아낸 값 자체를 반환함
  // 결과 값: Object {id: 3, text: "객체와 배열 배우기", done: true}
  console.log(index);