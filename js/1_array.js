// *exp.5 지금까지 배웠던 JS를 배열을 활용해 출력해보자.
function array(){
    let data = ['if문', 'switch문', 'while문', 'for문'];
    let num = 0;
    for(i = 0; i < data.length; i++){
        num++;
        document.write(num + '.'+  data[i] + '<br>');
    }
}

// *exp.6 역반복 배열
function reversearray(){
    let array = ['사과', '포도', '바나나', '망고'];
    let num = array.length + 1;
    for(i = array.length -1 ; i >= 0; i--){
        num--;
        document.write(num + '.' + array[i] + '<br>');
    }
}

// arr은 숫자배열
// n은 숫자배열에 +해줄 값을 넘겨야함

// solution 함수 자체는 
// 첫번째 인자로 숫자배열을받고,
// 두번째 인자로 숫자배열에 더해줄 값을 받으면된다
// 그 후 결과를 return
