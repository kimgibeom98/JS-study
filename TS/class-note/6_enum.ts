enum shoesnum {
    Nike, 
    Adidas
}
// 이넘 - 값을 할당하지 않으면 초기값은 0부터 1씩 증가
let myShoesNum = shoesnum.Nike;
console.log(myShoesNum) //0


enum shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}
let myShoes = shoes.Nike;
console.log(myShoes) //나이키

// 드롭다운등의 어떤 목록이 필요한 형태에서 이넘을 사용

// 예제
enum Answer {
    Yes = "Y",
    No = "N"
}
function askQuestion(answer:Answer) {
    if(answer === Answer.Yes){
        console.log('정답입니다.')
    }
    if(answer === Answer.No){
        console.log('오답입니다.')
    }
}
askQuestion(Answer.Yes);