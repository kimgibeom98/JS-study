/*
    ? function (함수)

    * 기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// * exp.1 다음 구문을 hello() 라는 함수를 만들어 유지보수 하기 쉽게 만들어보기
// document.write("안녕하세요","<br>");
// document.write("안녕하세요","<br>");
// document.write("안녕하세요","<br>");

function hello(){
    let comment = '안녕하세요';
    for (let i = 0; i < 3; i++){
        document.write(comment,'<br>');
    }
}


// 정적 유효범위
let i = 5;

function a(){
    let i = 10;
    b();
}

function b(){
    document.write(i)
}
a();
// 해당함수를 실행시 5가 찍히게된다. 사용될때가 아닌 정의될때에 전역변수가 사용된다. - 정적유효범위 

// 아래 문법 처럼 객체의 속성값으로 담겨진 함수를 메소드(method)라고 부른다
a = {
    b : function(){

    }
}; 

// *exp.2 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수를 만들어보자.
// ! 단 입력값이 0이면 즉시 실행을 멈추게 한다.
function whileplus(){
    
    let result = 0;
    while(true){
        let num = Number(window.prompt('숫자를 입력하세요.'));
        if(num === 0){
            alert("숫자 0. 중지");
            break;
        }
        result += num;
    }
    document.write("최종합계는 : " + result);
}

// whileplus();

// 값으로써의 함수와 콜백
// 함수를 배열에 담아 보았다
function prfun(){
    let input = 1;
    let process = [
        function(input){return input + 10;},
        function(input){return input * input},
        function(input){return input / 2} 
    ];
    for(let i = 0; i < process.length; i++){
         input = process[i](input);
    }
    alert(input);
}
prfun();

//  변수,매개변수,리턴값 등 다양한 용도에 사용하는 함수를  first-class-citizen,object 라고 부른다.

// 클로저 - 자바스크립트가 프라이빗한 변수를 사용할 수 있도록 하는 좋은 메카니즘.(아래 클로저 실용예제 참고.)
function outter(){
    let title = 'hellow';
    function inner(){
        alert(title);
    }
    inner();
}

// 위에 소스를 실행시 inner라는 내부함수가 outter라는 외부함수의 지역변수에 접근할 수 있다 이러한것을 클로저라 한다.

// 클로저 실용예제.
function factory_movie(title){
    return{
        get_title : function(){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
let ghost = factory_movie('ghost in the shell');
let matrix = factory_movie('matrix');
ghost.set_title('공각기동대'); // ghost의 get_title도 '공각기동대' 로 변경됨 , 변수 matrix에는 아무 지장없음.

console.log(ghost.get_title());

 