$(document).ready(function () {
	// var height = window.innerHeight,
	// 	x = 0, y = height / 2,
	// 	curveX = 10,
	// 	curveY = 0,
	// 	targetX = 0,
	// 	xitteration = 0,
	// 	yitteration = 0,
	// 	menuExpanded = false;

	// blob = $('#blob'),
	// 	blobPath = $('#blob-path'),

	// 	hamburger = $('.hamburger');

	// $(this).on('mousemove', function (e) {
	// 	x = e.offsetX;

	// 	y = e.offsetY;
	// });



	// var topValue = 102;
	// if ($(window).width() <= 1600) {
	// 	topValue = 55;
	// }
	// $(window).on('resize', function () {
	// 	if ($(window).width() <= 1600) {
	// 		topValue = 55;
	// 	} else {
	// 		topValue = 102;
	// 	}
	// })

	// // $('.blog_page .hamburger, .blog_page .menu-inner, .blog_page #menu, .blog_page #blob').on('click', function () {
	// // 	$(this).parent().addClass('expanded');
	// // 	// menuExpanded = true;
	// // 	window.location.href = 'home#ourproduct';
	// // });


	// // $('.inner_news .hamburger, .inner_news  .menu-inner, .inner_news #menu, .inner_news #blob').on('click', function () {
	// // 	$(this).parent().addClass('expanded');
	// // 	menuExpanded = true;
	// // 	window.location.href = 'home#newsmedia';
	// // });


	// $('.menu-inner').on('mouseleave', function () {
	// 	menuExpanded = false;
	// 	$(this).parent().removeClass('expanded');
	// });

	// function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
	// 	return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
	// }

	// var hoverZone = 150;
	// var expandAmount = 20;

	// function svgCurve() {
	// 	if ((curveX > x - 1) && (curveX < x + 1)) {
	// 		xitteration = 0;
	// 	} else {
	// 		if (menuExpanded) {
	// 			targetX = 0;
	// 		} else {
	// 			xitteration = 0;
	// 			if (x > hoverZone) {
	// 				targetX = 0;
	// 			} else {
	// 				targetX = -(((60 + expandAmount) / 100) * (x - hoverZone));
	// 			}
	// 		}
	// 		xitteration++;
	// 	}

	// 	if ((curveY > y - 1) && (curveY < y + 1)) {
	// 		yitteration = 0;
	// 	} else {
	// 		yitteration = 0;
	// 		yitteration++;
	// 	}

	// 	curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
	// 	curveY = easeOutExpo(yitteration, curveY, y - curveY, 100);

	// 	var anchorDistance = 200;
	// 	var curviness = anchorDistance - 40;

	// 	var newCurve2 = "M60," + height + "H0V0h60v" + (curveY - anchorDistance) + "c0," + curviness + "," + curveX + "," + curviness + "," + curveX + "," + anchorDistance + "S60," + (curveY) + ",60," + (curveY + (anchorDistance * 2)) + "V" + height + "z";

	// 	blobPath.attr('d', newCurve2);

	// 	blob.width(curveX + 60);

	// 	hamburger.css('transform', 'translate(' + curveX + 'px, ' + curveY + 'px)');

	// 	$('h2').css('transform', 'translateY(' + curveY + 'px)');
	// 	window.requestAnimationFrame(svgCurve);
	// }

	// window.requestAnimationFrame(svgCurve);



	$(window).keydown(function (e) {
		// console.log(e.keyCode);
		if (e.keyCode === 34) {

			// console.log('page down');

			e.preventDefault();
			//e.stopPropagation;
			//e.stopImmediatePropagation();
			//return false;
		}
	});

	// console.log("hi");
	$(window).on('load hashchange', function () {
		// console.log("hi");
		// console.log(window.location.hash);
		var topValue = 102;
		if ($(window).width() <= 1600) {
			topValue = 55;
		}
		$(window).on('resize', function () {
			if ($(window).width() <= 1600) {
				topValue = 55;
			} else {
				topValue = 102;
			}
		})
		if (window.location.hash) {
			var target = window.location.hash;
			// console.log($(target).offset().top);
			var scrollTo = $(target).offset().top - topValue;
			$('body, html').animate({ scrollTop: scrollTo + 'px' }, 100);
		}
	})
	



});