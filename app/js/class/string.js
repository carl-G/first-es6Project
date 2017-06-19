{
	console.log('a','\u0061');
	console.log('s','\u20BB7');

	console.log('s','\u{20BB7}');

	let s = '𠮷';
}


{
	let s = '𠮷';
	console.log('length',s.length);
	//返回字符串给定位置的字符(两个字节)
	console.log('0',s.charAt(0));
	console.log('1',s.charAt(1));
	//处理4个字节储存的字符，返回一个字符的码点。
	console.log('at0',s.charCodeAt(0));
	console.log('at1',s.charCodeAt(1));

	let s1 = '𠮷a';
	console.log('length',s1.length);
	//正确处理4个字节储存的字符，返回一个字符的码点。
	console.log('code0',s1.codePointAt(0));
	console.log('code0',s1.codePointAt(0).toString(16));
	console.log('code1',s1.codePointAt(1));
	console.log('code2',s1.codePointAt(2));
}

{
	//es5  不支持超过两个字节
	console.log(String.fromCharCode("0x20bb7"));
	//es6
	console.log(String.fromCodePoint("0x20bb7"));

}

{
	let str = '\u{20bb7}abc';
	//es5
	for(let i = 0;i < str.length;i++) {
		console.log('es5',str[i]);
	}

	//es6
	for(let code of str) {
		console.log('es6',code);
	}
}

{
	let str = 'String';
	console.log('includes',str.includes("c"));
	console.log('start',str.startsWith('str'));
	console.log('end',str.endsWith('ing'));
}

{
	let str = 'abc';
	console.log(str.repeat(2));
}

{
	let name = 'list';
	let info = 'hello world';
	let m = `i am ${name},${info}`;
	let n = 'i am' + ' ' + name + ',' + info ;
	console.log(m,n);
}

{
	console.log('1'.padStart(2,'0'));
	console.log('1'.padEnd(2,'0'));
}

{
	let user = {
		name:'list',
		info:'hello world!'
	};
	abc`i am ${user.name} , ${user.info}`;
	function abc(s,v1,v2){
		console.log(s,v1,v2);
		return s+v1+v2;
	}
}

{
	//防止转义
	console.log(String.raw`Hi\n${1+2}`);
	console.log(`Hi\n${1+2}`);
}