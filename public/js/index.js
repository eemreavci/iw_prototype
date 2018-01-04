$(document).ready(function () {
	$('.slider-container').slick({
		dots: true,
		nextArrow: '<button type="button" class="slick-next">&#8250;</button>',
		prevArrow: '<button type="button" class="slick-prev">&#8249;</button>',
		customPaging: function (slider, i) {
			return $('<button type="button" />');
		},
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1000,
	});

	$('.slider-container').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var el = $('.slick-slide:not(.slick-active) .slideInUp');
		el.before( el.clone(true) ).remove();
	})

	$("input, textarea").keyup(function() {
  // Check input( $(this).val() ) for validity here
	if ($(this).val().length) {
		$(this).siblings('label').addClass('active');
		$(this).addClass('active');
	} else {
		$(this).siblings('label').removeClass('active');
		$(this).removeClass('active');
	}
});
});
