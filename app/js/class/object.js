{
	//简洁表示法
	let o = 1;
	let k = 2;
	let es5 = {
		o:o,
		k:k
	};
	let es6 = {
		o,
		k
	};
	console.log(es5,es6);

	let es5_method = {
		hello:function() {
			console.log('hello');
		}
	}
	let es6_method = {
		hello() {
			console.log('hello');
		}
	}
	console.log(es5_method.hello(),es6_method.hello());
}

{
	//属性表达式
	let a = 'b';
	let es5_obj = {
		a:'c',
		b:'c'
	}

	let es6_obj = {
		[a] : 'c'//[]里面可以是表达式
	}
	console.log(es5_obj,es6_obj);
}

{
	//新增API
		//Object.is功能上和'==='没有区别
	console.log('字符串',Object.is('abc','abc'),'abc' === 'abc')
	console.log('数组',Object.is([],[]),[] === [])

	//潜复制
	console.log('拷贝',Object.assign({a:'a'},{b:'b'}));

	let test = {k:123,o:456};

	for(let [key,value] of Object.entries(test)) {
		console.log([key,value]);
	}
}

{
	//扩展运算符 es7提案
	// let {a,b,...c} = {a:'test',b:'kill',c:'add',d:'ccc'};
	// c = {
	// 	c:'add',
	// 	d:'ccc'
	// }
}