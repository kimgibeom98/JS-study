// interface
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

let developer: Developer;
let person: Person;
// developer = person; // X
// person = developer; // o

// https://joshua1988.github.io/ts/guide/type-compatibility.html 이론 읽기!


// 함수
let add = function (a: number) {
  //...
}

let sum = function (a: number, b: number) {
  //...
}
// sum = add; // O
// add = sum; // x

// 제네릭
interface Empty<T> {
  // ..
}
let empty1: Empty<string>;
let empty2: Empty<number>;
// empty1 = empty2; 0
// empty2 = empty1; o

interface NotEmpty<T> {
  data: T;
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
// notempty1 = notempty2; x
// notempty2 = notempty1; x