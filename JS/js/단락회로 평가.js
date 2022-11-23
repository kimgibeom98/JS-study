const geName = (person) => {
    if(!person){
        return '객체가 아닙니다.'
    }
    return person.name;
}

let person;
const name = geName(person);

// 위에 코드를 아래처럼 간소화 가능 


const getName = (person) => {
     const name02 = person && person.name;
     return name02 || "객체가 아닙니다."
}

let person02 = null;
const name02 = geName(person);
console.log(name02)