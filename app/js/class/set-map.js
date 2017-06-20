{
	//set 内容不允许重复,重复元素不会生效
	let set = new Set();
	//set 添加内容使用 .add
	set.add(5);
	set.add(7);
	//set 内容的数目 .size
	console.log('size',set.size);
}

{
	let arr = [1,2,3,4,5,6];
	let set = new Set(arr);
	console.log('size2',set.size);
}

{
	//过滤重复时需要考虑数据类型
	let arr = [1,2,3,2,'1',4];
	let set = new Set(arr);

	console.log('unique',set);
}

{
	let arr = ['add','delete','clear','has'];
	let list = new Set(arr);
	//查询是否存在
	console.log('has',list.has('add'));
	//删除元素
	console.log('delete',list.delete('add'));
	//清空元素
	list.clear()
	console.log(list);
}

{
	let arr = ['add','delete','clear','has'];
	let list = new Set(arr);

	//获取keys以及values ~~. .values()可以省略.
	for(let key of list.keys()) {
		console.log('key',key);
	}	

	for(let value of list.values()) {
		console.log('value',value);
	}

	for(let value of list) {
		console.log('value',value);
	}
	for(let [key,value] of list.entries()) {
		console.log('entries',value,key);
	}
	console.log('foreach');
	list.forEach(function(item){console.log(item)})
}

{
	//WeakSet可以应用于对象
	let weakList = new WeakSet();
	let arg = {};
	weakList.add(arg);
	//没有clear,size方法,不能遍历
	console.log('weakList',weakList);
}

{
	let map = new Map();
	let arr = ['123'];
	//map添加使用set()
	map.set(arr,456);
	//map.get(arr) 获取arr的值
	console.log('map',map,map.get(arr));
}

{
	let map = new Map([['a',123],['b',456]]);
	console.log(map);

	console.log('size',map.size);
	console.log('delete',map.delete('a'),map);
	console.log('clear',map.clear(),map);
}

{
	let weakmap = new WeakMap();
}