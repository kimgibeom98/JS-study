const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '후드티', price: 30000},
    {name: '바지', price: 25000}
  ];

//   # map

const map = (f, iter) => {
    let res = [];
    for (const a of iter) {
      res.push(f(a));
    }
    return res;
  };

  // let names = [];
  // for (const p of products) {
  //   names.push(p.name);
  // }
  // log(names);

  console.log(map(p => p.name, products));

  // let prices = [];
  // for (const p of products) {
  //   prices.push(p.price);
  // }
  // log(prices);

  console.(map(p => p.price, products));

  // # 이터러블 프로토콜을 따른 map의 다형성

  console.log([1, 2, 3].map(a => a + 1));

  console.log(map(el => el.nodeName, document.querySelectorAll('*')));

  // const it = document.querySelectorAll('*')[Symbol.iterator]();
  // log(it.next());
  // log(it.next());
  // log(it.next());
  // log(it.next());
  // log(it.next());

  function* gen() {
    yield 2;
    if (false) yield 3;
    yield 4;
  }

  log(map(a => a * a, gen()));

  let m = new Map();
  m.set('a', 10);
  m.set('b', 20);
  log(new Map(map(([k, a]) => [k, a * 2], m)));


  // # filter

  const filter = (f, iter) => {
    let res = [];
    for (const a of iter) {
      if (f(a)) res.push(a);
    }
    return res;
  };

  // let under20000 = [];
  // for (const p of products) {
  //   if (p.price < 20000) under20000.push(p);
  // }
  // log(...under20000);

  console.log(...filter(p => p.price < 20000, products));

  // let over20000 = [];
  // for (const p of products) {
  //   if (p.price >= 20000) over20000.push(p);
  // }
  // log(...over20000);

  log(...filter(p => p.price >= 20000, products));

  log(filter(n => n % 2, [1, 2, 3, 4]));

  log(filter(n => n % 2, function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }()));
