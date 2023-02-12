// 타입 추론 기본 1
let a = 'abc';
function getB(b = 10) {
  let c = 'hi';
  return b + c
}

10 + "10" // 1010

// 타입 추론 기본 2

interface Dropdown<T> {
  value: T;
  title: string;
}

let shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello'
}

// 타입 추론 기본 3

interface Dropdown<T> {
  value: T
  title: string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}
let detailItems: DetailedDropdown<string> = {
  value: 'hi',
  title: 'a',
  description: 'b',
  tag: 'c'
}

