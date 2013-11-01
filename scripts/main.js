require.config({
	paths: {
		modernizr: 'libs/custom.modernizr',
		jquery: 'libs/jquery'
	},
  shim: {
  	"libs/respond.min" : { },
	"foundation/foundation" : { deps: ["jquery"], exports: 'jquery' },
	//"foundation/foundation.alerts": { deps: ["jquery"], exports: 'jquery' },
	//"foundation/foundation.cookie": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.forms": { deps: ["jquery"], exports: 'jquery' },
	//"foundation/foundation.placeholder": { deps: ["jquery"], exports: 'jquery' },
	//"foundation/foundation.reveal": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.topbar": { deps: ["jquery"], exports: 'jquery' },
	"foundation/jquery.offcanvas": { deps: ["jquery"], exports: 'jquery' },
	"libs/selectnav.min": { deps: ["jquery"], exports: 'jquery' },
	//"libs/jquery.parallax-1.1.3": { deps: ["jquery"], exports: 'jquery' },parsley.js
	"libs/parsley": { deps: ["jquery"], exports: 'jquery' },
	"libs/jquery.stellar.min": { deps: ["jquery"], exports: 'jquery' },
	"libs/jquery.flexslider-min": { deps: ["jquery"], exports: 'jquery' }
  }
});

require(["modernizr",
	"jquery",
	"libs/respond.min",
	"foundation/foundation",
	//"foundation/foundation.alerts",
	//"foundation/foundation.cookie",
	"foundation/foundation.forms",
 	//"foundation/foundation.placeholder",
	//"foundation/foundation.reveal",
	"foundation/foundation.topbar",
	"libs/selectnav.min",
	"foundation/jquery.offcanvas",
	//"libs/jquery.parallax-1.1.3",
	"libs/parsley",
	"libs/jquery.stellar.min",
	"libs/jquery.flexslider-min",
], function (modernizr, $) {
  	$(document).foundation();
  	$.stellar({
	  horizontalScrolling: false,
	  hideDistantElements: false
	});
  	/*$('#experience').parallax("50%", 0.8);
  	$('#advertise').parallax("50%", 0.2);*/

	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
		controlNav: true,
		directionNav: true,
		slideshow: false,
		minItems: 1,
		touch: true,
		useCSS: Modernizr.touch,
		maxItems: 3,
		prevText: "",
		nextText: ""
	});

    $(".pink-cta a" ).on( "click", function(event) {
    	event.preventDefault();
    	var arr=[];
	    $(".hide").each(function(){ 
	    	arr.push($(this));
	    });
  	
  		for(var i = 0; i < 6; i++){
			arr[i].removeClass('hide').slideDown();
			console.log(i);
		}
	}); 
});
