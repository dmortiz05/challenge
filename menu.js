$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.bt-menu').click(function(){
 
		if(contador == 1){
			$('ul').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('ul').animate({
				left: '-100%'
			});
		}
	});
};

var borroso = function(){
	var menu = document.getElementById("cuerpo");
	
	if(menu.className==""){
		menu.className = "sombreado";
	}
	else{
		menu.className = "";
	}
};