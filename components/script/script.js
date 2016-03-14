//requires
var $ = require('jquery');
var jquery_ui = require('jquery-ui');
var enquire = require('enquire.js');
var TweenMax = require('gsap');
var ScrollMagic = require('scrollmagic');
var animation_gsap = require('./plugin/jquery.ScrollMagic.js');
var animation_gsap = require('./plugin/animation.gsap.js');
var Clipboard = require('clipboard');
var debug_addIndicators = require('./plugin/debug.addIndicators.js');
//function ready below!!!

var sideHight
//ScrollMagic vars
var controller = new ScrollMagic.Controller();
var	scene = new ScrollMagic.Scene();
	
	var	navTop = new ScrollMagic.Scene({
			triggerElement: '#cover',
			offset: 0,
			triggerHook:0,
			duration:500,
		})

	var	side = new ScrollMagic.Scene({
			triggerElement: '#projects',
			offset: -30,
			triggerHook:0,
			
		})

	var	wide = new ScrollMagic.Scene({
				triggerElement: '#secondary_nav',
				offset: 0,
				triggerHook:0,
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

  if ($("#secondary_nav").css("float") == "right"){
  	var winheight = $(window).height();
  	$('#secondary_nav').removeAttr("style");
    $('#secondary_nav').css('height', winheight * 2);	
		
	}//if
	else if ($("#secondary_nav").css("float") == "none" ){
		$('#secondary_nav').removeAttr("style");

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

   //top nav effect

   navTop
   .setPin('#nav',  {pushFollowers: false})
	 .addTo(controller);

   $(window).scroll(function(){
				var windowpos = $(window).scrollTop() - 70;
					if(windowpos > $('#cover').offset().top){
					$('#nav').fadeOut(300);
					}else{
					$('#nav').fadeIn(700);
					}
				});

 	//ScrollMagic Pin:

 	//class toggles
	new ScrollMagic.Scene({triggerElement: "#projects", duration:winheight})
					.setClassToggle("#toprojects", "marked") // add class toggle
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#about", duration:winheight})
					.setClassToggle("#toabout", "marked") // add class toggle
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#contact", offset: "-295%"})
					.setClassToggle("#tocontact", "marked") // add class toggle
					.addTo(controller);
//screen width
 	enquire.register("screen and (min-width:980px)", [

 			 {match : function(){
	    	wide.remove().removePin();//wide remove

				//secondary_nav hight for pin duration
				var sideHight = $('#secondary_nav').css('height')
				side.duration(winheight * 2)

	    	side
	    	
	    	.setPin('#secondary_nav ul', {pushFollowers: false})
	    	.addTo(controller);	
	    	}},

	    	{match: function(){
	    	 //nav bar slide in
				$(window).scroll(function(){
				var windowpos = $(window).scrollTop() + 150;
					if(windowpos > $('#projects').offset().top){
					$('#secondary_nav').show("fold",850);
					}else{
					$('#secondary_nav').hide("fold",1000);
					}
				});

	    }}

 	])

	
	enquire.register("screen and (max-width:980px)", [

	    {match : function(){
	    	side.remove().removePin();//side remove

	    	wide
	    	.setPin('#secondary_nav')
	    	.addTo(controller);
	     	} },

	   	{match : function(){
	  	
	   		$(window).scroll(function(){

				var windowpos = $(window).scrollTop() + 150;
					if(windowpos > $('#projects').offset().top){
						$('#secondary_nav').slideDown(600,"easeInOutBack");
						
					}else{
						$('#secondary_nav').hide('blind');
					}
				})//window.scro

	   	} },


	])
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

	$(".social-email").click(function(){
		$("#contact address").append( "<p id='copied'>Copied</p>" )
		 $("#copied").show( "fold", 1200 );
		 callback();
  });
	function callback() {
      setTimeout(function() {
        $( "#copied" ).fadeOut()
      }, 300 );
    };
    //END copy to clipboard



});//doc.ready
