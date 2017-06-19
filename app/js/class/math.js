{
	//es6二进制以0B开头
	console.log(0b110);
	//es6八进制以0o开头
	console.log(0o767);
}

{
	//值是否有尽(是否无穷尽)首先需要是数字
	//Number.isFinite
	console.log('15',Number.isFinite(15));
	console.log('NaN',Number.isFinite(NaN));	
	console.log('1/0',Number.isFinite(1/0));	

	console.log('NaN',Number.isNaN(NaN));
	console.log('0',Number.isNaN(0));

}

{
	//Number.isInteger 是否为整数 
	console.log('25',Number.isInteger(25));
	console.log('25.0',Number.isInteger(25.0));
	console.log('25.1',Number.isInteger(25.1));

	console.log('string',Number.isInteger('25.0'));

}

{
	//2的53次方 JS中数字的最大值以及最小值
	console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)
	//判断是否在安全数范围内
	console.log('10',Number.isSafeInteger(10));
	console.log('a',Number.isSafeInteger('a'));

}

{
	//取整
	console.log(4.1,Math.trunc(4.1));
	console.log(4.9,Math.trunc(4.9));

}

{

	//判断是正数,负数还是0
	console.log('-5',Math.sign(-5));
	console.log('0',Math.sign(0));
	console.log('5',Math.sign(5));
	console.log('50',Math.sign('50'));
	console.log('foo',Math.sign('foo'));
}

{
	//二的次方
	console.log('-1',Math.cbrt(-1));
	console.log('8',Math.cbrt(8));
}