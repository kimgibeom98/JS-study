// *exp.1 지금까지 배웠던 JS를 배열을 활용해 출력해보자.
function array(){
    let data = ['if문', 'switch문', 'while문', 'for문'];
    let num = 0;
    for(i = 0; i < data.length; i++){
        num++;
        document.write(num + '.'+  data[i] + '<br>');
    }
}

// *exp.2 역반복 배열
function reversearray(){
    let array = ['사과', '포도', '바나나', '망고'];
    let num = array.length + 1;
    for(i = array.length -1 ; i >= 0; i--){
        num--;
        document.write(num + '.' + array[i] + '<br>');
    }
}

// ex3. arr은 숫자배열
// n은 숫자배열에 +해줄 값을 넘겨야함

// solution 함수 자체는 
// 첫번째 인자로 숫자배열을받고,
// 두번째 인자로 숫자배열에 더해줄 값을 받으면된다
// 그 후 결과를 return
function solutuon(arr, char){
    let data = arr;
    let char = [];
    for(let i of data){
        char.push(i + 3);
    }
    console.log(char);
    return char;
}

//ex4. 인자로 받은 arr을 전부 곱해서 return

function solution1(arr) {
    return arr.reduce((a,b) => a * b);
}

console.log(solution1([1, 2, 3, 4, 5, 7, 8]));


//ex5. 1. arr element중 3이상만 필터링해서 return
    // 2. reduce 안에서 중복된 수는 없애기

    function solution2(arr) {
        const set  = arr.filter(a => a >= 3)
        
        const total = set.reduce((a,b) => a.includes(b) ? a: [...a,b],[])
        return total
        
    }
    console.log(solution2([3, 5, 7, 3, 5, 6, 8]));

    // 위에 소스는 메모리공간 활용에 효율적이지 않아 아래소스로 변경

    function solution3(arr) {
        return arr
        .filter((a) =>  a >= 3)
        .reduce((acc, cur) => {
            if(!acc.includes(cur)){
                acc.push(cur);
            }
            return acc;
        }, []);
    }
    
      console.log(solution3([3, 5, 7, 3, 5, 6, 8]));


//ex6. 오브젝트 이름별 점수의 합계를 리턴해라. 
function solution3(arr) {
    const scorenum = arr.reduce((acc, cur) => {
      const name = cur.name;
      const targetIndex = acc.findIndex((i) => i.name === name);
      if (targetIndex >= 0) {
        acc[targetIndex] = { name, score: acc[targetIndex].score + cur.score };
      } else {
        acc.push({ name, score: cur.score  });
      }
      return acc;
    }, []);
    return scorenum;
  }
    console.log(solution3([
        { name: "김민규", score: 1 },
        { name: "김민규", score: 6 },
        { name: "김민규", score: -2 },
        { name: "최기영", score: 1 },
    ]));


    // ex7 입력받은 숫자만큼 'abc'를 출력해라.


    function solution(num) {
        let data = 'abc';
        let total = ''
    
        for(let i = 0; i < num; i ++ ){
    
            if(i % 3 === 0){
                total += data[0];
            }else if(i % 3 === 1){
                total += data[1];
            }else if(i % 3 === 2) {
                total += data[2];
            }
            
        }
        return total
    }
      console.log(solution(4));

    //   위에코드를 간소화

    function solution(num) {
        let data = 'abc';
        let total = ''
    
        for(let i = 0; i < num; i ++ ){
            total += data[i%3]
        }
          
        return total;
    }
      console.log(solution(4));

    //   위에 코드를 배열로

    function solution(num) {
        let data = ['a','b','c'];
        let total = []
    
        for(let i = 0; i < num; i ++ ){
            total.push(data[i%3]) 
        }
        
        return total.join("");
    }
      console.log(solution(4));
