//requires
var $ = require('jquery');
var jquery_ui = require('jquery-ui');
var enquire = require('enquire.js');
var TweenMax = require('gsap');
var ScrollMagic = require('scrollmagic');
var animation_gsap = require('./plugin/jquery.ScrollMagic.js');
var animation_gsap = require('./plugin/animation.gsap.js');
var debug_addIndicators = require('./plugin/debug.addIndicators.js');
var Clipboard = require('clipboard');
//function ready below!!!


//ScrollMagic vars
var controller = new ScrollMagic.Controller();
var	scene = new ScrollMagic.Scene();

//second_nav slide in effect



	var scndNavYslid = function(){
		TweenLite.from('#secondary_nav', 1.3, {opacity:.3, height:0,delay:0.5, ease:Elastic.easeOut});
		TweenMax.staggerFrom(".btn", 2, {y:-50, scale:0, opacity:0, delay:0.9, ease:Elastic.easeOut}, 0.3);
	}

var sideNavFrom = 
	{
		delay:0.4,
		opacity:0,
		scale:-0,
		ease: Back.easeOut.config(2),
	} 
var btnsFrom =
	 {
	 	scale:0,
	  opacity:0,
	  delay:1.2,
	  ease:Elastic.easeOut
	}




// var barTween = TweenMax.from("#secondary_nav", 1, sideNavFrom, 0.5)

// var sidNavBtnTween = TweenMax.staggerFrom(".btn", 1.5, btnsFrom, .2 )


		var	side = new ScrollMagic.Scene({
			triggerElement: '#projects',
			offset: -30,
			triggerHook:0,
			pushFollowers: false,

		})

	var	wide = new ScrollMagic.Scene({
				triggerElement: '#secondary_nav',
				offset: 0,
				triggerHook:0,
				pushFollowers: false
		})


// 

	//get window height

var winheight = $(window).height(); 
function fullheight(selector, tims){
	winheight
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

		$( "#secondary_nav" ).switchClass( "wide", "side");
		
	}//if
	else if ($("#secondary_nav").css("float") == "none" ){
		$('#secondary_nav').removeAttr("style");

		$( "#secondary_nav" ).switchClass( "side", "wide");

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

 	//class toggles
	new ScrollMagic.Scene({triggerElement: "#projects", duration:winheight})
					.setClassToggle("#toprojects", "marked") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#about", duration:winheight})
					.setClassToggle("#toabout", "marked") // add class toggle
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

//screen width
 	enquire.register("screen and (min-width:980px)", {

 			 match : function(){
	    	wide.remove().removePin();//wide remove

	    	side
	    	.setPin('#secondary_nav ul')
	    	.addIndicators()
	    	.addTo(controller);	
	    	} 
 	})
	enquire.register("screen and (max-width:980px)", {

	    match : function(){
	    	side.remove().removePin();//side remove

	    	wide
	    	.setPin('#secondary_nav')
	    	.addIndicators()
	    	.addTo(controller);
	     	}  
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

  //copy to clipboard:

  var clipboard = new Clipboard('.social-email');
  
	clipboard.on('success', function(e) {
	    console.info('Action:', e.action);
	    console.info('Text:', e.text);
	    console.info('Trigger:', e.trigger);

	    e.clearSelection();
	});

	clipboard.on('error', function(e) {
	    console.error('Action:', e.action);
	    console.error('Trigger:', e.trigger);
	});

});//doc.ready

	
