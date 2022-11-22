const arr = [1,2,3,4];
const newArr = [];

// forEach
arr.forEach((el) => {
    newArr.push(el * 2)
})
// console.log(newArr) for문과 같음

// map
const arr2 = [1,2,3,4];
const newArr2 = arr2.map((el) => el *2);
// console.log(newArr)

// includes
const arr3 = [1,2,3,4];
let number = 3;
// console.log(arr.includes(number))

// indexof
const arr4 = [1,2,3,4];
let number2 = 2;
// console.log(arr.indexOf(number2))

// findIndex
const arr5 = [
    {color : "red"},
    {color : "black"},
    {color : "blue"},
    {color : "green"}
];
let number3 = 2;
// console.log(arr5.findIndex((el) => el.color === "blue")) 해당된 인덱스값 반환

// find
const arr6 = [
    {color : "red"},
    {color : "black"},
    {color : "blue"},
    {color : "green"}
];
let number4 = 2;
// console.log(arr5.find((el) => el.color === "blue")) 객체만 반환


// filter
const arr7 = [
    {num : 1, color : "red"},
    {num : 2, color : "black"},
    {num : 3, color : "blue"},
    {num : 4, color : "green"}
];
// console.log(arr7.filter((el) => el.color === "blue")) 배열로 반환

// slice
const arr8 = [
    {num : 1, color : "red"},
    {num : 2, color : "black"},
    {num : 3, color : "blue"},
    {num : 4, color : "green"}
];
// console.log(arr8.slice(0,2))  원본배열 지장 X 

// concat
const arr9 = [
    {num : 1, color : "red"},
    {num : 2, color : "black"},
];

const _arr9 = [
    {num : 3, color : "blue"},
    {num : 4, color : "green"},
];
// console.log(arr9.concat(_arr9)) 배열 합치기

// sort
let chars = ['나','다','가'];
let num = [0,2,4,3,6,7,8,30,20];
const compare = (a,b) => {
    if(a > b){
        return 1;
    }
    if( a < b){
        return -1
    }
    return 0;
}
// console.log(num.sort(compare)) 숫자형 정렬
// console.log(chars.sort())  원본배열 변경

// join
const arr10 = ['안녕하세요', '김기범님', '또오셨군요'];
// console.log(arr10.join(' ')) 공백안에 구분자를 넣음