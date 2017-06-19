
function test(){
	
	for(let i=1;i<3;i++){
		console.log(i)
	}
	//console.log(i);
}
//test();
function last(){
	const PI =3.1415926;
	const k={
		a:1
	}
	k.n=3;
	console.log(PI,k);
}
last();

/*  
let 类似于var 但是属于块作用域的声明,let只在块作用域生效
"use strict";//启动严格模式, ES6默认开启
const 和let一样都是块作用域的声明,声明的时候必须赋值
const 用于声明常量,所以一般声明的内容不能更改
*/