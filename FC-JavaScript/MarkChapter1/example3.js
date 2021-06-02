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

  //  false

  if(false) console.log(false);

  if(0) console.log(0);

  if('') console.log('');
  
  if(null) console.log(null);

  if(undefined) console.log(undefined);

  if(NaN) console.log(NaN);

  // true

  if(true) console.log(true);

  if(33) console.log(37);

  if(-33) console.log(-33);

  if('Mark') console.log('Mark');

  if({}) console.log({});

  if([]) console.log([]);

  // else {}

  const n = 33; // -33

  if(n > 0) {
    console.log('n 이 0 보다 큰 경우 실행');
  } else {
    console.log('n 이 0 보다 크지 않은 경우 실행');
  }

  // if () {} else if ) {} else {}

  const s = 15;

  if (s % 3 === 0) {
    console.log('s 는 3의 배수입니다.');
  } else if (s % 5 === 0) {
    console.log('s 는 5의 배수입니다.')
  } else {
    console.log('s 는 3의 배수도 아니고, 5의 배수도 아닙니다.');
  }

  // n 이 3 의 배수이면서, 5 의 배수이면 뭐라고 출력될까요?

  if (s % 3 === 0 && s % 5 === 0) {
    console.log('s 는 15의 배수입니다.');
  } else if (s % 3 === 0) {
    console.log('s 는 3의 배수입니다.');
  } else if (s % 5 === 0) {
    console.log('s 는 5의 배수입니다.');
  } else {
    console.log('s 는 3의 배수도 아니고, 5의 배수도 아닙니다.');
  }

  // n 이 3 === 0 과 s % 5 === 0 의 값은 여러번 반복되므로, 변수나 상수에 넣습니다.

  const multipleOfThree = (s % 3 === 0);
  const multipleOfFive = (s % 5 === 0); 

  if (multipleOfThree && multipleOfFive) {
    console.log('s 는 15의 배수입니다.');
  } else if (multipleOfThree) {
    console.log('s 는 3의 배수입니다.');
  } else if (multipleOfFive) {
    console.log('s 는 5의 배수입니다.');
  } else {
    console.log('s 는 3의 배수도 아니고, 5의 배수도 아닙니다.');
  }

  // 중첩을 이용해서 표현할 수도 있습니다.

  if (multipleOfThree && multipleOfFive) {
    console.log('s 는 15의 배수입니다.');
  } else {
    if (multipleOfThree) {
      console.log('s 는 3의 배수입니다.');
    } else if (multipleOfFive) {
      console.log('s 는 5의 배수입니다.');
    } else {
      console.log('s 는 3의 배수도 아니고, 5의 배수도 아닙니다.');
    }
  }
  
  // 표현식 && 표현식

  if (true && true) {
    console.log('두개 모두 참이면 참');
  }

  if (true && false) {
    console.log('한개만 참이면 거짓');
  }  

  if (false && true) {
    console.log('한개만 참이면 거짓');
  }  

  if (false && false) {
    console.log('두개 모두 거짓이면 거짓');
  } 

  // 표현식 || 표현식

  if (true || true) {
    console.log('두개 모두 참이면 참');
  }

  if (true || false) {
    console.log('한개만 참이면 참');
  }  

  if (false || true) {
    console.log('한개만 참이면 참');
  }  

  if (false || false) {
    console.log('두개 모두 거짓이면 거짓');
  } 

  /* !표현식 */

  if (!true) {
    console.log('참이면 거짓');
  }

  if (!false) {
    console.log('거짓이면 참');
  }

  // 표현식 && 표현식
  // 둘다 참 일 때만 참이다.
  // 표현식은 앞에 먼저 평가하고, 뒤에를 평가한다.
  // 앞 표현식을 평가를 해서 참 일 때만, 뒤 표현식을 평가할 필요가 생기기 때문에 뒤의 표현식이 실행된다.
  
  let t = 5;

  t % 5 === 0 && console.log('5로 나누어 떨어질 떄만 실행');


  // 앞 표현식의 평가 결과가 거짓일 때는 뒤 표현식을 평가할 필요가 없어서 실행하지 않는다.

  r = 6;

  r % 5 === 0 && console.log('5로 나누어 떨어질 때만 실행');


  // 표현식 || 표현식
  // 둘 중에 하나만 참이면 참이다.
  // 앞 표현식을 평가를 해서 참 이면, 뒤 표현식을 평가할 필요가 없어서 실행하지 않는다.

  h = 5;
  
  h % 5 === 0 || console.log('5로 나누어 떨어지지 않을 때만 실행');


  // 앞 표현식을 평가를 해서 거짓 일 때만, 뒤 표현식을 평가할 필요가 생기기 때문에 뒤의 표현식이 실행 된다.

  g = 6;

  g % 5 === 0 || console.log('5로 나누어 떨어지지 않을 때만 실행')


// 조건 ? 조건이 참이면 실행되는 문장 : 조건이 거짓이면 실행되는 문장
// 중괄호 {} 를 사용할 수 없는 문법이기 때문에 하나의 문장만 가능합니다.

let x = 5;
console.log(x & 5 === 0 ? '5의 배수입니다.' : '5의 배수가 이닙니다.');

// 표현식의 결과를 변수에 할당할 수 있습니다.

const message = x % 5 === 0 ? '5의 배수입니다.' : '5의 배수가 아닙니다.';
console.log(message);




// swich 뒤 괄호 안에 있는 값이 무엇인지 중괄호 안에 있는 코드들을 비교해서 실행합니다.
// 이 중에 default: 뒤에 있는 문장은 항상 참이어서 실행되는 블럭입니다.
// 문장이 한 줄이라서 중괄호는 생략했습니다.

let a = 5;

switch (a) {
  default:
    console.log(a);
}


// 다음은 a 를 5로 나누었을 때 나머지가 0인 경우에 실행되는 블럭을 추가한 것입니다.
// case '비교할 값' : 을 이용해서 맞으면 실행됩니다.
// case 0: 인 경우와 default: 인 경우 두 블럭 모두 순서대로 실행이 됩니다.

switch (a % 5) {
  case 0: {
    console.log('5의 배수 입니다.');
  }
  default:
    console.log(a);
}

// 만약에 해당 블럭이 실행된 후 다음 브럭을 거치지 않고 switch 문을 나가고 싶다면,
// case 문 안에는 break; 를 실행합니다.

switch (a % 5) {
  case 0: {
    console.log('5의 배수 입니다.');
    break;
  }
  default:
    console.log(a);
}

// break 와 case 문의 순서를 잘 조정하여, 원하는 코드를 만들어 낼 수 있도록 제대로 이해해야 합니다.

b = 6;

switch (b % 5) {
  case 0: {
    console.log('5의 배수 입니다.');
    break;
  }
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('5의 배수가 아닙니다.');
  default:
    console.log(b);
}