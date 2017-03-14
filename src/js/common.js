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
 * !show form search
 * */
function showFormSearch() {
	var $searchForm = $('.js-search-form');
	if (!$searchForm.length) {
		return;
	}

	var $body = $('body');
	var openedFormClass = 'form-opened';

	$searchForm.on('click', '.js-search-open', function () {
		$body.toggleClass(openedFormClass, !$body.hasClass(openedFormClass));

		focusingSearchForm();
	});

	$searchForm.on('click', 'input:submit', function () {
		if(!$body.hasClass(openedFormClass)){
			$body.addClass(openedFormClass);

			focusingSearchForm();

			return false;
		}
	});

	function focusingSearchForm(){
		$searchForm.find('input[type="search"], input[type="text"]').trigger('focus');
	}
}
/*show form search end*/

/**
 * sliders initial
 * */
function slidersInit() {
	/*years slider*/
	$('.years-slider-js').each(function () {
		var $thisSlider = $(this);
		var $wrap = $thisSlider.parent();
		var $thisBtnNext = $('.swiper-button-next', $wrap);
		var $thisBtnPrev = $('.swiper-button-prev', $wrap);

		new Swiper ($thisSlider, {
			loop: false,
			slidesPerView: 'auto',
			watchSlidesVisibility: true,

			nextButton: $thisBtnNext,
			prevButton: $thisBtnPrev
		});
	});


	/*gallery*/
	$('.gallery').each(function () {
		var $thisGallery = $(this);
		var $images = $('.gallery-js', $thisGallery);
		var $titles = $('.gallery-captions-js', $thisGallery);
		var $thisBtnNext = $('.swiper-button-next', $thisGallery);
		var $thisBtnPrev = $('.swiper-button-prev', $thisGallery);
		var $thisPagination = $('.swiper-pagination', $thisGallery);

		var galleryTop = new Swiper ($images, {
			loop: true,
			// grabCursor: true,
			keyboardControl: true,

			nextButton: $thisBtnNext,
			prevButton: $thisBtnPrev,
			pagination: $thisPagination,
			paginationType: 'fraction'
		});

		var galleryThumbs = new Swiper ($titles, {
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

/*css object fit fixed for ie 9*/
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
	slidersInit();
	objectFitFixed();

	footerBottom();
});

$(window).on('load', function(){
	$('html').addClass('loaded');
});