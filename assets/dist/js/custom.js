window.onload = function(){
	
		
	if( typeof Cookies.get("mojeIme") === "undefined"){
		Cookies.set('mojeIme', 'Nemanja Mandic', { expires: 7 });
       
	}
	
	
	 console.log(Cookies.get("mojeIme"));
}