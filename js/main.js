$(window).load(function() {
	$("body").fadeIn(2000);
});

$(document).ready(function() {
	$("#top").click(function(e) {
		e.preventDefault();
			// $("html, body").animate({
			// 	scrollTop: 0
			// }, 800);
		});

	setTimeout(function(){
		$('body').addClass('loaded');
		$(".building").addClass('building-animate');
		$(".bon").addClass('bon-animate');
	}, 3000);

	$('#mainContent').fullpage({
		'verticalCentered': false,
		'css3': true,
		'anchors': ['home', 'about', 'brands', 'products', 'contact', 'shop'],
		'navigation': true,
		'navigationPosition': 'right',
		'navigationTooltips': ['home', 'about', 'brands', 'products', 'contact', 'shop'],

		'afterLoad': function(anchorLink, index){
			
			if(index != 1) {
				TweenLite.to('.bo', .25, {
					position: "fixed",
					width: "115px",
					height: "96px",
					top: "0"
				});
				$('.bon').addClass('animate');
				$('.building').removeClass('building-animate');

			} else {
				TweenLite.to('.bo', .25, {
					position: "absolute",
					width: "316px",
					height: "258px",
					top: "50%"
				});
				$('.bon').removeClass('animate');
				$('.building').addClass('building-animate');
			}

			if(index == 3) {
				var tl = new TimelineLite();
				
				tl.to("#section3 .box", 0.5, {
					left: "0%"
				}, "box")
				.to("#section3 .section-image", 0.5, {
					top: "35%",
					ease: Back.easeOut.config(1.7)
				}, "box")
				.staggerFrom("#section3 .item img", 0.5, {
					scale: 0,
					autoAlpha: 0,
				}, 0.1, "stagger")
			}
			else if(index == 5 ) {
				TweenLite.to('#section5 .box', .5, {
					right: "0%",
					ease: Power0.easeNone
				});
				
				TweenLite.to('#section5 .shop img', .5, {
					scaleX: 1,
					scaleY: 1,
					opacity: 1,
					delay: .5,
					ease: Power0.easeNone
				});
			}

		},

		'onLeave': function(index, nextIndex, direction){
			if (index == 3 && direction == 'down'){
				TweenLite.to('#section3 .section-image', 2, {
					top: "45%",
					ease: Back.easeOut.config(1.7)
				});
				TweenLite.to('#section3 .box', 2, {
					left: "-40%",
					ease: Elastic.easeOut.config(1, 0.3)
				});
			}
			else if(index == 5 ) {
				TweenLite.to('#section5 .box', 2, {
					right: "-40%",
					ease: Elastic.easeOut.config(1, 0.3)
				});
				
				TweenLite.to('#section5 .shop img', .5, {
					scaleX: 0,
					scaleY: 0,
					opacity: .45,
					ease: Power0.easeNone
				});
			}
		}
	});

	// nav
	$('.nav-menu').click(function() {
		$('#siteMenu').fadeToggle();
		$('.hiddenn').click(function(){
			$('#siteMenu').fadeOut();
			$('.hiddenn').fadeOut();
		});

		$('.hiddenn').css({'display':'block'},1000);
		function moveDiv() {
	    var $span = $(".hiddenn p");
	    $.each($span, function(i, v) {
	      $(v).fadeOut(1000, function() {
	       var maxLeft = $(window).width() - $span.width();
	       var maxTop = $(window).height() - $span.height();
	        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
	        var topPos = Math.floor(Math.random() * (maxTop + 1))
	       $(v).css({ left: leftPos, top: topPos }).fadeIn(1000);
		    });
		    });

	    
		};

		moveDiv();
		setInterval(moveDiv, 5000);
	})
	$('#siteMenu').click(function(){
		$('#siteMenu').fadeToggle();
	});

	$('.header .hiddenn').css({
		'width': $(window).width()+'px',
		'height': $(window).height()+'px',
	});

	// social
	$('.social .tab').hover(function() {
		$(this).toggleClass('open');
	});

	// brand list
	$(".product-list").owlCarousel({
		autoPlay: 3000,
		navigation:true,
		navigationText: [
			"<i class='fa fa-chevron-left slideUp'></i>",
			"<i class='fa fa-chevron-right slideUp'></i>"
		],
		items : 4,
		itemsDesktopSmall : [900,3],
		itemsTablet: [768,2],
		itemsMobile : false
	});

	$('.product-list .item img').click(function() {
		var image = $(this).attr('prod-img');
		$('.product-list-view img').attr('src', image);

		$('.product-list .item').removeClass('selected');
		$(this).parent().addClass('selected');
	});

	// sexy tabs
	$(".sexytabs").tabs({
		show: { effect: "fade",duration: 200, easing: "linear" } ,
		hide: { effect: "fade", duration: 200, easing: "linear" }
	});

	// tab carousel
	$(".product-tab-carousel").owlCarousel({
		autoPlay: 3000,
		navigation:true,
		navigationText: [
			"<i class='fa fa-chevron-left'></i>",
			"<i class='fa fa-chevron-right'></i>"
		],
		items : 4,
		itemsDesktopSmall : [900,3],
		itemsTablet: [768,2],
		itemsMobile : false
	});
});

