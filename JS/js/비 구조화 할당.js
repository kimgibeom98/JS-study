// 배열의 비 구조화 할당
let arr = ["one","two","three"];
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// console.log(one, two, three);

// 위에 코드를 아래처럼 축약가능

let [one1, two1, three1] = arr;
let [one2, two2, three2] = ["one","two","three"];
let [one3, two3, three3, four="four"] = ["one","two","three"];
// console.log(one, two, three)


let a = 10;
let b = 20;
[a, b] = [b, a];
// 값 스왑하기


// 객체의 비 구조화 할당
let object = {one : "oneval", two : "twoval", three : "threeval", name : "gibeom"};
// let one = object.one;
// let two = object.two;
// let three = object.three;
// console.log(one, two, three);

//  위에 코드를 아래처럼 축약가능
// let {one, two, three, name} = object
// console.log(name, one, two, three);

// 위와같이 하면 변수값이 key값과 고정이 이 방식을 아래처럼 해결 가능

let {one : onech, two, three, name : myname, abc ="four"} = object
console.log(myname, onech, two, three, abc);