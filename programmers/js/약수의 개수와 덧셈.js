function solution(left, right) {
    let answer = 0;
    for(let i = left; i <= right; i++){
        for(let j = 0; j <= left; j++){
            if(left % j === 0){
                answer = i;
            } 
            if(answer.length % 2 === 0){
                
            }
        }
    }
    console.log(answer)
    // return answer;
}