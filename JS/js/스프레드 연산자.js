// const cookie = {
//     base : "cookie",
//     madein : "korea"
// };

// const chocochipCookie = {
//     base : "cookie",
//     madein : "korea",
//     toping  : "chockchip"
// };

// const blueberryCookie = {
//     base : "cookie",
//     madein : "korea",
//     toping  : "blueberry"
// };

// const strawberryCookie = {
//     base : "cookie",
//     madein : "korea",
//     toping  : "strawberry"
// };

// 위에 코드를 아래처럼 축약가능 

const cookie = {
    base : "cookie",
    madein : "korea"
};

const chocochipCookie = {
    ...cookie,
    toping  : "chockchip"
};

const blueberryCookie = {
    ...cookie,
    toping  : "blueberry"
};

const strawberryCookie = {
    ...cookie,
    toping  : "strawberry"
};
console.log(chocochipCookie)


const noTopingCookies = ['촉촉한쿠키','안촉촉한쿠키'];
const topingCookies = ['바나나쿠키','블루베리쿠키','딸기쿠키','초코칩쿠키'];
const allcookies = [...noTopingCookies, "함정쿠키", ...topingCookies];
console.log(allcookies);