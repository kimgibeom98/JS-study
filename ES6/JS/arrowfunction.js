// Arrow Function
// var a = function () {
//     return new Date()
//   }
//   var b = function (a) {
//     return a * a
//   }
//   var c = function (a, b) {
//     return a + b
//   }
//   var d = function (a, b) {
//     console.log( a * b )
//   }

//   아래처럼 바꿀 수 있음. (function을 지우고 괄호 뒤에 => 라고 생각하면 됨. 하지만 함수안에 return값만 있다면 {}도 생략 가능.)

// let a = () => new Date()
// let b = a => a * a  //전달받는 인자가 하나뿐이면 괄호 생략 가능
// let c = (a, b) => a + b
// let d = (a, b) => {
//   console.log( a * b )
// }

// let e = function(x){
//     return{
//         x:x
//     }
// }

// 위에 함수를 아래처럼 바꿀 수 있음.
// let e = x => ({x})
// 객체는 ()로 묶어줘야함. {}가 생략되기 때문에.

// let f = function (a){
//     return function (b){
//         return a + b;
//     }
// }
// let f = a => b => a + b


// 1) (매개변수) => { 본문 }

// 2) 매개변수가 하나뿐인 경우 괄호 생략 가능

// 3) 매개변수가 없을 경우엔 괄호 필수

// 4) 본문이 `return [식 or 값]` 뿐인 경우 `{ }`와 `return` 키워드 생략 가능

// 5) 위 4) 에서 return할 값이 `객체`인 경우엔 괄호 필수

// arrow function은 '함수스코프를' 생성한다. 다만, 실행컨텍스트 생선시 this 바인딩 X 

// 메소드 안에서 같은 this를 가지고 쓸때(내부함수로써 쓸때) 사용한다.


// const f = () => {
//   a: 1,
//   b: 2
// }

// const f = () => ({
//   a: 1,
//   b: 2
// })

// 실행컨텍스트 생성시 this 바인딩을 하지 않음

// const obj = {
//   a: function () {
//     console.log(this)

//     const b = () => {
//       console.log(this)
//     }

//     b()
//   }
// }
// obj.a()

// const obj = {
//   grades: [80, 90, 100],
//   getTotal: function () {
//     this.total = 0
//     this.grades.forEach(function(v) {
//       this.total += v
//     })
//   }
// }
// obj.getTotal()
// console.log(obj.total)

// 명시적 this 바인딩 ?

// const a = () => {
//   console.log(this)
// }
// a.call({a: 1})

// const a = (...rest) => {
//   console.log(this, rest)
// }
// a.call({a: 1}, 1, 2, 3)
// a.apply([], [4, 5, 6])
// const b = a.bind(null, 7, 8, 9, 10)
// b()


// const obj = {
//   f() {
//     const a = (...rest) => {
//       console.log(this, rest)
//     }
//     a.call({a: 1}, 1, 2, 3)
//     a.apply([], [4, 5, 6])
//     const b = a.bind(null, 7, 8, 9, 10)
//     b()
//   }
// }
// obj.f()

// 생성자함수로 ?


// const P = (name) => {
//   this.name = name
// }
// const j = new P('재남')




// 그밖에

// this 외에도 super, arguments, new.target 등을 바인딩하지 않는다.