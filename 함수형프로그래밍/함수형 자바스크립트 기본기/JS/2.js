// # 일급 함수
// - 함수가 값으로 다뤄질 수 있다.

// # 고차 함수
// - 함수를 값으로 다루는 함수

// ## 함수를 인자로 받아서 실행하는 함수
// - apply1
// - times

// const apply = f => f(1);
// const add2 = a => a + 2;
// console.log(apply(add2)) //3
// console.log(apply(a => a - 1)) //1

const times = (f,n) => {
    let i  = -1;
    while(++i < n )f(i)
}
console.log(console.log,3);


// ## 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)
// - addMaker

const gibeom = a => b => a + b;
const add10 = gibeom(10);
console.log(add10(5)); //15
console.log(add10(10));  //20