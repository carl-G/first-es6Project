{
	class Parent {
		constructor(name="carl") {
			this.name = name;
		}
	}
	let parent = new Parent();
	console.log(parent)
}
{
	//类的继承
	class Parent {
		constructor(name="carl") {
			this.name = name;
		}
	}
	class Child extends Parent {
		constructor(name = 'son') {
			super(name);
			this.name = name;
			this.type = 'child';
		}
	}
	let child = new Child();
	console.log(child)
}

{
	class Parent {
		constructor(name="carl") {
			this.name = name;
		}
		get className() {
			return 'es6' + this.name;
		}
		set className(val) {
			this.name = val;
		}
	}
	let parent = new Parent();
	console.log('getting',parent.className);
	parent.className = 'abcd';
	console.log('setting',parent.className);
	parent.name = "sss";
	console.log(parent.name);

}

{
	//静态方法
	class Parent {
		constructor(name="carl") {
			this.name = name;
		}
		static statics() {
			console.log('this is static function')
		}
	}
	//let parent = new Parent;
	Parent.statics();
}

{
	//静态属性
	class Parent {
		constructor(name="carl") {
			this.name = name;
		}
	}
	Parent.type = 2;
	//经测试,只能使用本体,不能使用实例化~
	//let parent = new Parent();
	console.log(Parent.type);
}