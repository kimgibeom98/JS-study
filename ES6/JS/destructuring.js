// 배열 해체할당

// 사용법

// 기본

// var colors = ['red', 'white', 'orange']
// var first = colors[0]
// var second = colors[1]
// var third = colors[2]
// console.log(first, second, third)

// 위와같은 코드를 아래처럼 표현 가능
// const colors = ['red', 'white', 'orange']
// const [first, second, third] = colors
// console.log(first, second, third)

// 발췌

// const colors = ['red', 'white', 'orange']
// const [ , , third, fourth] = colors
// console.log(third) // white

// 활용

// rest parameter 와의 연동


// const arr = [1, 2, 3, 4, 5]
// const [ a, ...b ] = arr
// const [ , , ...c ] = arr
// console.log(a, b, c) // 1 [2,3,4,5]  [3,4,5]

// default parameter와의 연동

// const [a = 10, b = 20] = [undefined, 5]
// const [c, d = c * 2] = [5]
// const [e = f, f] = [undefined, 10]

// 다차원 배열에서

// const arr = [1, [2, [3, 4], 5], 6]
// const [a, [b, [ , c], ], d] = arr
// console.log(a, b, c, d) 1, 2, 4, 6


// 값 교환하기

// let a = 10
// let b = 20
// let c = a
// a = b
// b = c
// console.log(a, b) // a = 20 b = 10

// let a = 10;
// let b = 20;
// [a, b] = [b, a]
// console.log(a, b) // a = 20 b = 1


