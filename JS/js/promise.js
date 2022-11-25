function isPositive(number, resolve, reject) {
    setTimeout(() => {
      if (typeof (number) === 'number') {
        resolve(number >= 0 ? "양수" : "음수")
      } else {
        reject("주어진 값이 숫자형 값이 아닙니다.")
      }
    }, 2000)
  }
  
  // isPositive([], (res) => {console.log(res)}, (err) => {console.log(err)});
  
  // 위에 호출부를 promise로 수정
  
  function isPositiveP(number) {
    const executor = (resolve, reject) => {
      setTimeout(() => {
        if (typeof (number) === 'number') {
          resolve(number >= 0 ? "양수" : "음수")
        } else {
          reject("주어진 값이 숫자형 값이 아닙니다.")
        }
      }, 2000)
    }
  
    const asyncTask = new Promise(executor);
    return asyncTask;
  }
  
  const res = isPositiveP(2);
  
  // res.then((res) => {
  //     console.log(res)
  // })
  // .catch((err)=> {
  //     console.log(err)
  // })
  
  
  function testkA(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = a + b;
        resolve(res);
      }, 2000);
    })
  }
  
  function testkb(a) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = a * 2;
        resolve(res);
      }, 1000);
    })
  }
  
  
  function testkc(a) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = a * -1;
        resolve(res);
      }, 1000);
    })
  }
  
  // then체이닝
  testkA(2,3)
  .then((a_res)=>{
    console.log(a_res);
    return testkb(a_res);
  })
  .then((b_res)=>{
    console.log(b_res);
    return testkc(b_res);
  })
  .then((c_res)=>{
    console.log(c_res)
  })
  
  
  // 아래처럼 분리가능
  
  const bpromiseresult =  testkA(2,3).then((a_res)=>{
    console.log(a_res);
    return testkb(a_res);
  })
  
  
  const cpromiseresult = bpromiseresult.then((b_res)=>{
      console.log(b_res);
      return testkc(b_res);
    })
  
  cpromiseresult.then((c_res)=>{
    console.log(c_res)
  })
  