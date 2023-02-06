// function logText<T>(text : T ) : T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이');

// function logText(text : strgin ) : strgin {
//     console.log(text);
//     return text;
// }

// function logNumber(text : number ) : number {
//     console.log(text);
//     return text;
// }
//  중복선언시(string과 number 따로따로) - 코드가 지전분함,

// function logText(text : string | number ) {
//     console.log(text);
//     return text;
// }
// const a = logText('a');
// a.split(); // 사용불가


//  유니온으로 선언시 - 반환값이 명확하지 않아서 함수사용 X

// 위와 같은 문제들을 제네릭으로 아래와 같이 해결

function logText<T>(text : T ) : T {
    console.log(text);
    return text;
}
const str = logText<string>('abc');
str.split('');

const login = logText<boolean>(true);

// 제네릭 - 타입을 비워놓은 상태에서 타입에 뭐가 들어가는지 호출하는 시점에서 정의함.