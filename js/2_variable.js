// 1. JavaScript에서 변수 선언 방식인 var, let, const 각각의 차이점에 대해 알아보자.

// 1-1. var (변수 재선언 가능, 변수 재할당 가능 )
//  var i = 'javascript'
//  console.log(i); //javascript

//  var i = 'variable'
//  console.log(i); //variable
    
//  i = 'Assignment'
//  console.log(i); //Assignment
// 우선, var는 변수의 재선언, 재할당이 모두 가능하다.

// 그 말인 즉, 유연한 변수 선언이 가능해 편리하게 사용할 수 있다는 점이 장점이 되지만, 기존에 선언해둔 변수의 존재를 잊고 중복 선언을 할 위험과 어디에서 어떻게 사용 되는지 파악하기 힘들다는 단점이 있다. 이러한 단점들때문에 최대한 사용을 지양한다.

// 그래서 ES6 이후, 이를 보완하기 위해 추가 된 변수 선언 방식이 let과 const 이다.

// 1-2. let (변수 재선언 불가능, 변수 재할당 가능)
//    let i = 'javascript'
//    console.log(i); //javascript

//    let i = 'variable'
//    console.log(i); // cannot redeclare block-scoped variable
    
//    i = 'Assignment'
//    console.log(i); //Assignment
// var와 다르게 let은 재선언 시 변수를 다시 선언할 수 없다는 에러가 출력된다.

// 하지만, 아래와 같이 재할당 시 에러없이 정상적으로 출력되는걸 확인할 수 있다.

//    i = 'Assignment'
//    console.log(i); //Assignment
// 1-3. const (변수 재선언 불가능, 변수 재할당 불가능)
//    const i = 'javascript'
//    console.log(i); //javascript

//    const i = 'variable'
//    console.log(i);  // cannot redeclare block-scoped variable
   
//    i = 'Assignment'
//    console.log(i); //cannot assign to 'i' because it is a constant
// const는 var와 반대로 변수의 재선언, 재할당이 모두 불가능하다.

// 이처럼 const는 constant(상수)를 뜻하기 때문에 한 번만 선언이 가능하며 값을 바꿀 수도 없다.

// 2. 호이스팅 이란?
// 호이스팅이란 코드가 실행하기 전 변수선언/함수선언이 해당 스코프의 최상단으로 끌어 올려진 것 같은 현상을 말한다.
// 호이스팅에 대해 알아보기전 변수가 어떻게 생성되는지 알아볼 필요가 있다.
// 2-1 변수의 3단계 생성과정
// 1. 선언단계 : 변수를 실행 컨텍스트의 변수객체(Variable Object)에 등록한다. 이 변수 객체는 스코프가 참조하는 대상이 된다.

// 2. 초기화 단계: 변수객체(Variable Object)에 등록된 변수를 위한 공간을 메모리에 확보한다. 이 단계에서 변수는 undefined로 초기화된다.

// 3. 할당 단계 : undefined로 초기화된 변수에 실제 값을 할당한다.

// 2-2 변수의 호이스팅
// 1. var
// console.log(i); //undefined
// var i = 1;
// 이 코드는 에러가 나지않고 undefined를 리턴한다. 그 이유는 JavaScript가 호이스팅을 하면서 아래와 같은 방식으로 코드를 해석하기 때문이다.

// var i = 1;
// console.log(i); //undefined
// 2. let / const
// var와 같은 방법으로 코드를 작성하면

// console.log(i); //ReferenceError: let is not defined
// let i = 1;

// console.log(i); //ReferenceError: const is not defined
// const i = 2; 
// 에러가 나타나게된다. 그 이유는 let,const 키워드로 선언된 변수는 호이스팅이 되어 선언단계가 이루어지지만 초기화 단계는 실제 let,const가 사용된 코드에 도착했을 때 이루어진다. 초기화 단계 이전에 변수에 접근하려하면 에러가 발생하게된다.

// var가 에러가 나지 않은 이유는 선언단계와 초기화단계가 동시에 이뤄지기 때문이다.

// 3. 그렇다면 언제 어떻게 사용하면 좋을까?
// var : let과 const는 ES6에서 등장한 키워드이기 때문에 ES6를 지원하지 않는 옛날 브라우저 문제를 해결할 때 사용하는 것이 좋다.
// let : 값을 선언한 이후 변할 때 사용하는 것이 좋다.
// const : 재할당이 이뤄지지 않고 변하지 않는 상수값에 사용하는 것이 좋다.
// 요약

// var (재선언 가능, 재할당 가능)
// let (재선언 불가능, 재할당 가능)
// const (재선언 불가능, 재할당 불가능)
// 호이스팅이란 코드가 실행하기 전 변수선언/함수선언이 해당 스코프의 최상단으로 끌어 올려진 것 같은 현상
// 변수의 3단계 진행과정 -
// 선언단계 -> 초기화단계 -> 할당단계
// var, let, const는 모두 호이스팅 된다.
// var는 웬만하면 사용하지말고 let과 const를 사용하자.