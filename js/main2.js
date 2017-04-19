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
					height: "258px"
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

		var c = 0,
			positions = [
							[
								['10%','40%'],
								['30%','0'],
								['20%','20%'],
								['60%','60%'],
								['70%','80%'],
								['80%','10%']
							],

							[
								['80%','90%'],
								['0','20%'],
								['20%','20%'],
								['80%','60%'],
								['70%','20%'],
								['40%','10%']
							],

							[
								['10%','10%'],
								['95%','5%'],
								['71%','20%'],
								['52%','60%'],
								['60%','80%'],
								['40%','26%']
							]

						];

		$('.hiddenn').css({'display':'block'});
		function moveDiv() {
			var $span = $(".hiddenn p");

			$.each($span, function(i, v) {
				$(v).fadeOut(1000, function() {
					$(v).css({
						left: positions[c][i][0],
						top: positions[c][i][1]
					}).fadeIn();
				});

				console.log(positions[c][i][0] + ' ' + positions[c][i][1]);
			});


			setInterval(function() {
				if (c < 2) {
					c++;
					moveDiv();
				} else {
					c = 0;
					moveDiv();
				}
			}, 3000);

			

			// for (var j = 0; j < 2; j++) {
			// 	for (var k = 0; k < 1; k++) {
			// 		console.log(positions[j][0][k] + '\n');

			// 		$(v).css({ left: positions[j][i][k], top: positions[j][i][k+1] }).fadeIn(1000);

			// 		for j
			// 			$each
			// 				for k
			// 	};
			// };

		};

		moveDiv();
		//setInterval(moveDiv, 1000);
	})

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

