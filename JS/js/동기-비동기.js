function testkA(a,b,cb) {
    setTimeout(() => {
        const res = a + b;
        cb(res);
    }, 2000);
}

function testkb(a,cb) {
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1000);
}


function testkc(a,cb) {
    setTimeout(() => {
        const res = a * -1;
        cb(res);
    }, 1000);
}

console.log(testkc(3,(res) => {console.log(res)}))

// testkA(3,4 ,(res) => {console.log(res)});
// testkb(2, (res2) => {console.log(res2)})
// testkc(14, (res2) => {console.log(res2)})


// 골백 지옥 - promise.js에서 골백지옥 해결코드 확인
// testkA(4,5, (a_res) => {
//     console.log(a_res)
//     testkb(a_res, (b_res) => {
//         console.log(b_res)
//         testkc(b_res, (c_res)=> {
//             console.log(c_res); 
//         })
//     })
// })
// console.log('코드끝')