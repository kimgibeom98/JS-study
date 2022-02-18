// > 1. setTimeout

//  * 함수를 바로 실행하지 않고 타이머처럼 일정 시간이 지난 후에 함수를 실행 시킨다.
//  아래는 기본 문법이다.
// ```
// setTimeout(function() { // Code}, delay);

// ```
// 첫번째 인자로 실행할 코드를 받고, 두번째 인자로 지연시간을 밀리초(ms) 단위로 받는다.
// 위에 문법을 이용하여 예제를 작성해봤다.

// ```
// setTimeout(function(){

//   console.log("Hi"); 

// }, 3000);

// //3초후 함수 실행. 
// ```

// 위에 예제를 실행시키면 3초 뒤에 "Hi"가 출력되는걸 확인할 수 있다.

// 타이머 함수를 설정할 수 있다면? 당연히 이를 중지, 삭제 할 수도 있다. 바로 clearTimeout()함수를 이용하면 된다. 아래 예제는 timeoutID 라는 변수에 담은 후 이를 중지,삭제하는 예제이다.

// ```
// let timeoutID = setTimeout(function(){

//     document.write("Hi"); 
  
//   }, 3000);

//   clearTimeout(timeoutID);
// ```
// 해당 함수를 실행하게 되면 "Hi"는 출력되지 않는다.

// ---

// > 2. setInterval 

// + 함수를 일정 시간동안 반복해서 실행시킨다.
// 아래는 기본 문법이다.

// ```
// setInterval(function() { // Code}, delay);

// ```

// 첫번째 인자로 실행할 코드를 받고 두번째 인자로 몇초당 반복할지를 정한다.
// 위에 문법을 이용하여 예제를 작성해봤다.
// ```
// setInterval(function(){

//     console.log("Hi");
    
// },2000);

// //2초간격으로 "HI"가 출력됨
// ```
// 위에 예제를 실행시키면 2초마다 "Hi"가 출력되는걸 확인할 수 있다.
// setInterval도 마찬가지로 출력을 멈추게 하는 함수가 있다. 바로 clearInterval()함수를 사용하면 중지가 가능하다. 아래 예제는 intervalID 라는 변수에 담은 후 이를 중지 하는 예제이다.

// ```
// let intervalID = setInterval(function(){

//     console.log("hi");
    
// },2000);

// clearInterval(intervalID);
// ```
// 해당 함수를 실행하게 되면 "Hi"는 출력되지 않는다.

// ---


// > **요약**
// setTimeout() 함수는 지정된 시간 간격에 단 한번만 수행이 되고,
// setInterval() 함수는 지정된 시간 간격 마다 코드를 반복적으로 수행한다.
