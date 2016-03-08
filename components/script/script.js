//requires
var $ = require('jquery');
var jquery_ui = require('jquery-ui');
var TweenMax = require('gsap');
var ScrollMagic = require('scrollmagic');
var animation_gsap = require('./plugin/jquery.ScrollMagic.js');
var animation_gsap = require('./plugin/animation.gsap.js');

//function ready below!!!
	//get window height
function fullheight(selector, tims){
	var winheight = $(window).height(); 

	$(selector).css('height', winheight * tims);	
	$(window).resize(function(){
		var winheight = $(window).height();
		$(selector).css('height', winheight * tims);
	})
}

//secondary nav heig
function checkSize(){
		    if ($("#secondary_nav").css("float") == "right" ){

		    	var winheight = $(window).height();
		      $('#secondary_nav').css('height', winheight * 2);	
					$(window).resize(function(){
					winheight
					$('#secondary_nav').css('height', winheight * 2);
					})//resize
					
				}//if
				else{
					$('#secondary_nav').removeAttr("style");
					$(window).resize(function(){
					$('#secondary_nav').removeAttr("style");
					})//resize
				}
		  }//checkSize

$(function(){
		//calling fullheight
		fullheight('.fullheight', 1);
		fullheight('.fullheightMid', 1.3);
	
	//secondary nav heigh
		 // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);

    //Function to the css rule
		


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

	
