// 고차함수 예제풀이

// 3씩 곱해지는 함수를 작성
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


// 배열이 3 이상만 나오는 함수를 작성 data함수에서 return 값을 boolean으로 받기
function data(a){
    return a >= 3;
} 


function solution(arr, fn){
    const char = [];
    for(let i  of arr){
        if(fn(i)){
            char.push(i);
        }
    }
    return char;
}


document.write(solution([1,2,3,4,5], data))


// 위에 진행했던 배열 문제를 filter함수와 map함수를 이용해서 코드를 간소화하기

