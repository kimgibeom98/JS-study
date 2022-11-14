function solution(participant, completion) {
    const arr = [];
    for(let i = 0; i < participant.length; i++){
        if(!completion.includes(participant[i])){
            arr.push(participant[i]);
        }
    }
    // console.log(arr.join(""))
    return arr.join();
}