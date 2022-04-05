// # 제너레이터/이터레이터
// - 제너레이터: 이터레이터이자 이터러블을 생성하는 함수
function* gen() {
    yield 1;
    if (false) yield 2;
    yield 3;
  }

  let iter = gen();
  log(iter[Symbol.iterator]() == iter);
  log(iter.next());
  log(iter.next());
  log(iter.next());
  log(iter.next());

  for (const a of gen()) log(a);
  console.clear();