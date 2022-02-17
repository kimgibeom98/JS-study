// 고차함수 예제풀이

//exp.1 3씩 곱해지는 함수를 작성
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


//exp.2 배열이 3 이상만 나오는 함수를 작성 data함수에서 return 값을 boolean으로 받기
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


// exp.3위에 진행했던 배열 문제를 filter함수와 map함수를 이용해서 코드를 간소화하기

// 1. map
function solution2(arr){
    const char = arr.map( a => a * 3);
    return char;
}


document.write(solution2([1,2,3,4,5]))

// 2. filter
function solution2(arr){
    const char = arr.filter(a => a >= 3);
    return char;
}


document.write(solution2([1,2,3,4,5]))

// filter 라는 함수는 조건문을 만족한 요소들을 반환함,
// map은 골백함수가 적용된 새 요소,

// map은 콜백함수가 적용된 새로운 요소를 저장함.- 산술된 값을 리턴
// filter는 조건문을 만족하는 요소들을 반환하는 함수 - 논리연산자 true값을 이용해 배열을 만듬

// map 이 반환하는 새 배열의 요소 개수는 변하지 않지만 filter 가 반환하는 새 배열의 요소 개수는 변한다. filter 는 조건에 따라 요소들이 필터링되어 나오기 때문이다.


// map은 산술된 값만을 리턴해서 배열을 추가.
// filter는 논리연산자의 true값만을 이용해서 배열을 추가


// exp.4 solution([1,2,3,4,5], 함수1, 함수2)
// 함수1에는 map을 이용한 연산함수
// 함수2에는 filter를 이용한 조건함수를 넣어라

// 함수1..
function mapeven(a){
    return a.map(x => x * 3);
}

// 함수2..
function filtereven(b){
    return b.filter(y => y >= 9)
}

function solution(arr, fn, char){
    return char((fn(arr)));
}

document.write(solution([1,2,3,4,5], mapeven, filtereven));

// exp.5  배열중 없는 0~9까지 없는 숫자를 찾아서 더하는 함수를 만들어라.
