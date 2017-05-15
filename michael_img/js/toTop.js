//文档加载完毕后执行
window.onload = function(){

	//获取dom元素
	var obtn = document.getElementById("back-top");

	//获取用户界面的可视高度
	var clientHeight = document.documentElement.clientHeight;

	var timer = null;
	var isTop = true;

	//滑动滚轮触发事件绑定
	window.onscroll = function(){
		//获取滚动条距离顶部的高度
		var osTop = document.documentElement.scrollTop||document.body.scrollTop;

		if(osTop>=clientHeight){
			obtn.style.display='block';
		}else{
			obtn.style.display='none';
		}

		if(!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}

	//点击事件绑定
	obtn.onclick = function(){

		//定时器
		timer = setInterval(function(){
			//获取滚动条距离顶部的高度
			var osTop = document.documentElement.scrollTop||document.body.scrollTop;
			//让回到顶部的速度慢慢变慢
			var ispeed = Math.ceil(osTop/6);

			document.documentElement.scrollTop = document.body.scrollTop = osTop-ispeed;

			//设置boolean值，回到顶部的过程中被打断则停止
			isTop = true;

			//回到顶部的时候关闭定时器
			if(osTop==0){
				clearInterval(timer);
			}
		},30);

		
	};
}