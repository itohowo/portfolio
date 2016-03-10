//requires
var $ = require('jquery');
var jquery_ui = require('jquery-ui');
var enquire = require('enquire.js');
var TweenMax = require('gsap');
var ScrollMagic = require('scrollmagic');
var animation_gsap = require('./plugin/jquery.ScrollMagic.js');
var animation_gsap = require('./plugin/animation.gsap.js');
var debug_addIndicators = require('./plugin/debug.addIndicators.js');

//function ready below!!!


//ScrollMagic vars
	var controller = new ScrollMagic.Controller();
	var	scene = new ScrollMagic.Scene();
	
	//second_nav slide in effect
	var scndNavXslid = function(){
			TweenLite.from('#secondary_nav', 0.6, {opacity:.3, width:0, delay:0.4, ease:Elastic.easeOut});
			TweenMax.staggerFromTo(".btn", 2, {scale:0, opacity:0,},{ delay:1.9, scale:1, opacity:1, ease:Elastic.easeOut}, 0.2);
			}//function

	var scndNavXslidOut = function() {
					TweenLite.to('#secondary_nav', 0.5, {delay:0.8, opacity:0, width:0 });
					TweenMax.staggerTo(".btn", 1, {scale:0, opacity:0, delay:0.3, ease:Elastic.easeOut}, 0.2);
			    }

	var scndNavYslid = function(){
			TweenLite.from('#secondary_nav', 1.3, {opacity:.3, height:0,delay:0.5, ease:Elastic.easeOut});
			TweenMax.staggerFrom(".btn", 2, {y:-50, scale:0, opacity:0, delay:0.9, ease:Elastic.easeOut}, 0.3);
			}//function





		var	narrow = new ScrollMagic.Scene({
			triggerElement: '#projects',
			offset: -10,
			triggerHook:0,
			pushFollowers: false
		})

	var	wide = new ScrollMagic.Scene({
				triggerElement: '#secondary_nav',
				offset: 0,
				triggerHook:0,
				pushFollowers: false
		})


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


//++document ready++//
$(function(){


	//calling fullheight
		fullheight('.fullheight', 1);
		fullheight('.fullheightMid', 1.3);
	
	//secondary nav heigh
		 // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);

 
 	//ScrollMagic Pin:
enquire.register("screen and (min-width:980px)", {
	deferSetup : true,
	setup : function() {
        	narrow.on("start", scndNavXslid)
        	.on("leave", scndNavXslidOut)
        	.setPin('#secondary_nav ul').addIndicators().addTo(controller)
    		},

	})
	enquire.register("screen and (max-width:980px)", {
			
    	

	    match : function(){
	    	narrow.remove().removePin();
	    	wide
	    	.setPin('#secondary_nav')
	    	.addIndicators()
	    	.addTo(controller);
					
	    	
	     	},      
	                                
	    unmatch : function(){
	    	wide.remove().removePin();//wide remove

	    	narrow
        	.setPin('#secondary_nav ul').addIndicators().addTo(controller)
				
	    	},    
      
	})
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

	
