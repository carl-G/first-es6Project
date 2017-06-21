{
	//数据结构与数组对比
	let map = new Map();
	let arr = [];

	//增
	map.set('t',1);
	arr.push({t:1});

	console.log('对比',map,arr);
	//查
	let map_seist = map.has('t');
	let arr_seist = arr.find(item => item.t);
	console.log('对比查',map_seist,arr_seist);
	//改
	map.set('t',2);
	arr.find(item =>item.t = 2);
	console.log('对比改',map,arr);
	//删
	map.delete('t');
	let arrIndex = arr.findIndex(item => item.t)
	arr.splice(arrIndex,1);
	console.log('对比删',map,arr);
}
{
	// set-arr的对比
	let set = new Set();
	let arr = [];
	//增
	set.add({t:1});
	arr.push({t:1});
	console.log('set-arr的对比',set,arr);
	//查
	let set_seist = set.has({t:1});
	let arr_seist = arr.find(item => item.t);
	console.log('set-arr对比查',set_seist,arr_seist);
	//改
	set.forEach(item=>item.t?item.t = 2 : '');
	arr.find(item =>item.t = 2);
	console.log('set-arr对比改',set,arr);
	//删
	set.forEach(item=>item.t?set.delete(item):'');
	let arrIndex = arr.findIndex(item => item.t)
	arr.splice(arrIndex,1);
	console.log('set-arr对比删',set,arr);
}

{
	// set-map-obj对比
	let item = {t:1};
	let map = new Map();
	let set = new Set();
	let obj = {};

	//增
	map.set('t',1);
	set.add(item);
	obj['t'] = 1;
	console.log(map,set,obj);
	//查
	let map_exist = map.has('t');
	let set_exist = set.has(item);
	let obj_exist = 't' in obj;
	console.log('set-arr对比查询',map_exist,set_exist,obj_exist)
	// 改
	map.set('t',2);
	item.t = 2;
	obj['t'] = 2;
	console.log('set-arr对比修改',map,set,obj)
	//删
	map.delete('t');
	set.delete(item);
	delete obj['t'];
	console.log('set-arr对比删除',map,set,obj)
}