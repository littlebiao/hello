function load_scrip(url,callback){

	var script = document.creatElement('script');
	script.type = "text/javascript";
	if(script.readyState){
		script.onreadystatechange = function(){
			if(script.readyState =='loaded'||script.readyState == 'complete'){
				script.onreadystatechange = null;
				callback();
			}
		}
	}else{
		script.onload = function(){
			callback();
		}
	}
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}