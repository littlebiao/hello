onmessage = function(mes){
	var d = mes.data;
	postMessage(d.a)
}