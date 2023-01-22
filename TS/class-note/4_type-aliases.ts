// interface personType {
//   name: string;
//   age: number
// }

type personType = {
  name: string;
  age: number
}

let gibeom : personType = {
  name : '기범',
  age : 26
}

// interface와 type의 차이 마우스를 올렸을때 보여지는게 다르다.
//  - 가장 큰 차이점은 타입의 확장(extends, 3_interface.ts 파일 참고) 가능/불가능 이다.
//  인터페이스는 확장이 가능하지만 타입은 확장이 불가능하다. type보다는 interface로 선언해서 사용하는것을 추천.

// type : 명확하게 보여지고 코드 가독성도 좋음

type MyString = string;
const str : MyString = 'hello';

type Todo = {id : string, title: string, done: boolean};
function fetTodo(todo : Todo){

}