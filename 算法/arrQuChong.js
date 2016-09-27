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


//
function arryQuChong(arry){
	var temp = [];
	for(var i = 0;i < arry.length;i++){
		if(arry.indexOf(arry[i]) == i)
			temp.push(arry[i])
	}
	return temp;
}