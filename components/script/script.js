var $ = require('jquery');

$(function(){

	//get window height
	var winheight = $(window).height(); 

	$('.fullheight').css('height', winheight);	
	$(window).resize(function(){
		var winheight = $(window).height();
		$('.fullheight').css('height', winheight);
	})

//blur effect
	var $blur = $('.tiles a img');

		$blur.mouseenter(function(){
			$blur.removeClass('deactivate');
			$blur.addClass('active');
			$(this).removeClass('active')

			$blur.mouseleave(function(){
				$blur.addClass('deactivate');
				
			})
		})

	$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1050);
        return false;
	      }
	    }
	  });
	});


	//
	$('#projects').scroll(function(){
		
	})

	//ScrollMagic
	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({
		triggerElement: '#projects'
	})
	.setPin('#nav').addTo(controller);

});