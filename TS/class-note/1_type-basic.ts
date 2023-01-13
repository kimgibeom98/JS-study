// js 문자열 선언
// let str = 'hello';

// ts 문자열 선언
const str : string = 'hello';

// ts 숫자
const num : number = 10;
// ts 배열
const arr : Array<number> = [1,2,3];
const heroes : Array<string> = ['capt', 'thor', 'hulk', '10'];
const items : number[] = [1,2,3];

// TS 튜플 - 순서의 타입까지 지정
const address : [string, number] = ['gangnam', 100];

// TS 객체
const obj : object = {};
// const person : object = {
//     name : 'capt',
//     age : 100
// };

const person : {name : string, age : number } = {
    name : 'thor',
    age : 1000
} 

// TS 진위값
const show : boolean = true;
