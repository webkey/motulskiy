/**
 * !resize only width
 * */
var resizeByWidth = true;

var prevWidth = -1;
$(window).resize(function () {
	var currentWidth = $('body').outerWidth();
	resizeByWidth = prevWidth != currentWidth;
	if(resizeByWidth){
		$(window).trigger('resizeByWidth');
		prevWidth = currentWidth;
	}
});
/*resize only width end*/

/**
 * !device detected
 * */
var DESKTOP = device.desktop();
//console.log('DESKTOP: ', DESKTOP);
var MOBILE = device.mobile();
//console.log('MOBILE: ', MOBILE);
var TABLET = device.tablet();
//console.log('MOBILE: ', MOBILE);
/*device detected end*/

/**
 *  !placeholder
 *  */
function placeholderInit(){
	$('[placeholder]').placeholder();
}
/*placeholder end*/

/**
 * !print
 * */
function printShow() {
	$('.view-print').on('click', function (e) {
		e.preventDefault();
		window.print();
	})
}
/*print end*/

/**
 * toggle header
 * */
function toggleHeader(){
	// external js:
	// 1) resizeByWidth (resize only width);

	var $page = $('html');

	var previousScrollTop = $(window).scrollTop();

	$(window).on('load scroll debouncedresize', function () {
		var currentScrollTop = $(window).scrollTop();


		var minScrollTop = $('.header').parent().offset().top + 50;

		console.log("minScrollTop: ", minScrollTop);

		$page.toggleClass('header-transform', (currentScrollTop >= minScrollTop));

		var showHeaderPanel = currentScrollTop < previousScrollTop || currentScrollTop <= minScrollTop;
		$page.toggleClass('header-show', showHeaderPanel);
		$page.toggleClass('header-hide', !showHeaderPanel);

		previousScrollTop = currentScrollTop;
	});
}
/*toggle header end*/

/**
 * fixed header
 * */
function fixedHeader(){
	// external js:
	// 1) resizeByWidth (resize only width);

	var $fixedElement = $('.header');

	if ( $fixedElement.length ) {
		var $page = $('html');

		// var minScrollTop = $fixedElement.parent().offset().top;
		// var currentScrollTop = $(window).scrollTop();
		//
		// $page.toggleClass('nav-fixed', (currentScrollTop > minScrollTop));

		$(window).on('load resizeByWidth scroll', function () {

			var minScrollTop = $fixedElement.parent().offset().top;
			var currentScrollTop = $(window).scrollTop();

			$page.toggleClass('header-fixed', (currentScrollTop > minScrollTop));
		})
	}
}
/*navigation fixed end*/

/**
 * !show form search
 * */
function showFormSearch(){
	var $searchFormContainer = $('.search-form-js');
	if(!$searchFormContainer.length){ return; }

	var $html = $('html');
	var $searchField = $('.search-field-js');
	var classFormIsOpen = 'form-is-open';

	$html.on('click', '.btn-search-open-js', function(e){

		// !important
		// var $searchForm = $searchFormContainer.find('form');
		// if ( $searchForm.find($searchField).val().length && $searchFormContainer.is(':visible') ){
		// 	$searchForm.submit();
		// 	return;
		// }

		if ($html.hasClass(classFormIsOpen)){
			closeSearchForm($searchFormContainer);
			return;
		}

		setTimeout(function () {
			$searchField.trigger('focus');
		}, 50);

		$html.addClass(classFormIsOpen);

		e.preventDefault();

	});

	$html.on('click', '.btn-search-close-js', function(e){
		e.preventDefault();

		// $searchField.val(''); // !important

		closeSearchForm($searchFormContainer);
	});

	function closeSearchForm(){
		$('html').removeClass(classFormIsOpen)
	}
}
/*show form search end*/

/**
 * !sliders initial
 * */
function slidersInit() {
	/*years slider*/
	var $slidersYears = $('.years-slider-js');
	if ($slidersYears.length) {
		$slidersYears.each(function () {
			var $thisSlider = $(this);
			var $wrap = $thisSlider.parent();
			var $thisBtnNext = $('.swiper-button-next', $wrap);
			var $thisBtnPrev = $('.swiper-button-prev', $wrap);

			new Swiper($thisSlider, {
				loop: false,
				slidesPerView: 'auto',
				watchSlidesVisibility: true,
				keyboardControl: false,

				nextButton: $thisBtnNext,
				prevButton: $thisBtnPrev
			});
		});
	}

	/*gallery*/
	var $gallery = $('.gallery');
	if ($gallery.length) {
		$gallery.each(function () {
			var $thisGallery = $(this);
			var $images = $('.gallery-js', $thisGallery);
			var $titles = $('.gallery-captions-js', $thisGallery);
			var $thisBtnNext = $('.swiper-button-next', $thisGallery);
			var $thisBtnPrev = $('.swiper-button-prev', $thisGallery);
			var $thisPagination = $('.swiper-pagination', $thisGallery);

			var galleryTop = new Swiper($images, {
				loop: true,
				// grabCursor: true,
				keyboardControl: false,

				nextButton: $thisBtnNext,
				prevButton: $thisBtnPrev,
				pagination: $thisPagination,
				paginationType: 'fraction'
			});

			var galleryThumbs = new Swiper($titles, {
				// Optional parameters
				loop: true,
				effect: 'fade'

				// Navigation arrows
				// nextButton: $thisBtnNext,
				// prevButton: $thisBtnPrev
			});

			galleryTop.params.control = galleryThumbs;
			galleryThumbs.params.control = galleryTop;
		});
	}

	/*quotes slider*/
	var $slidersQuotes = $('.slider-quoter-js');
	if ($slidersQuotes.length) {
		$slidersQuotes.each(function () {
			var $thisSlider = $(this);
			var $wrap = $thisSlider.parent();
			var $thisBtnNext = $('.swiper-button-next', $wrap);
			var $thisBtnPrev = $('.swiper-button-prev', $wrap);
			var $thisPagination = $('.swiper-pagination', $wrap);

			new Swiper($thisSlider, {
				loop: true,
				keyboardControl: false,

				nextButton: $thisBtnNext,
				prevButton: $thisBtnPrev,
				pagination: $thisPagination,
				paginationType: 'fraction'
			});
		});
	}

}

/**
 * !css object fit fixed for ie 9
 * */
function objectFitFixed() {
	function objectfitContainFixed($img, type) {
		var imgUrl = $img.prop('src');
		if (imgUrl) {
			$img.parent()
				.css('backgroundImage', 'url(' + imgUrl + ')')
				.addClass('object-fit-bg object-fit-bg--' + type);
		}
	}

	if ( !Modernizr.objectfit ) {
		var $galleryImg = $('.gallery__visual img');
		if ($galleryImg.length) {
			$galleryImg.each(function () {
				var $thisImg = $(this);
				objectfitContainFixed($thisImg, 'contain');
			});
		}

		var $entryImg = $('.entry__img img');
		if ($entryImg.length) {
			$entryImg.each(function () {
				var $thisImg = $(this);
				objectfitContainFixed($thisImg, 'contain');
			});
		}
	}
}
/*css object fit fixed for ie 9 end*/

/**
 * !footer at bottom
 * */
function footerBottom(){
	var $footer = $('.footer');
	if($footer.length){
		var $tplSpacer = $('<div />', {
			class: 'spacer'
		});

		$('.main').after($tplSpacer.clone());

		$(window).on('load resizeByWidth', function () {
			var footerOuterHeight = $footer.find('.footer__holder').outerHeight();
			$footer.css({
				// 'margin-top': -footerOuterHeight
			});

			$('.spacer').css({
				'height': footerOuterHeight
			});
		})
	}
}
/*footer at bottom end*/

/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	printShow();
	toggleHeader();
	fixedHeader();
	slidersInit();
	objectFitFixed();
	showFormSearch();

	footerBottom();
});

$(window).on('load', function(){
	$('html').addClass('loaded');
});