// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.

function starchopp(a,b){
    let star = "*";
    for(let i = 0; i < b; i++){
        let num = '';
        for(let j= 0; j < a; j++){
             num += star;
        }
        console.log(num + '<br>');
    }
}
starchopp(5,3);


// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

function solution(x, n) {
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

solution(2,5);

// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, phoneeven을 완성해주세요.

// 제한 조건
// s는 길이 4 이상, 20이하인 문자열입니다.

function phoneeven(phone_number) {
    var answer = '*'.repeat(phone_number.length-4) + phone_number.slice(-4);

    return answer;
}
phoneeven("01033334444");