function arryQuChong(arry){
	var temp = [],
	 hash = {},
	 key='';
	 for(var i = 0;i<arry.length;i++){
	 	key =typeof arry[i] +arry[i];//
	 	if(hash[key] !== 1){
	 		temp.push(arry[i]);
	 		hash[key] = 1;
	 	}
	 };console.log(hash)
	 return temp
}


//数组去重
function arryQuChong2(arry){
	var temp = [];
	for(var i = 0;i < arry.length;i++){
		if(arry.indexOf(arry[i]) == i)
			temp.push(arry[i])
	}
	return temp;
}
//冒泡排序
function bubbleSort(arry){
	if(!(arry instanceof Array)) throw TypeError;
	var n = arry.length,
	temp;
	while(--n){
		for(var i=0;i<n;i++){
			if(arry[i]>arry[i+1]){
				temp = arry[i];
				arry[i] = arry[i+1];
				arry[i+1] = temp;
			}
		}
	}
	return arry;
}


//斐波那契数列
function fbnq(n){
	var self = arguments.callee;
	if(n<=2) return 1;
	if(!(n in self)){
		self[n] = self(n-1) + self(n-2);
	}
	return self[n]
}
//输出质数

function zhishu(num){
	var arr = [];
	var flag = false;
    if(num>=2) arr.push(2)
	for(var i = 2;i<num;i++){
		for(var j=2;j<i;j++){
			if(i%j ==0){
				flag =false;
				break
			}
				
			flag = true;
			}
		if(flag)
			arr.push(i);
	}

  return arr
}
function f(test,val){
	var num = 0;
	 for(var i = 0;i<test.length;i++){

		for(var j=i;j<test.length;j++){
			if((test[i]+test[j])==val)
				num++
			console.log(num)
		}
	}
	return num	
}


//随机打乱数组
var arr = [];
arr.sort(function(){
	return 0.5-Math.random();
})


















