window.onload = function () {

var down1 = document.getElementById('str2');
var down2 = document.getElementById('str1');
var text = document.getElementById('lp__box__text');
var img = document.getElementById('lp__img');
var content = document.getElementById('blog__cnv1');
down1.onclick = function() {
	text.style.marginLeft = "9rem";
	text.style.transition = "margin 2s linear";
	img.style.left = "4rem";
	img.style.transition = "left 2s linear";
	setTimeout(function(){
		content.style.opacity = "0";
		content.style.transition = "opacity 1s linear";
	}, 2000);
}
down2.onclick = function() {
	text.style.marginLeft = "9rem";
	text.style.transition = "margin 2s linear";
	img.style.left = "4rem";
	img.style.transition = "left 2s linear";
	setTimeout(function(){
		content.style.opacity = "0";
		content.style.transition = "opacity 1s linear";
	}, 2000);
}
	
}