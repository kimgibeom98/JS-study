// 고차함수 예제풀이
function data(a){
    return a * 3
} 
function solution(arr, fn){
    let num = arr;
    let char = [];
    for(let i  of num){
            char.push(fn(i));
    }
    return char;
}


console.log(solution([1,2,3,4,5], data))

