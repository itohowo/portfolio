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
				}//else
		  }//checkSize


//document ready//
$(function(){


	//calling fullheight
		fullheight('.fullheight', 1);
		fullheight('.fullheightMid', 1.3);
	
	//secondary nav heigh
		 // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);

  //ScrollMagic
	var controller = new ScrollMagic.Controller();

		
	//second nav slide in effect
	{
	var scndNavXslid = function(){
		if($("#secondary_nav").css("float") == "right" ){
			TweenLite.fromTo('#secondary_nav', 0.6, {opacity:.3, width:0}, {opacity:1, width:130, delay:0.4, ease:Elastic.easeOut} )
			TweenMax.staggerFrom(".btn", 2, {x:-100, scale:0, opacity:0, delay:0.9, ease:Elastic.easeOut}, 0.2)
			}//if
			else{
			TweenLite.from('#secondary_nav', 0.6, {opacity:.3, height:0,delay:0.5, ease:Elastic.easeOut} )
			TweenMax.staggerFrom(".btn", 2, {y:-50, scale:0, opacity:0, delay:0.9, ease:Elastic.easeOut}, 0.3);
			}	
		}
	}
var scene = new ScrollMagic.Scene({
		triggerElement: '#projects',
		offset: 20,
		triggerHook:0
	}).setTween(scndNavXslid).addTo(controller);	

	//end of slide
scene = new ScrollMagic.Scene({
				triggerElement: '#projects',
				triggerHook:0.5,
				offset:0,
				duration: '110%'
			}).setPin('#secondary_nav').addTo(controller);
	//pin second nav
	

	//end of pin

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

		//smooth mouse
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


});//doc.ready

	
