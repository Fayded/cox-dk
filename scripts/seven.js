require.config({
	paths: {
		modernizr: 'libs/custom.modernizr',
		jquery: 'libs/jquery'
	},
  shim: {
  	"libs/respond.min" : { },
	"foundation/foundation" : { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.forms": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.reveal": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.topbar": { deps: ["jquery"], exports: 'jquery' },
	"foundation/jquery.offcanvas": { deps: ["jquery"], exports: 'jquery' },
	"libs/jquery.flexslider-min": { deps: ["jquery"], exports: 'jquery' },
	"libs/mediaelement-and-player.min": { deps: ["jquery"], exports: 'jquery' }
  }
});

require(["modernizr",
	"jquery",
	"libs/respond.min",
	"foundation/foundation",
	"foundation/foundation.forms",
	"foundation/foundation.reveal",
	"foundation/foundation.topbar",
	"foundation/jquery.offcanvas",
	"libs/jquery.flexslider-min",
	"libs/mediaelement-and-player.min",
], function (modernizr, $) {
  	$(document).foundation();
  	$(window).load(function() {
		  $('.flexslider').flexslider({
		    animation: "slide",
		    animationLoop: false,
		    itemWidth: 200,                			
		    itemMargin: 10,
		    controlNav: false,
		    slideshow: false,
		    minItems: 2,
		    touch: true,
		    maxItems: 3,
		    move: 1,
		    prevText: "",
			nextText: ""
		});
	});
	$('.flexslider .slides li').on('click', function() {
		   $('.loaded-carousel').flexslider({ 
		   		slideshow: false,
		        controlNav: false,
		        directionNav: true,
		        slideToStart: 0,  
		        minItems: 1,
			    touch: true,
			    maxItems: 2,
			    move: 1,
			    prevText: "",
				nextText: "",
		        start: function(slider) {
		            if (slider.currentSlide != 0) {
		                slider.flexAnimate(0)//move the slider to the first slide (Unless the slider is also already on the first slide);
		            }
		        }
		   });
	});
	$('video,audio').mediaelementplayer(/* Options */);
});
