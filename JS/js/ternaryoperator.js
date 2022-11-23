const a = [];

const arrayStatus =  a.length === 0 ? "빈 배열" : "안 빈 배열";
// console.log(arrayStatus)

let b = [];
const result = b ? true : false;
console.log(result)

//학점 계산 프로그램
// 90점 이상 A+
// 50점 이상 b+
// 둘다 아니면 F

let score = 10;

score > 90 
? console.log("A+")
: score > 50 
? console.log("B+") 
: console.log("F");