// 이번에는 ES6 이후에 새롭게 추가된 for in문과 for of의 차이점에 대해서 간단히 알아보자.

// > for ...in

// **배열**에서의 for ...in문은 배열의 **index**값을 반환한다
// ```
// const data = [10,20,30,40];

//     for(let key in data){
//         console.log(key);
//     }
    
//     // 0
//     // 1
//     // 2
//     // 3
    
// ```
// 하지만 아래와 같이 사용한다면 **value**값을 반환할 수 있다.
// ```
//  const data = [10,20,30,40];

//     for(let key in data){
//         console.log(data[key]);
//     }

//     // 10
//     // 20
//     // 30
//     // 40
// ```

// 그렇다면 **객체**에서 의 for...in 문은? 아래처럼 객체의 프로퍼티가 나오는것을 확인할 수 있다.

// ```
// const data = {name : "forin", age : 25};

//     for(let key in data){
//         console.log(key);
//     }
    
//     // name
//     // age
// ```

// **객체**도 마찬가지로 아래처럼 사용한다면 **value**값을 반환할 수 있다.
// ```
// const data = {name : "forin", age : 25};

//     for(let key in data){
//         console.log(data[key]);
//     }
    
//     // forin
//     // 25
// ```

// ---

// > for...of

// **배열**에서의 for ...of문은 배열의 **value**값을 반환한다.
// ```
// const data = [10,20,30,40];

//     for(let key of data){
//         console.log(key);
//     }
    
//     // 10
//     // 20
//     // 30
//     // 40
    
// ```

// 그렇다면 **객체**에서 의 for...of 문은? 
// ```
// const data = {name : "forin", age : 25};

//     for(let key of data){
//         console.log(key);
//     }
    
//     // Uncaught TypeError: data is not iterabl

// ```

// 결과값은 TypeError이다. 이유는 Object는 iterable하지 않다고 한다. iterable이란 "반복이 가능한"이란 뜻으로 Object는 반복이 가능하지 않다는 것이다. 간단히 말해서 길이와 순서가 있지 않은 것이다. (Array, String등은 길이와 순서가 있다)

// ---

// > **요약**
// for...in 은 객체의 반복에서 사용
// for...of 는 배열의 반복에서의 사용

// 으로 간단하게 정리할 수 있다.
// 
// searchIndex(["a", "b", "c", "d"], "c")
// 내가 선택한 알파벳이 몇번째 인덱스값을 가지고 있는지 구해보자.
// function searchIndex(arr,char) {
//     let data = arr;
//     for(let i in data){
//         if(data[i] === char){
//             return i;
//         }
//     } 
//     return null;
// }
//   console.log(searchIndex(["a", "b", "c", "d"],"c"));

