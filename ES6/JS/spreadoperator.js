// spread operator (펼치기 연산자. 전개 연산자)

// 소개

// var birds = ['eagle', 'pigeon']
// var mammals = ['rabbit', 'cat']
// var animals = birds.concat('whale').concat(mammals)
// console.log(animals) //[ 'eagle', 'pigeon', 'whale', 'rabbit', 'cat' ]

// const animals2 = [...birds, 'whale', ...mammals]
// console.log(animals2) //[ 'eagle', 'pigeon', 'whale', 'rabbit', 'cat' ] ...을 사용하면 간결하게 사용 가능


// 배열의 각 인자를 펼친 효과

// const values = [20, 10, 30, 50, 40]
// console.log(20, 10, 30, 50, 40)
// console.log(...values) //[20, 10, 30, 50, 40]

// console.log(Math.max(20, 10, 30, 50, 40))
// console.log(Math.max.apply(null, values))
// console.log(Math.max(...values)) 마찬가지로 ...을사용하면 간결하게 표현 가능

// 앞뒤로 다른 값들을 함께 사용할 수도 있다.

// const values = [3, 4, 5, 6, 7, 8]
// const sum = function (...args) {
//   return args.reduce(function (p, c) {
//     return p + c
//   })
// }
// console.log(sum(1, 2, ...values, 9, 10))

// iterable한 모든 데이터는 펼칠 수 있다.

// const str = 'Hello!'
// const splitArr = str.split('')
// const restArr = [...str]
// console.log(splitArr, restArr) split과 같은 효과를 보여준다.


// push, unshift, concat 등의 기능을 대체할 수 있다.

// let originalArr = [2, 3]
// const preArr    = [-2, -1]
// const sufArr    = [6, 7]

// originalArr.unshift(1)
// originalArr.push(4)
// originalArr = [0, ...originalArr, 5]
// console.log(originalArr)

// const concatArr = preArr.concat(originalArr, sufArr)
// const restArr = [...preArr, ...originalArr, ...sufArr]
// console.log(concatArr, restArr)


// '새로운' 배열이다.

// let originalArray = [1, 2]
// let copiedArray = [...originalArray]
// console.log(originalArray === copiedArray)

// originalArray.push(3)
// console.log(originalArray)
// console.log(copiedArray)


// '얕은복사'만을 수행한다.

// js
// let originalArray = [{
//   first: 'Hello,',
//   second: 'World!'
// }, {
//   first: 'Welcome',
//   second: 'ES6!'
// }]
// let copiedArray = [...originalArray]
// console.log(originalArray[0].first)

// copiedArray[0].first = "Hi,"
// console.log(originalArray[0].first)

