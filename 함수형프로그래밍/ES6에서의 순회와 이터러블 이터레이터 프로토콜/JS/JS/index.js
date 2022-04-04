// ## 기존과 달라진 ES6에서의 리스트 순회
// - for i++
// - for of

  const list = [1, 2, 3];
  for (var i = 0; i < list.length; i++) {
    // log(list[i]);
  }
  const str = 'abc';
  for (var i = 0; i < str.length; i++) {
    log(str[i]);
  }
  for (const a of list) {
    log(a);
  }
  for (const a of str) {
    log(a);
  }


// ### Array를 통해 알아보기

  const arr = [1, 2, 3];
  // arr[Symbol.iterator] = null; 값을 해버리면 에러가남 for of문 작동 x set, map도 마찬가지
  let iter1 = arr[Symbol.iterator]();
  for (const a of iter1) log(a);

// ### Set을 통해 알아보기

  const set = new Set([1, 2, 3]);
  for (const a of set) log(a);

// ### Map을 통해 알아보기

  const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
  for (const a of map.keys()) log(a); // a,b,c
  for (const a of map.values()) log(a); // 1,2,3
  for (const a of map.entries()) log(a); // ['a', 1], ['b', 2], ['c', 3]

//   ## 이터러블/이터레이터 프로토콜
// - 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
// - 이터레이터: { value, done } 객체를 리턴하는 next() 를 가진 값
// - 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약


// ### 사용자 정의 이터러블을 통해 알아보기

const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? {done: true} : {value: i--, done: false};
      },
      [Symbol.iterator]() {
        return this;
      }
    }
  }
};
let iterator = iterable[Symbol.iterator]();
iterator.next();
iterator.next();
// log(iterator.next());
// log(iterator.next());
// log(iterator.next());
for (const a of iterator) log(a);

// const arr2 = [1, 2, 3];
// let iter2 = arr2[Symbol.iterator]();
// iter2.next();
// log(iter2[Symbol.iterator]() == iter2);
// for (const a of iter2) log(a);

for (const a of document.querySelectorAll('*')) log(a);
const all = document.querySelectorAll('*');
let iter3 = all[Symbol.iterator]();
log(iter3.next());
log(iter3.next());
log(iter3.next());


// ## 전개 연산자

const a = [1, 2];
// a[Symbol.iterator] = null;
log([...a, ...arr, ...set, ...map.keys()]);