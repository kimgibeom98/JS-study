// function logMessage(value : any) {
//     console.log(value)
// }

// logMessage('hello');
// logMessage(100);

// 유니온 타입 - 한가지 이상의 타입을 쓰고싶을때.

let type1: string | number | boolean;
function logMessage(value: any | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number')
}

logMessage('hello');
logMessage(100);

interface DeveloperNew {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  agePerson: number;
}

// 인터페이스를 이용한 유니온타입은 공통된 속성만 사용가능
function askSomeone(someone: DeveloperNew | Person) {
  // someone.name
  // someone.skill;
  // someone.age;
}
// 유니온타입을 사용할경우 선택해서 사용 가능
askSomeone({name : '디벨로퍼', skill : '웹 개발'});
askSomeone({name : '캡틴', agePerson : 100});

// 인터섹션 타입
function askSomeone02(someone: DeveloperNew & Person) {
  // someone.name
  // someone.skill;
  // someone.agePerson;
}
// 인터섹션을 사용할경우 두개의 타입을 모두 포함해야함
askSomeone02({name : '디벨로퍼', skill : '웹 개발'});
askSomeone02({name : '캡틴', agePerson : 100});
