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
/* 
say: () -> {  화살표 함수로 선언하면 제대로 작동 안함, 이유는 function 으로 선언한 함수는 this 가 제대로 자신이 속한 객체를 가르키게 되는데, 
화살표 함수는 그렇지 않기 때문
 */
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





  //
  //
  // filter
  // filter 함수는 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만듭니다.
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
  
  const tasksNotDone = todos.filter(todo => todo.done === false);
  console.log(tasksNotDone);
// filter 함수에 넣는 파라미터는 조건을 검사하는 함수를 넣어주며, 이 함수의 파라미터로 각 원소의 값을 받아오게 됩니다.
// const tasksNotDone = todos.filter(todo => !todo.done); 이렇게도 작성가능

//
// 
// splice
// splice 는 배열에서 특정 항목을 제거할 때 사용합니다.  
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 2);
console.log(spliced); // [30, 40] 
console.log(numbers); // [10, 20]

//
//
// slice
// slice 는 splice 랑 조금 비슷하지만, 배열을 잘라낼 때 사용하는데, 중요한 점은 기존의 배열은 건들이지 않는 다는 것입니다.
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지

console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40]
/*
slice 에는 두개의 파라미터를 넣게 되는데 첫번째 파라미터는 어디서부터 자를지, 그리고 두번째 파라미터는 어디까지 자를지 를 의미합니다.
*/

//
//
// shift 와 pop
// shift 는 첫번째 원소를 배열에서 추출해준다 (추출는 과정에서 배열에서 해당 원소는 사라진다.)
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(value); // 10
console.log(numbers); // [20, 30, 40]

// pop
// pop 은 push 의 반대로 생각하면 된다. push 는 배열의 맨 마지막에 새 항목을 추가하고, pop 은 맨 마지막 항목을 추출한다.
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value); // 40
console.log(numbers); // [10, 20, 30]


//
//
// unshift
// unshift는 shift의 반대
// 배열의 맨 앞에 새 원소를 추가한다.
const numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers); // [5, 10, 20, 30, 40]

/*
const numbers = [10, 20, 30, 40];
numbers.push(50);
console.log(numbers); // [10, 20, 30, 40, 50]

const numbers = [10, 20, 30, 40];
numbers.push(50);
const value = numbers.pop() // 50
console.log(numbers) // [10, 20, 30, 40]
*/

/*
const numbers = [10, 20, 30, 40];
numbers.unshift(0);
console.log(numbers); // [0, 10, 20, 30, 40]

const numbers = [10, 20, 30, 40];
numbers.unshift(0);
const value = numbers.shift() // [10, 20, 30, 40]
console.log(numbers); 
*/

//
//
// concat
// concat 은 여러개의 배열을 하나의 배열로 합쳐준다.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
// const concated = [...arr1, ...arr2];
console.log(concated); // [1, 2, 3, 4, 5, 6];

//concat 함수는 arr1 과 arr2 에 변화를 주지 않는다.

//
//
// join
// join 은 배열 안의 값들을 문자열 형태로 합쳐준다.
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5

//
//
// reduce
// reduce 함수는 잘 사용 할 줄 알면 정말 유용한 내장 함수이다. 만약 주어진 배열에 대하여 총합을 구해야 하는 상황이 왔다고 가정해보자.

const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(n => {
  sum += n;
});
console.log(sum); // 15
// 여기서 sum 을 계산하기 위해서 사전에 sum 을 선언하고, forEach 를 통하여 계속해서 덧셈을 해주었다.

//reduce 라는 함수를 사용하면 다음과 같이 구현 할 수 있다.
/*
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
*/
//초기값 0이 accumulator이 되고 각 원소들이 하나씩 current에 들어가서 더 해진다. (더해진 값은 다시 accumulator(누적된 값)이 되서 마지막 원소까지 계속 더해진다.)

/*
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum);
*/
/*
열을 처음부터 끝까지 반복하면서 우리가 전달한 콜백 함수가 호출이 되는데,
가장 처음엔 accumulator 값이 0 이다. 이 값이 0인 이유는 우리가 두번째 파라미터인 초깃값으로 0을 설정했기 때문이다.
처음 콜백 함수가 호출되면, 0 + 1 을 해서 1이 반환된다. 이렇게 1일 반환되면 그 다음 번에 콜백함수가 호출 될 때 accumulator 값으로 사용됨.
콜백함수가 두번째로 호출 될 땐 1 + 2 를 해서 3이되고, 이 값이 세번째로 호출될 때의 accumulator가 됩니다.
그래서 쭉- 누적돼서 결과물 15가 나타나는 것 입니다.
*/



/*
reduce 함수에는 두개의 파라미터를 전달한다. 첫번째 파라미터는 accumulator 와 current 를 파라미터로 가져와서 결과를 반환하는 콜백함수이고, 
두번째 파라미터는 reduce 함수에서 사용 할 초깃값입니다.

여기서 accumulator 는 누적된 값을 의미합니다.
*/

// 평균을 계산하려면, 가장 마지막 숫자를 더하고 나서 배열의 length 로 나누어주어야 한다.
const avg = numbers.reduce((accumulator, current, index, array) => { // 평균을 구할 때
  if (index === array.length - 1){ // 현재 처리하고 있는 배열 원소가 맨 마지막 것이라면, index가 0부터 시작하기 때문에 -1로 해줌
    return (accumulator + current) / array.length; 
  }
  return accumulator + current;
}, 0); 
console.log(avg); // 3 

/*
reduce 에서 사용한 콜백함수에서는 추가 파라미터로 index 와 array 를 받아왔다.
index 는 현재 처리하고 있는 항목이 몇번째인지 가르키고, array 는 현재 처리하고 있는 배열 자신을 의미함
*/

const alphabets = ['a', 'a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
const counts = alphabets.reduce((acc, current) => {
  if (acc[current]) { // acc 안에 존재하는지 확인
    acc[current] += 1; // acc 안에 current가 존재한다면 값에다가 1을 더해준다.
  } else {
    acc[current] = 1; // 그렇지 않다면 acc[current]를 1로 설정해준다.
  }
  return acc;
}, {}) // 여기서 {}은 비어있는 객체

console.log(counts);

/*
Object {a: 3, b: 1, c: 2, d: 1, e: 1}

*/









