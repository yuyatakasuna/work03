

jQuery(function($){

	$('.slickTour').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		initialSlide: 0,
		dots: true,
		arrows: false,
		focusOnSelect: true,
		centerMode: true,
		centerPadding: '3000px',
		slidesToShow: 1,
		//slidesToScroll: 1
	});

});




//ページトップボタン表示・非表示用

/*$(function() {
    var topBtn = $('.pagetopButton');
    topBtn.hide();
        if ($(this).scrollTop() > 370) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 370) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});*/

