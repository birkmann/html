document.querySelector('body').classList.remove('preload');

$(document).ready(function() {
	$(".emotion .slides").slick({
		dots: false,
		infinite: true,
		autoplay: false,
		arrows: false,
		autoplaySpeed: 5000,
		cssEase: 'linear'
	});
});