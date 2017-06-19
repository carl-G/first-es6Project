{
	//es6 函数新增参数默认值,默认值后不可有没有默认值的参数
	function test(x,y = 'world') {
		console.log('默认值',x,y);
	}
	test('hello');
	test('hello','kill');
}

{
	let x = "test";
	function test2(x,y=x) {
		console.log('作用域',x,y);
	}
	test2('kill');
}

{
	//将数列转化为数组
	function test3(...arg) {
		for(let v of arg) {
			console.log('rest',v);
		}
	}
	test3(1,2,3,4,'a');
}

{
	//将数组打散
	console.log(...[1,2,4]);
	console.log('a',...[1,2,4]);
}

{
	//v是参数=>之后是返回值;
	let arrow = v => v*2;
	let arrow2 = () => 5;

	console.log(arrow(3));
	console.log(arrow2());

}

{
	//尾调用
	function tail(x) {
		console.log('tail',x);
	}
	function fx(x) {
		return tail(x);
	}
	fx(123);
}