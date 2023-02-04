function PersonFn(name, age) {
  this.name = name;
  this.age = age;
}

let captfn = new Person('캡틴', 100);

// 위와 아래는 같은코드 문법차이.

class Person {
  constructor(name, age) {
    console.log('생성 되었습니다.')
    this.name = name;
    this.age = age;
  }
}

let gibeom = new Person('기범', 26);
console.log(gibeom) // Person{name : "기범", age : 26}  - 객체로 만드어줌.


// protytype
let user = { name: 'capt', age: 100 }
let admin = {}

admin.__proto__ = user; // {name : 'capt', age : 100}
admin.name // 'capt'
admin.age // 100
admin.role = 'admin'