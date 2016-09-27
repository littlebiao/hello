
//Object.cerate()
function inherit(p){
	if(p == null)throw TypeError();
	if(Object.create){
		return Object.create(p);
	}
	var t = typeof p;
	if(t !='object' && t != 'function')throw TypeError();
	function f(){};
	f.prototype = p;
	return new f();
}


function inherit(p){
	if(p ==null)throw  TypeError();
	if(Object.cerate){
		return Object.create(p);
	}
	var t = typeof p;
	if(t !="object"&&t!='function')
		throw TypeError();
	function f(){};
	f.prototype = p;
	return new f();

}

function func(n) {
	var i = 0,
		k = 2,
		j = 2;
	while(k < n) {
		i = i + 2;
		j = j + 1;
		k = k + j;
	}

	return n - i;
}

var line;
while(line = readline()){
    line = line.split(' ');
    print(func(+line[0]));
}

function func(){
	
}




function sort(num,num2){
	var one = parseInt(read_line())
	var two = parseInt(read_line())
	if(one<=two)return;
	var arr = num.split("");
	var temp= arr.map(function (val){
		return parseInt(val)
	})
	var comp='';
	temp = temp.sort();
	for(var i = 0;i<temp.length;i++){
		if(temp[i]!=0){
			comp+=(temp.splice(i,1))
			break;
		}
	}
	for(var j=0;j<temp.length;j++){
		comp+=temp[j]
	}
	comp=parseInt(comp);
    if(comp==num)
    print("YES") 
    else
     print("NO")

}







































