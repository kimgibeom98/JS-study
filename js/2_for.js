// 이번에는 ES6 이후에 새롭게 추가된 for in문과 for of의 차이점에 대해서 간단히 알아보자.

// > for ...in

// 배열에서의 for ...in문은 배열의 **index**값을 반환한다. 배열뿐만 아니라 문자열도 같은 개념으로 다룰 수 있다.
// ```
// const data = [10,20,30,40];

//     for(let key in data){
//         console.log(key);
//     }
    
//     // 0
//     // 1
//     // 2
//     // 3
    
    
// const data = ["forin", "forof"];

//     for(let key in data){
//         console.log(key);
//     }
    
//     // 0
//     // 1
// ```
// 하지만 아래와 같이 사용한다면 **value**값도 같이 반환할 수 있다.
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

// ---

// > for...of

// 배열에서의 for ...of문은 배열의 **value**값을 반환한다. for..of문도 마찬가지로 배열 뿐만 아니라 문자열도 같은 개념으로 다룰 수 있다.
// ```
// const data = [10,20,30,40];

//     for(let key of data){
//         console.log(key);
//     }
    
//     // 10
//     // 20
//     // 30
//     // 40
    
    
// const data = ["forin", "forof"];

// 	for(let key of data){
//        console.log(key);
//  }
    
//     // forin
//     // forof
// 
// searchIndex(["a", "b", "c", "d"], "c")
// 내가 선택한 알파벳이 몇번째 인덱스값을 가지고 있는지 구해보자.
function searchIndex(arr,char) {
    let data = arr;
    for(let i in data){
        if(data[i] === char){
            return i;
        }
    } 
    return null;
}
  console.log(searchIndex(["a", "b", "c", "d"],"c"));