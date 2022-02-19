/*
    ? while
    * while 반복문은 조건이 참일 경우 무한 반복한다.
    * (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만, 
    *     용도를 구분지어 사용하는 것이 좋다.)
    * 정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    * 전송(java,php...), DB데이터 출력하기.

*/

// *exp.1 pw '1234'가 입력되면 '접속승인', 아니면 '잘못입력했습니다.'
function pwCheck(){
   var pw = window.prompt('숫자를 입력하세요');

    while(true){
        if(pw === '1234'){
            alert('접속승인')
            break;
        }else{
            alert('잘못입력했습니다.');
        }
    }
}
// *exp.2 while continue
function whileContinue(){
    var i = 1;
    while(i<=10){
        i++;
        continue;
        // continue문 아래에 있는 실행해야 하는 문장들을 건너 뛰고, 다음 반복을 시작한다. 

        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}

// *exp.3 while Break
function whileBreak(){
    var i = 1;
    while (i <= 10){
        i++;
        break;
        document.write(i+'<br>');
    }
    document.write('최종 i =' + i + '<br>');
}

//ex.4 구구단 숫자를 입력받아 출력하는 while문.

function gugudan(){
    var gugunnumber = window.prompt('실행시킬 숫자를 입력하세요.');
    var i = 0;
    while(i <= 9){
        // 9까지 실행
        var result = gugunnumber* i;
        document.write(gugunnumber + 'X' + i + '=' + result + '<br>');
        i++;
    }
}

//ex.5 end가 입력될 때 까지 숫자를 계속해서 입력받아 입력값 합을 출력하고, prompt에는 몇번 수행 했는가에 대한 "x 번째 입력" 이 표시되야함. 

function sumNumb(){
    var i = 1; //? 카운트 변수
    var result = 0; //? 결과를 담을 변수
    while(true){
        var numb = window.prompt(i+"번째 입력"); //? 무한 루프로 입력받기.
        if(numb=="end"){ //? end 라는 값과 일치하면
            alert('입력이 종료되었습니다.');
            break; //? 루프 중단 및 종료alert 출력
        }else{
            result += parseInt(numb); //? 결과변수에 형변환후 더해서 저장.
            document.write("현재까지의 총합 : " + result + "<br>"); //? 저장된 result 값을 출력.
            i++; //? 수행할 때마다 카운트 중가.
        }
        
    }
}