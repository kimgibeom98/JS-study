function higherorder(num, fun){
	for(let i = 0; i < num; i++){
		fun(i)
	}
}

function callfun(nums){
	console.log(nums)
}

higherorder(5, callfun)

// 해당 로직에서는 higherorder 함수가 고차함수, callfun 함수가 콜백함수가 된다.

// CallBack함수란 다른 함수의 파라미터로 넘겨지는 함수를 말한다. 즉 어떤 이벤트에 의해 호출되어지는 함수이다
// 익명함수를 파라미터로 사용하는 방식이 가장 일반적인 패턴이며 또다른 방법으로는 함수를 정의해 해당 함수의 이름을 파라미터로 넘기는 방식이다.

// 파라미터를 통해 콜백함수를 전달받은 함수를 고차함수 라고 한다.