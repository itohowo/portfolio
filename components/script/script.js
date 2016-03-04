//requires
var $ = require('jquery');
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
		fullheight('.side_nav', 2);

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

	//side nav follow
	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({
		triggerElement: '.tiles',
		triggerHook:0.3,
		offset:50,
		duration: '110%'
	})
	.setPin('.side_nav ul').addTo(controller);
	//end

	//side nav slide in effect

	var side_nav = TweenLite.from('.side_nav', 0.9, {opacity:.5, width:0});
	var scene = new ScrollMagic.Scene({
		triggerElement: '#projects',
		offset: 0,
		triggerHook:1
	}).setTween(side_nav).addTo(controller);	

	var side_nav_ul = TweenLite.from('.side_nav ul', 1, {opacity:0, y:100, delay:0.7});
	var scene = new ScrollMagic.Scene({
		triggerElement: '#projects',
		offset: 0,
		triggerHook:1
	}).setTween(side_nav_ul).addTo(controller);	

//
















});
	
