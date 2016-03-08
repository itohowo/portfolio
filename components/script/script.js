//requires
var $ = require('jquery');
var jquery_ui = require('jquery-ui');
var TweenMax = require('gsap');
var ScrollMagic = require('scrollmagic');
var animation_gsap = require('./plugin/jquery.ScrollMagic.js');
var animation_gsap = require('./plugin/animation.gsap.js');

//

$(function(){

	//get window height
	function fullheight(selector, tims){
		var winheight = $(window).height(); 

		$(selector).css('height', winheight * tims);	
		$(window).resize(function(){
			var winheight = $(window).height();
			$(selector).css('height', winheight * tims);
		})
	}
	fullheight('.fullheight', 1);
	fullheight('.fullheightMid', 1.3);
	fullheight('.fullheightX', 2);
	
	// function fullwidth(selector, asWideas){
	// 	$(selector).css('width', winheight * tims);	
	// }

	//height toggle
	$(window).resize(function(){
    var winWidth = $(window).outerWidth(true)
    console.log(winWidth)
    if(winWidth > 1100){
    	fullheight('.fullheightX', 2);
    $( "#side_nav").switchClass( "wide_bar", "fullheightX", 450 );
  }else{
    $( "#side_nav").removeAttr("style");
		$( "#side_nav" ).switchClass( "fullheightX", "wide_bar", 450 );
      }
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

	/////////


	//
	$('#projects').scroll(function(){

	})

//ScrollMagic
var controller = new ScrollMagic.Controller();
	//side nav follow
	

	// var scene = new ScrollMagic.Scene({
	// 	triggerElement: '.tiles',
	// 	triggerHook:0.3,
	// 	offset:50,
	// 	duration: '110%'
	// })
	// .setPin('.fullheightX ul').addTo(controller);
	//end

	//side nav slide in effect

	var side_nav_fullhight = function(){
		TweenLite.fromTo('.fullheightX', 0.9, {opacity:.5, width:0},{opacity:1, width:130});
		TweenLite.from('.fullheightX ul', 1, {opacity:0, y:100, delay:0.7});
	}

	var scene = new ScrollMagic.Scene({
		triggerElement: '#projects',
		offset: 0,
		triggerHook:1
	}).setTween(side_nav_fullhight).addTo(controller);	

//

	//Class Toggles
new ScrollMagic.Scene({triggerElement: "#about", triggerHook:0.5})
		.setClassToggle("#toabout", "marked") 
		.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#projects", triggerHook:0.3, offset:-270, duration:1100})
		.setClassToggle("#toprojects", "marked") // add class toggle

		.addTo(controller);
	
	new ScrollMagic.Scene({triggerElement: "#contact_a",offset:2000 })
		.setClassToggle("#tocontact", "marked") // add class toggle

		.addTo(controller);


		//nav transision hotpink
		var side_links = $('#side_nav ul li a');
		$(side_links).mouseenter(function(){
			$(this).addClass('unmarked');
			$(this).mouseleave(function(){
				$(this).removeClass('unmarked');
			})
		})


	//contact pop up

		var side_contactBtm = document.getElementById("tocontact");
		var main_contactBtm = document.getElementById("mainTocontact");

		side_contactBtm.onclick = function(){
			TweenLite.to('#contact', 2, {ease: Back.easeOut.config(1.7), padding:50, delay:0.2});
			TweenLite.to('#contact address', 1, {ease: Sine.easeOut, padding:30, opacity:1, delay:1.5});
		}
		main_contactBtm.onclick = function(){
			TweenLite.to('#contact', 2, {ease: Back.easeOut.config(1.7), padding:50, delay:1.6});
			TweenLite.to('#contact address', 1, {ease: Sine.easeOut, padding:30, opacity:1, delay:1.8});
		}

		var main_nav = TweenLite.fromTo("#nav", 1.3,{y: 35},{y:160, opacity:0, ease: Back.easeOut})

		new ScrollMagic.Scene({
		triggerElement: '#nav',
		triggerHook:0,
		offset:10,
		// duration:300 causing low fps
	}).setTween(main_nav).setPin("#nav").addTo(controller);	





});
	
