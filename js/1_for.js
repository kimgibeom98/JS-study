/*
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    실무사용의 예
    1. 게시판의 게시글 목록 불러올 때
    2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    4. 갤러리의 이미지 목록을 출력 할 때
    5. os 등의 파일 탐색기의 파일 목록 출력 할 때...

    *루프
    1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계

*/

// ! 단일 for
// *exp.1 이름을 10번 출력해보자.
function namePrint(){

    let name = 'gibeom';
    // let i = 0;
    for(i = 1; i <= 10; i++){
        document.write(name + '</br>') ;
    }
}

// todo.1 이름을 500번찍되, 홀수만 나와야돼.(1,3,5,7,9,11......)
function nameodd(){
    let name = 'gibeom';
    for(i = 1; i <= 500; i++){
        if( i % 2 === 1){
            document.write(i + '.' + name + '</br>');
        }
    }
}

// *exp.7 continue

function forContinue(){
    // let i = 0
    for ( let i = 0; i <= 10; i++){
        continue;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}

function runcontinue(){
    let output = 0;
    for(i = 0; i <= 10; i++){
        if(i % 2 == 1){
            continue;
        }
        output += i
        alert(output);
    }
}

// ! 다중 for

// *exp.1 반절 피라미드
function halfPyramid(){
    for(let i = 1; i <= 10; i++){
        for(let j = 1; j <= i; j++){
            document.write('*');
        }
        document.write('<br>');
    }
}

// *exp.2 역반절 피라미드
function reverseHalfPyramid(){
    for(let i = 10; i >= 1; i--){
        for(let j = 1; j <= i; j++){
            document.write('*');
        }
        document.write('<br>');
    }
}

// *exp.2 피라미드
function Pyramid(){
    // let star = '*';
    for(let i = 1; i <= 10; i++){
        for(let j = 10; j > i; j--){
            document.write('&nbsp');
        }
        for(let h = 1; h <= i; h++){
            document.write('*');
        }
        for(let star = 1; star < i; star++){
            document.write('*');
        }
        document.write('<br>');
    }
}

// *exp.2 역피라미드
function reverspyramid(){
    for(let i = 10; i >= 1; i--){
        for(let j = 10; j > i; j--){
            document.write('&nbsp');
        }
        for(let h = 1; h < i; h++){
            document.write('*');
        }
        for(let star = 1; star <= i; star++ ){
            document.write('*');
        }
        document.write('<br>')
    }
}

//todo.1 구구단 숫자를 입력받아 출력하는 for문.
function gugudan(){
    let number = window.prompt('숫자를 입력하세요');
    for(let i = 0; i < 10; i++){
        let result = number*i;
        document.write( number + 'x' + i + '=' + result +'<br>');
    }
}


// todo.2 배열의 총 합을 구하기. var data = [10,20,30,40,50];

function arrayodd(){
    let data = [10,20,30,40,50];
    let result = 0;
    for(let i = 0; i < data.length; i++){
        result += data[i];
    }
    document.write(result);
}

// function solution(start, end, char) {

// }

// 첫번째 매개변수 start number와
// 두번째 매개변수 end number
// 세번째 매개변수 출력 문자 char를 받는 함수 solution을 작성

// start부터 end까지 그리고 다시 초기값 start까지 줄어들면서 char을
// 찍는 함수를 작성


// 추가조건1. start가 0이하면 1로 셋팅, end가 start보다 작거나, end가 100 이상이면 "실패" 출력후 함수 종료

// 추가조건2. 세번째 매개변수 char은 optional.
// char가 undefined면 *을 기본값으로 사용


// repeat 함수를 사용한 방식
function solution(start, end, char){
    let result = ''
    let endreverse = end - 1;
    for(let i = start; i <= end; i++){
        result = char.repeat(i)
        document.write(result + '<br>');
    }
    for(let i = endreverse; i >= start; i--){
        result = char.repeat(i)
        document.write(result + '<br>');
    }
}

solution(3,5,'$');

// substring 함수를 사용한 방식
function solution(start, end, char){
    let result = ''
    for(let i = start; i <= end; i++){
        result += char
        console.log(result);
    }

    // let result2 = '';
    for(let i = start; i <= end; i++){
        // result += char.substring(1)
        console.log(result.substring(i));
    }
    
}

solution(1,5,'$');


