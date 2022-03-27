// rest parameter (나머지 매개변수)

// function foo (a, b) {
//     a = 1
//     arguments[0] = 2
//     console.log(a, arguments[0]) //2,2
//   }
//   foo(10, 20)

//   const f = function (x, y, ...z) {
//     console.log(z)  // x,y를 제외한 나머지 [true, null, undefined, 10] 가 출력된다.
//   }
//   f(1, 2, true, null, undefined, 10)
  
//   const f = function (...z) {
//     console.log(z)  // [1, 2, true, null, undefined, 10] 가 출력된다.
//   }
//   f(1, 2, true, null, undefined, 10)


// const f = function (_first, ...rest, _last) {
//     console.log(_first, _last) // 에러가 나옴 나머지는 무조건 마지막에.
//   }
//   f(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

