var $ = require('jquery');

$(function(){

	var winheight = $(window).height(); //get window height

	$('.fullheight').css('height', winheight);	
	$(window).resize(function(){
		var winheight = $(window).height();
		$('.fullheight').css('height', winheight);
	})
});