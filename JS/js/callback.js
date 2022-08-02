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