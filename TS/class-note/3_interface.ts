interface User {
    age : number;
    name: string;
}

// 변수에 인터페이스 활용
let seho : User = {
    age : 33,
    name : '세호'
}

// 함수에 인터페이스 활용
function getUser(user : User) {
    console.log(user)
}

const capt = {
    name : '캡틴',
    age : 100
}
getUser(capt);
