// for in문은 배열의 인덱스 값을 불러온다. 하지만 아래와 같이 표현하면 배열의 벨류값도 불러올 수 있다.
// ex)  
// let data = [1,2,3,4];
// for(let i in data){
//     console.log(data[i]);
// }

// for of 문은 배열의 벨류 값을 불러온다. 



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