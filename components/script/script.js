//requires
var $ = require('jquery');
var jquery_ui = require('jquery-ui');
var TweenMax = require('gsap');
var ScrollMagic = require('scrollmagic');
var animation_gsap = require('./plugin/jquery.ScrollMagic.js');
var animation_gsap = require('./plugin/animation.gsap.js');
var debug_addIndicators = require('./plugin/debug.addIndicators.js');
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

//secondary nav height
function checkSize(){

  if ($("#secondary_nav").css("float") == "right" ){
  	var winheight = $(window).height();
    $('#secondary_nav').css('height', winheight * 2);	
		$( "#secondary_nav" ).switchClass( "wide", "narrow");
	}//if
	else if ($("#secondary_nav").css("float") == "none" ){
		$('#secondary_nav').removeAttr("style");
		$( "#secondary_nav" ).switchClass( "narrow", "wide");
	}//else
}//checkSize



		function test(){
		if ($("#secondary_nav").css("float") == "right" ){
			 	var	scene = new ScrollMagic.Scene({
					triggerElement: '#projects',
					offset: -10,
					triggerHook:0
				}).setPin('.narrow ul').addTo(controller)
				$detach(".scrollmagic-pin-spacer")
	}//if
	else if ($("#secondary_nav").css("float") == "none" ){
			$detach(".scrollmagic-pin-spacer")
				var	scene = new ScrollMagic.Scene({
					triggerElement: '#secondary_nav',
					offset: 0,
					triggerHook:0
				}).setPin('.wide').addTo(controller);		
				$detach(".scrollmagic-pin-spacer")
		}//else
	}//checkSize








//ScrollMagic
	var controller = new ScrollMagic.Controller();
	var	scene = new ScrollMagic.Scene();
		
	//second_nav slide in effect
	var scndNavXslid = function(){
				TweenLite.fromTo('#secondary_nav', 0.6, {opacity:.3, width:0 }, {opacity:1, width:130, delay:0.4, ease:Elastic.easeOut});
				TweenMax.staggerFrom(".btn", 2, {x:-100, scale:0, opacity:0, delay:0.9, ease:Elastic.easeOut}, 0.2);
				}//function 
	var scndNavYslid = function(){
					TweenLite.from('#secondary_nav', 1.3, {opacity:.3, height:0,delay:0.5, ease:Elastic.easeOut});
					TweenMax.staggerFrom(".btn", 2, {y:-50, scale:0, opacity:0, delay:0.9, ease:Elastic.easeOut}, 0.3);
					}//function

	


//document ready//
$(function(){


	//calling fullheight
		fullheight('.fullheight', 1);
		fullheight('.fullheightMid', 1.3);
	
	//secondary nav heigh
		 // run test on initial page load
    checkSize();
test();
    // run test on resize of the window
    $(window).resize(checkSize);
    $(window).resize(test);
 
 	//ScrollMagic Pin:

 // 	var	scene = new ScrollMagic.Scene({
	// 	triggerElement: '#projects',
	// 	offset: -10,
	// 	triggerHook:0
	// }).setPin('.narrow ul').addTo(controller)

	// var	scene = new ScrollMagic.Scene({
	// 	triggerElement: '#secondary_nav',
	// 	offset: 0,
	// 	triggerHook:0
	// }).setPin('.wide').addTo(controller);		
	


		


	
	



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

	
