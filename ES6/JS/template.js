// template literal

// const a = `aaa
// aaa`; /백틱(``)은 줄바꿈이 된다.

// const a = 10
// const b = 20
// const str = `${a} + ${b} = ${ a + b }`
// console.log(str) 10 + 20 = 30
// ${} 안에는 변수,식,함수의호출, 삼항연산자 가 들어갈 수 있다. - 값또는 식이 올 수있다.

// 결국 문자열이므로, 자동으로 toString 처리가 된다. - 백틱은 문자열 이기때문

// console.log(`${[0, 1, 2]}`)
// console.log(`${{a:1, b:2}}`)
// console.log(`${function(){ return 1 }}`) 
// console.log(`${(() => 1 )()}` + 1)


// 중첩된 backtick 처리

// console.log(`Foo ${`Bar`}`)
// console.log(`Foo ${`Bar ${`Baz`}`}`)   -  ${} 로 계속 묶어줘야함

// forEach : for문을 돌리는거랑 같은 개념
// map : for문을 돌려서 새로운 배열을 만드는 목적 return 필수
// reduce : for문을 돌려서 최종적으로 다른 무언가를 만드는 목적 return 필수 

// String.raw

// console.log(`Hello\nWorld!`) 
// console.log(String.raw `Hello\nWorld!`) 
// console.log(String.raw `Hello
// World!`)



