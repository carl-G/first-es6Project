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
		},
		//拦截key in object
		has: function(target,key) {
			if(key === 'name') {
				return target[key];
			} else {
				return false;
			}
		},
		deleteProperty: function(target,key) {
			if(key.indexOf('_') > -1) {
				delete target[key];
				return true;
			} else {
				return target[key];
			}
		},
		// Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，返回一个数组
		ownKeys: function(target) {
			return Object.keys(target).filter(item=>item!='name');
		}
	});
	console.log(objProxy.time);	
	objProxy.name = 'carl';
	console.log(objProxy.time,objProxy);
	console.log('has','name' in objProxy,'time' in objProxy);
	// delete objProxy.name;
	// console.log('delete',objProxy);	
	// delete objProxy._r;
	// console.log('delete',objProxy);	
	console.log('ownkeys',Object.keys(objProxy));
}

{
	let obj = {
		time:'2017-01-01',
		name:'cs6',
		_r:123
	};
	console.log(Reflect.get(obj,'name'));
	Reflect.set(obj,'name','carl');
	console.log(Reflect.get(obj,'name'));

	console.log('has...',Reflect.has(obj,'time'));

}

{
	//小Tips测试
	class Person{
		constructor(name,age) {
			this.name = name;
			this.age = age;
			return validator(this,personValidators);
		}
	}
	function validator(target,validator) {
		return new Proxy(target,{
			_validator:validator,
			set(target,key,value,proxy) {
				//是否存在key
				if(target.hasOwnProperty(key)) {
					let va = this._validator[key];

					if(!!va(value)) {
						return Reflect.set(target,key,value,proxy)
					} else {
						throw Error(`不能设置${value}到${key}`);
					}
				} else {
					throw Error(`${key} 不存在`)
				}
			}
		})
	}
	const personValidators = {
		name(val) {
			return typeof val === 'string'
		},
		age(val) {
			return typeof val === 'number' && val >18
		}
	}
	const person = new Person(22,30);
	person.name = 111;
	console.log(person)
}