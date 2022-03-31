// function - etc.

// `name` property of function


// function a () { }
// console.log(a.name)

// const b = function () { }
// console.log(b.name)

// const c = function cc () { }
// console.log(c.name)

// const d = () => {}
// console.log(d.name)

// const e = {
//   om1: function () {},
//   om2 () {},
//   om3: () => {}
// }
// console.log(e.om1.name, e.om2.name, e.om3.name)

// class F {
//   static method1 () {}
//   method2 () {}
// }
// const f = new F()
// console.log(F.method1.name, f.method2.name)



// const g = new Function()
// console.log(g.name)



// function a () { }
// const b = function () { }
// const h = a.bind(b)
// console.log(h.name)


// const person = {
//   _name: '재남',
//   get name () {
//     return this._name
//   },
//   set name (v) {
//     this._name = v
//   }
// }
// const descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor.get.name)
// console.log(descriptor.set.name)


// `new.target`

// function Person (name) {
//   if (this instanceof Person) {
//     this.name = name
//   } else {
//     throw new Error('new 연산자를 사용하세요.')
//   }
// }
// var p1 = new Person('재남')
// console.log(p1)

// var p2 = Person('성훈')
// console.log(p2)

// var p3 = Person.call({}, '곰')
// console.log(p3)

// var p4 = Person.call(p1, '곰')
// console.log(p4)


// function Person (name) {
//   console.dir(new.target)
//   if (new.target !== undefined) {
//     this.name = name
//   } else {
//     throw new Error('new 연산자를 사용하세요.')
//   }
// }

// const p1 = new Person('재남')
// console.log(p1)

// const p2 = Person('성훈')
// console.log(p2)

// const p3 = Person.call({}, '곰')
// console.log(p3)

// const p4 = Person.call(p1, '곰')
// console.log(p4)



// function Person (name) {
//   const af = n => {
//     this.name = n
//     console.log(new.target)
//   }
//   af(name)
// }
// const p1 = new Person('재남')
// const p2 = Person('성훈')


// function Person (name) {
//   this.name = name
// }
// function Android (name) {
//   Person.call(this, name)
// }
// const p1 = new Android('재남봇')



// function Person (name) {
//   console.log(new.target)
//   if (new.target === Person) {
//     this.name = name
//   } else {
//     throw new Error('Person 생성자함수를 new로 호출해야 해요!')
//   }
// }
// function Android (name) {
//   Person.call(this, name)
// }
// const p2 = new Android('재남봇')

// 블록스코프 내에서의 함수 선언과 호이스팅 (브라우저 비교)


// if (true) {
//   a()
//   function a () { console.log(true) }
// }
// a()


// a()
// if (true) {
//   a()
//   function a () { console.log(true) }
// }


// if (true) {
//   a()
//   function a () { console.log(true) }
//   if (true) {
//     a()
//     function a () { console.log(false) }
//   }
// }
// a()


// 'use strict'
// if (true) {
//   a()
//   function a () { console.log(true) }
//   if (true) {
//     a()
//     function a () { console.log(false) }
//   }
// }
// a()

// strict mode 가 아닌경우 브루아저마다 다른 동작. 예상이 안됨..mode
// strict mode 에서는 함수선언문도 블락스코프에 갇힌다.

// 'use strict'
// if (true) {
//   function a () { console.log(true) }
//   a()
// }
// a()

// es6 에서는 함수선언문 arrow function, 객체에서는 메소드 축약형 사용하는걸 추천

