// shorthand properties (프로퍼티 축약)

// var x = 10
// var y = 20
// var obj = {
//   x: x,
//   y: y
// }
// 아래코드처럼 표현 가능

// js
// const x = 10
// const y = 20
// const obj = {
//   x,
//   y
// }

// 프로퍼티의 key와 value에 할당할 변수명이 동일한 경우 value 생략 가능.



// const convertExtension = function (fullFileName) {
//     const fullFileNameArr = fullFileName.split('.')
//     const filename = fullFileNameArr[0]
//     const ext = fullFileNameArr[1] && fullFileNameArr[1] === 'png' ? 'jpg' : 'gif'
//     return {
//       filename,
//       ext
//     }
//   }
//   convertExtension('abc.png')  filename : abc  ext : jpg


// var obj = {
//     name: 'foo',
//     getName: function () { return this.name }
//   }
// 위에 코드를 아래 코드처럼 줄일수 있게 됐다.
// 하지만 프로토타입이라는 프로포티가 없어졌기 때문에 생성자 함수를 쓸수없고 오롯이 함수 본연의 기능만 사용할 수 있다. 그대신 함수가 가벼워졌다.
//   const obj = {
//     name: 'foo',
//     getName () { return this.name }
//   }


// 소개

// var className = ' Class'
// var obj = {}

// obj['ab cd'] = 'AB CD'


// obj['ab cd'] = 'AB CD'

// var obj = {
//   'A' + className: 'A급'
// }

//  위에코드 안됨 아래처럼 사용

//  var obj = {
//     ['A' + className] : 'A급'
//   }

// obj['A' + className] = 'A급'

// let suffix = ' name'
// let iu = {
//   ['last' + suffix]: '이',
//   ['first' + suffix]: '지은'
// }
// // console.log(iu) last name : 이 first name : 지은

// const count = (function (c) {
//     return function () {
//       return c++
//     }
//   })(0)
//   var obj = {
//     [`a_${count()}`]: count(),
//     [`a_${count()}`]: count(),
//     [`a_${count()}`]: count()
//   }
//   console.log(obj)
//   a_0 : 1
//   a_2 : 3
//   a_4 : 5

// own property enumeration order (고정된 프로퍼티 열거 순서)

// const obj1 = {
//     c: 1,
//     2: 2,
//     a: 3,
//     0: 4,
//     b: 5,
//     1: 6
//   }
//   const keys1 = []
//   for (const key in obj1) {
//     keys1.push(key)
//   }
//   console.log(keys1)
//   console.log(Object.keys(obj1))
//   console.log(Object.getOwnPropertyNames(obj1))


// const obj2 = {
//     [Symbol('2')]: true,
//     '02': true,
//     '10': true,
//     '01': true,
//     '2': true,
//     [Symbol('1')]: true
//   }
//   const keys2= []
//   for(const key in obj2) {
//     keys2.push(key)
//   }
//   console.log(keys2) ["2", "10", "02", "01"]로 출력된다 이유는
//   숫자는 먼저 오고, 작은수에서 큰수의 순서로. 문자열이 입력된 순서 그대로
//   하지만 전부 문자열인데 위에처럼 나오는 이유는
//   숫자인데 첫글자가 0이 아닌 경우는 숫자로 인식한다.

// const obj1 = {
//   c: 1,
//   2: 2,
//   a: 3,
//   0: 4,
//   b: 5,
//   1: 6
// }
// const obj2 = {
//     [Symbol('2')]: true,
//     '02': true,
//     '10': true,
//     '01': true,
//     '2': true,
//     [Symbol('1')]: true
//   }
//   const obj3 = Object.assign({}, obj1, obj2)
//   const keys3= []
//   for(const key in obj3) {
//     keys3.push(key)
//   }
//   console.log(keys3)
//   console.log(Object.keys(obj3))
//   console.log(Object.getOwnPropertyNames(obj3))
//   console.log(Reflect.ownKeys(obj3)) // symbol까지 다 나옴


// 열거순서는 다음 규칙을 따른다.

// - **number &rarr string &rarr symbol** 의 순서로 정렬된다.
// - `number` key는 프로퍼티들 중 가장 앞에 위치하며, 오름차순이다.
// - `string` key는 객체에 추가된 당시의 순서를 유지하면서 숫자 뒤에 위치한다.
// - `Symbol` key는 객체에 추가된 당시의 순서를 유지하면서 제일 마지막에 위치한다.

// number(index)로 인식하는 key는 다음과 같다.

// - 0 이상의, 첫째자리가 0이 아닌 수는, 문자열로 입력해도 똑같이 숫자로 인식한다.
// - 첫째자리가 0인 두자리 이상의 숫자는 문자열로 입력해야 하고, 문자열로 인식한다.
// - 음수는 문자열로 입력해야 하고, 문자열로 인식한다.

// **&there4; 'index'로 인식할 수 있는 경우에 한해서만 작은 수부터 나열한다.**

// 열거순서를 엄격히 지키는 경우는 다음과 같다.

// - `Object.getOwnPropertyNames()`
// - `Reflect.ownKeys()`
// - `Object.assign()`

// ES5 하위문법인 다음의 경우에는 정합성을 보장하지 않는다.

// - `for in`
// - `Object.keys()`
// - `JSON.stringify()`