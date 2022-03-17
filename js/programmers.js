// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.
function solution01(a,b){
    let star = "*";
    for(let i = 0; i < b; i++){
        let num = '';
        for(let j= 0; j < a; j++){
             num += star;
        }
        console.log(num + '<br>');
    }
}
solution01(5,3);


// 함수 solution02는 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution02를 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.
function solution02(x, n) {
    var answer = [];
    let num = 0;
    if(x >= -10000000 && x <= 10000000 && n <= 1000){
        answer.push(x)   
        for(let i = 0; i < n -1; i++){
            num += x;
            answer.push(num + x)   
        }
    }
    return answer;
}

solution02(2,5);


// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution03을 완성해주세요.

// 제한 조건
// s는 길이 4 이상, 20이하인 문자열입니다.
function solution03(phone_number) {
    var answer = '*'.repeat(phone_number.length-4) + phone_number.slice(-4);

    return answer;
}
solution03("01033334444");


// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution04를 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
function solution04(arr1, arr2) {
    var answer = new Array();
    for(var i = 0; i < arr1.length; i++) {
        answer[i] = new Array();
        for(var j = 0; j < arr1[i].length; j++)
            answer[i][j] = arr1[i][j] + arr2[i][j];
    }
    return answer;
}

solution04([[1, 2], [2, 3]], [[3, 4], [5, 6]]);


// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution05를 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다..
function solution05(arr) {
    var answer = arr.reduce((a,b) => a + b)/arr.length;
    return answer;
}
solution05([1,2,3,4]);


// 1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.
// 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution06을 완성해 주세요. 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

// 제한 사항
// 입력된 수, num은 1 이상 8000000 미만인 정수입니다
function solution06(num) {
    var answer = 0;
    if(num === 1){
        return answer; 
    }
    while(answer < 500){
        answer++;
        if(num % 2 === 0){
            num = num / 2;
        }else{
            num = num * 3 +1;
        }
        if(num === 1){
            return answer;
        }
         
    }
    return -1;
}
solution06(6)

// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution07을 완성해주세요

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.
function solution07(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}
solution07(3);


// 함수 solution08은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
function solution08(n){
    var answer = (n + '').split('');
    console.log(answer)
    answer.sort(function(a,b) {return b - a})
    return Number(answer.join(''));
}
solution08(118372);

// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
function solution09(n) {
    
    var answer = (n + '').split('');
    var result = [];
    
    for(let i = answer.length -1; i >= 0; i--){
        result.push(Number(answer[i]))
    }
    console.log(result);
    return result;
}
solution09(12345);

// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution10 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
function solution10(n)
{
    var answer = (n + '').split('');
    let result = 0;
    for(let i = 0; i < answer.length; i++){
        result += Number(answer[i]);
    }
    return result;
}
solution10(987);

// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution11을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
function solution11(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            answer += i
        }
    }
    
    return answer;
}
solution11(12);


// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution12를 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.

function solution12(s) {
    var answer = Number(s);
    
    return answer;
}
solution12("1234");


// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution13을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.
function solution13(n) {
    var answer = '수박';
    var result = "";
    for(let i = 0; i < n; i++){
        result += answer[i%2]
    }
    return result;
}
solution13(3);


// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution14를 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.
function solution14(seoul) {
    return "김서방은 " + seoul.indexOf("Kim") + "에 있다";
}
solution14(["Jane","Kim"])