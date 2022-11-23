function iskoreanFood(food){
    if(["불고기", "떡볶이", "비빔밥"].includes(food)){
        return true;
    }
    return false;
}
const food1 = iskoreanFood('불고기');



const gteMeal01 = (mealType) => {
    if(mealType === '한식') return "불고기";
    if(mealType === '양식') return "파스타";
    if(mealType === '중식') return "멘보샤";
    if(mealType === '일식') return "초밥";
    return "굶기";
};
console.log("한식")

// 위에 코드를 아래처럼 축약 가능

const meal = {
    한식 : "불고기",
    중식 : "멘보샤",
    일식 : "초밥",
    양식 : "스테이크",
    인도식 : "카레"
}

const getMeal = (mealType) => {
    return meal[mealType] || "굶기"
}
console.log(getMeal("한식"))