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