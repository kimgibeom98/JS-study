// function logText<T>(text : T ) : T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이');

// function logText(text : strgin ) : strgin {
//     console.log(text);
//     return text;
// }

// function logNumber(text : number ) : number {
//     console.log(text);
//     return text;
// }
//  중복선언시(string과 number 따로따로) - 코드가 지전분함,

// function logText(text : string | number ) {
//     console.log(text);
//     return text;
// }
// const a = logText('a');
// a.split(); // 사용불가


//  유니온으로 선언시 - 반환값이 명확하지 않아서 함수사용 X

// 위와 같은 문제들을 제네릭으로 아래와 같이 해결

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
const str = logText<string>('abc');
str.split('');

const login = logText<boolean>(true);

// 제네릭 - 타입을 비워놓은 상태에서 타입에 뭐가 들어가는지 호출하는 시점에서 정의함.

//인터페이스에 제네릭을 선언하는 방법

// interface Dropdown{
//     value : string;
//     selected : boolean;
// }
// const obj : Dropdown = {value : 'abc', selected : false}

// 위를 아래처럼

interface Dropdonw<T> {
  value: T;
  selected: boolean
}
const obj: Dropdonw<string> = { value: 'abc', selected: false }

// 제네릭 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   });
//   return text;
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text : T) : T {
  text.length;
  return text;
}
logTextLength(10);
logTextLength({length : 10});

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name : string;
  price : number;
  stock : number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>( itemOption : T) : T{
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption('a');

getShoppingItemOption("name");