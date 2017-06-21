{
	let obj = {
		time:'2017-01-01',
		name:'cs6',
		_r:123
	};
	var objProxy = new Proxy(obj,{
		get: function(target,key) {
			return target[key].replace('2017','2018');
		},
		set: function(target,key,value) {
			if(key === 'name') {
				return target[key] = value;
			} else {
				return target[key];
			}
		}
	});
	console.log(objProxy.time);	
	objProxy.name = 'carl';
	console.log(objProxy.time,objProxy);	
}