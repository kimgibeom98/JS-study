/*
    ? 조건문
    
    * 실무사용의 예
    * 1. 로그인 후 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
    * 2. 게임같은 경우 자신이 공격을 했을 때 상대방을 타격 했는지 여부를 판별 할 수 있다.
    * 3. 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부를 따질 수 있다.
    * 4. 삭제작업 수행시 사용자가 yes를 눌렀을 때와 no 를 눌렀을 때 수행할지 말지를 결정 할 수있다.
    * 5. slide 같은 ui component 의 좌, 우 방향으로 최대치로 이동 하였는지 판별 할 수있다.

	if(273 < 100){
		//표현식 "273 < 100" 이 참일때 실행 = 거짓이기때문에 당연히 실행안함.
		 alert('273<100=>true');
	}
	alert('종료');
    
    */

    // *case.1 현재시간이 오후인가 오전인가.


$(document).ready(function(){
    avgScore2();
});




    function amORpm(){
        var date = new Date();
        var hour = date.getHours();
        
        if(hour < 12){
            alert('오전입니다.');
        }else if(hour >= 12){
            alert('오후입니다.');
        }
    }
    //?case_2 말일인가 아닌가
    function lastDay(){
        var date = new Date();
        var day = date.getDay();

        if(day < 30){
            alert('아직 말일이 아닙니다.');
        }else{
            alert('말일입니다.');
        }
    }
    //?case_3 아침?점심?저녁?
    function mealTime(){
        var date = new Date();
        var hour = date.getHours();

        if(hour < 11){
            alert('아침먹을시간');
        }else if(hour < 15){
            alert('점심먹을시간');
        }else{
            alert('저녁먹을시간');
        }
    }
    // * exp.1 숫자판별
    function numbJudgment(){
        var numb = prompt('숫자를입력해봐','양,음수상관없음');
        if(numb > 0){
            alert('양수');
        }else if(numb < 0){
            alert('음수');
        }else{ //? 예외처리.
            alert('0 이거나 숫자가 아닙니다.');
            //? 내가 무엇을 놓치고 있는가?
        }
    }
    // todo.1 홀,짝 판별
    function oddOrEven(){
        var numb = prompt('숫자를 입력하세요.','홀,짝 구분가능함');

        // todo. if logic
        if(numb%2 == 0){
            alert('짝수');
        }else if(numb%2 == 1){
            alert('홀수');
        }else{
            alert('숫자가아닙니다.');
        }
    }
    // *exp.3 다음 세과목의 점수를 입력받고 평균을 구한 상, 중, 하 를출력.
    function avgScore2(){
        var koreanScore= prompt(' 국어점수를 입력하시오'); // ? data type = 문자형
        var englishScore= prompt(' 영어점수를 입력하시오');
        var mathScore= prompt(' 수학점수를 입력하시오');
        var avg = ( Number(koreanScore) + Number(englishScore) + Number(mathScore) ) / 3;
        
        
       if(avg >= 90){
           alert('상 입니다.');
       }else if(avg >= 70 ){
           alert('중 입니다. 조금 더 노력하세요');
       }else if(avg < 70){
           alert('하 입니다. 많이 노력하세요');
       }
    }

    // todo.2 사용자 ID(Mark)를 입력받아 맞다면 승인 메시지(승인합니다.) 출력.
    // ? 틀리다면 '잘못된 ID입니다.' 출력.
    function userIDCheck(){
        // ? 선언 및 입력부
        var userID = window.prompt('사용자의 아이디');
        // ? if 처리부
        if(userID == "Mark"){
            //? 출력부
            alert('승인합니다.');
            // ? mainpage 접근권한 부여
        }
        // ? 예외 처리부
        else if(userID != 'Mark'){
            //? 예외 출력부
            alert('잘못된 ID입니다.');
            // ? recall
        }
    }
    //todo.5 사용자 id "gibeom" 과 password"1234"를 입력받고 둘다 맞을 경우에만 승인 메시지 출력. 
    function userInfoCheck(){
        var userID = window.prompt('사용자의 아이디');
        var userPW = window.prompt('사용자의 패스워드');
        if(userID == 'gibeom' && userPW == '1234'){
            alert('Mark님으로 확인되었습니다.');
        }else if(userID != 'gibeom' || userPW != '1234'){
            alert('ID 혹은 Password가 틀렸습니다.');
        }
    }
    //!tune.4 간소화(조건부연산자)
    function userInfoCheck1(){
        var userID = window.prompt('사용자의 아이디');
        var userPW = window.prompt('사용자의 패스워드');
        (userID == "gibeom" && userPW == "1234")? alert("gibeom님으로 확인 되었습니다.") : alert("ID 혹은 Password가 틀렸습니다.");
    }

    //todo.6 사용자 id "mark"와 password"1234"의 정보가 틀릴 경우 틀린 정보에
    //todo.  대한 오류 메시지 출력.
    function userInfoCheck2(){
        // ? 선언 및 입력부
       var userID = window.prompt("사용자의 아이디");
       var userPW = window.prompt("사용자의 패스워드");

        // ? if 처리부
       if(userID=="gibeom"&&userPW=="1234"){
            //? 출력부
            alert("Mark님으로 확인되었습니다.");
        }
        // ? else if 처리부
        else if(userID!='gibeom'){
            //? 출력부
            alert('ID가 존재하지 않습니다.');
            // ? 예외 처리부
        }else{
            //? 예외 출력부
            alert('password가 틀렸습니다.');
        }

    }


//todo hw.1 각 수를 입력 받아 해당하는 조건의 메시지를 출력하라.
//? 1일 경우 "1등 10억", 2일 경우 "2등 5천만원", 3일 경우 "3등 300만원", 그외 수일 경우 "낙첨되었습니다."
function lotto(){
    var lottoinput = window.prompt('숫자를 입력하세요');
    if(lottoinput === '1'){
        alert('축하드립니다. 1등 10억 입니다.');
    }else if(lottoinput === '2'){
        alert('축하드립니다. 2등 5천만원 입니다.');
    }else if(lottoinput === '3'){
        alert('축하드립니다. 3등 300만원 입니다.');
    }else{
        alert('낙첨되었습니다.');
    }
}



//todo hw.2 다음 코드를 간소화 시키시오.
function btnMouseEx(){
    var clickBtn = window.prompt("누르실 마우스 버튼을 입력하세요 (왼쪽,오른쪽,가운데)");

    // if(clickBtn=="오른쪽"){
    //     document.write("오른쪽!");
    // }else if(clickBtn=="왼쪽"){
    //     document.write("왼쪽!");
    // }else if(clickBtn=="가운데"){
    //     document.write("가운데!");
    // }else{
    //     document.write("올바른값을 입력하세요.");
    // }
    
    if(clickBtn=="오른쪽" || clickBtn=="왼쪽" || clickBtn=="가운데" ){
        document.write(clickBtn+"!");
    }else{
        document.write("올바른값을 입력하세요.");
    }
}