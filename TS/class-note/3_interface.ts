interface User {
    age : number;
    name: string;
}

// 변수에 인터페이스 활용
let seho : User = {
    age : 33,
    name : '세호'
}

// 함수에 인터페이스 활용
function getUser(user : User) {
    console.log(user)
}

const capt = {
    name : '캡틴',
    age : 100
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용

interface SumFunction {
    (a : number, b : number) : number
}

let sum : SumFunction;
sum = function(a : number, b : number) : number {
    return a + b;
}

// 인덱싱
interface stringArray {
     [index : number] : string
}

let arr02 : stringArray = ['a', 'b', 'c'];
arr02[0] = '10'

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key : string] : RegExp;
}

let obj02 : StringRegexDictionary = {
    cssFile : /\.css$/ 
}

Object.keys(obj02).forEach(function(value) {});

// 인터페이스 확장

interface person {
    name : string,
    age : number
};

interface Developer extends person {
    Language : string
}

let captain : Developer = {
    Language : 'ts',
    name : '캡틴',
    age : 100
}