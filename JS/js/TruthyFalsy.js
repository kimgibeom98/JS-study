let a = '';
// NaN, "", undefined, null, 0, -0 = false 를 제외한건 true
if(a){
    console.log("true")
}else{
    console.log('flase')
}


const geName = (person) => {
    if(!person){
        return '객체가 아닙니다.'
    }
    return person.name;
}

let person;
const name = geName(person);
console.log(name)