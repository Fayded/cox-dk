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
	"foundation/foundation.placeholder": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.reveal": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.topbar": { deps: ["jquery"], exports: 'jquery' },
	"foundation/jquery.offcanvas": { deps: ["jquery"], exports: 'jquery' },
	"libs/jquery.flexslider-min": { deps: ["jquery"], exports: 'jquery' },
	"libs/froogaloop": { deps: ["jquery"], exports: 'jquery' },
	"libs/fitvids": { deps: ["jquery"], exports: 'jquery' },
	"video-carousel": { deps: ["jquery"], exports: 'jquery' }
  }
});

require(["modernizr",
	"jquery",
	"libs/respond.min",
	"foundation/foundation",
	//"foundation/foundation.alerts",
	//"foundation/foundation.cookie",
	"foundation/foundation.forms",
 	"foundation/foundation.placeholder",
	"foundation/foundation.reveal",
	"foundation/foundation.topbar",
	"foundation/jquery.offcanvas",
	"libs/jquery.flexslider-min",
	"libs/froogaloop",
	"libs/fitvids",
	"video-carousel",
], function (modernizr, $) {
  	$(document).foundation();
});
