// *exp.1 지금까지 배웠던 JS를 배열을 활용해 출력해보자.
function array(){
    let data = ['if문', 'switch문', 'while문', 'for문'];
    let num = 0;
    for(i = 0; i < data.length; i++){
        num++;
        document.write(num + '.'+  data[i] + '<br>');
    }
}

// *exp.2 역반복 배열
function reversearray(){
    let array = ['사과', '포도', '바나나', '망고'];
    let num = array.length + 1;
    for(i = array.length -1 ; i >= 0; i--){
        num--;
        document.write(num + '.' + array[i] + '<br>');
    }
}

// ex3. arr은 숫자배열
// n은 숫자배열에 +해줄 값을 넘겨야함

// solution 함수 자체는 
// 첫번째 인자로 숫자배열을받고,
// 두번째 인자로 숫자배열에 더해줄 값을 받으면된다
// 그 후 결과를 return
function solutuon(arr, char){
    let data = arr;
    let char = [];
    for(let i of data){
        char.push(i + 3);
    }
    console.log(char);
    return char;
}


// ex4. solution함수는 숫자배열을 받아서 값이 제일 큰 순서대로 문자열로  return해라 ex) 9,1,0,2 0 -> "9210"
// 조건 힌트
// 1. n으로 시작하는수 우선(9>8>7 …)
// 2. 자릿수 짧은게 우선 (9> 99>990>9999)
// 3. 자릴수가 같으면 더 큰수가 우선

function solution(numbers){
    
}

solution