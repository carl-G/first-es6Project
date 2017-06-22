//{
// 	//基本定义 es5
// 	let ajax = function(callback) {
// 		console.log('执行');
// 		setTimeout(function(){
// 			callback&&callback.call();
// 		},1000);
// 	}
// 	ajax(function() {
// 		console.log('timeout1');
// 	})
// }

// {
// 	//基本定义 es6
// 	let ajax = function() {
// 		console.log('执行2');
// 		return new Promise(function(resolve,reject){
// 			setTimeout(function() {
// 				resolve()
// 			},1000);
// 		})
// 	};
// 	ajax().then(function(){
// 		console.log('resolve');
// 	});
// }
// {
// 	//基本定义 es6promise延伸
// 	let ajax = function() {
// 		console.log('执行3');
// 		return new Promise(function(resolve,reject){
// 			setTimeout(function() {
// 				resolve()
// 			},1000);
// 		})
// 	};
// 	ajax()
// 		.then(function(){
// 			return new Promise(function(resolve,reject){
// 				setTimeout(function() {
// 					console.log('延伸1');
// 					resolve();
// 				},1000);
// 			})
// 		})
// 		.then(function(){
// 			return new Promise(function(resolve,reject){
// 				console.log('延伸2');
// 			})
// 		})
// }
{
	let ajax = function(num) {
		console.log('执行4');
		return new Promise(function(resolve,reject){
			if(num > 4) {
				resolve();
			} else {
				throw new Error('出错了')	
			}
		})
	};
	ajax(5)
		.then(function() {
			return new Promise(function(resolve,reject) {
				console.log('num',6);
			})
		})
		.catch(function(err) {
			console.log('catch',err);
		})
	ajax(2)
		.then(function() {
			return new Promise(function(resolve,reject) {
				console.log('num',6);
			})
		})
		.catch(function(err) {
			console.log('发生错误',err);
		})
}

{
	//图片全部加载后才出现
	function loadImg(src) {
		return new Promise(function(resolve,reject) {
			let img = document.createElement('img');
			img.src = src;
			img.onload = function() {
				resolve(img);
			}
			img.onerror = function(err) {
				reject(err);
			}
		})
	}
	function showImgs(imgs) {
		imgs.forEach(function(img) {
			document.body.appendChild(img);
		})
	}

	// Promise.all全部执行完毕再进入then
	Promise.all([
		loadImg('http://xuanyuan.hz.dreamer-web.com/attachments/2017/04/1491984306a4f39ac9ca4037b5.jpg'),
		loadImg('http://xuanyuan.hz.dreamer-web.com/attachments/2017/04/1491985736b38da4240e5b0492.jpg'),
		loadImg('http://xuanyuan.hz.dreamer-web.com/attachments/2017/04/14919858311abba20ea07b8b5b.jpg')
	]).then(showImgs);
}

{
	//图片加载一个便显示,先到先得;
	function loadImg(src) {
		return new Promise(function(resolve,reject) {
			let img = document.createElement('img');
			img.src = src;
			img.onload = function() {
				resolve(img);
			}
			img.onerror = function(err) {
				reject(err);
			}
		})
	}
	function showImag(img) {
		let div = document.createElement('div');
		div.appendChild(img);
		document.body.appendChild(div);
	}
	// Promise.race里面一个执行完毕 就进入then
	Promise.race([
		loadImg('http://xuanyuan.hz.dreamer-web.com/attachments/2017/04/1491984306a4f39ac9ca4037b5.jpg'),
		loadImg('http://xuanyuan.hz.dreamer-web.com/attachments/2017/04/1491985736b38da4240e5b0492.jpg'),
		loadImg('http://xuanyuan.hz.dreamer-web.com/attachments/2017/04/14919858311abba20ea07b8b5b.jpg')
	]).then(showImag);
}