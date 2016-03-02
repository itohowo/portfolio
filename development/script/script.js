var winheight = $(window).height(); //get the height of the window

$(function(){
	winheight;
	$('.fullheight').css('height', winheight);
	$(window).resize(function(){
		winheight = $(window).height();
		$('.fullheight').css('height', winheight);
	})
});