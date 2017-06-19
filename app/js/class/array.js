{
	let arr = Array.of(3,4,7,9,11);
	console.log(arr);

	let empty = Array.of();
	console.log('empty',empty);
}

{
	//Array.from:将伪数组转换为数组
	let p = document.querySelectorAll('p');
	let pArr = Array.from(p);
	pArr.forEach(function(item) {
		console.log(item.textContent)
	});

	console.log(Array.from([1,3,5],function(item) {
		return item * 2
	}))
}

{
	//.fill将内容替换参数:1,替换后的内容2,起始位置3,终止位置
	console.log('fill-7',[1,'a',undefined].fill(7));
	console.log('fill,pos',['a','b','c'].fill(7,1,3));

}

{
	
	for(let index of ['1','c','ks'].keys()) {
		console.log('keys',index);
	}

	for(let index of ['1','c','ks'].values()) {
		console.log('keys',index);
	}

	for(let [index,value] of ['1','c','ks'].entries()) {
		console.log('keys',index,value);
	}
}

{
	//copyWithin参数1,那个位置被替换2,从哪个位置开始(替换内容)2,从哪个位置结束(替换内容)
	console.log([1,2,3,4,5].copyWithin(0,3,4));
}

{
	//find寻找符合条件的第一个成员
	console.log([1,2,3,4,5,6].find(function(item){return item > 3}));
	//findIndex寻找符合条件的第一个成员的下标
	console.log([1,2,3,4,5,6].findIndex(function(item){return item > 3}));

}

{
	console.log('number',[1,2,NaN].includes(1));
	console.log('NaN',[1,2,NaN].includes(NaN));

}