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
		var $page = $('html'),
			$window = $(window),
			layout = 1200;

		// var minScrollTop = $fixedElement.parent().offset().top;
		// var currentScrollTop = $(window).scrollTop();
		//
		// $page.toggleClass('nav-fixed', (currentScrollTop > minScrollTop));

		$window.on('load resizeByWidth scroll', function () {

			var topLimit = $fixedElement.parent().offset().top;
			var minScrollTop = (window.innerWidth < layout && $('.entry').length > 0) ? topLimit - 80 : topLimit;
			var currentScrollTop = $window.scrollTop();

			$page.toggleClass('header-fixed', (currentScrollTop > minScrollTop));
		})
	}
}
/*fixed header end*/

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
		console.log(3);
		e.stopPropagation();

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
		console.log(2);
		e.stopPropagation();
		e.preventDefault();

		// $searchField.val(''); // !important

		closeSearchForm($searchFormContainer);
	});

	$(document).on('click', function () {
		console.log(1);
		closeSearchForm();
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
 * !behaviors card product elements
 * */
function behaviorEntryBlock() {
	// external js:
	// 1) TweetMax;
	// 2) resizeByWidth;
	// 3) device.js;

	var $scrollArea = $(window);
	var $container = $('.entry');
	var opacityViewElement = '.entry__img-inner, .entry__title, .entry__contacts';
	var slideViewElement = '.entry__message-js, .entry__logo';
	var viewport = 1200;

	$scrollArea.on('scroll resize', function () {
		init();
	});

	init();

	function init() {
		if (DESKTOP && window.innerWidth < viewport) {
			opacityView();
			fixedView();
		}
	}

	$(window).on('resize', function () {
		if (window.innerWidth >= viewport) {

			if ($container) {

				$(opacityViewElement).css('pointer-events','auto');
				TweenMax.set(opacityViewElement, {
					scale: 1,
					autoAlpha: 1
				});

				TweenMax.set(slideViewElement, {
					y: 'auto'
				});
			}

		}
	});

	function opacityView() {

		var $element = $(opacityViewElement);

		if (!$container.length) return;


		var scrollTop = $scrollArea.scrollTop(),
			windowHeight = $(window).height(),
			containerHeight = $container.outerHeight(),
			limitHeight = containerHeight - 120,
			minAlpha = 0.0,
			minScale = 0.8,
			alpha,
			scale,
			offsetY;

		var alphaValue = (1 - ( scrollTop / limitHeight) ).toFixed(5);
		var scaleValue = (1 - ( scrollTop * 0.3 / windowHeight)).toFixed(5);
		var offsetYValue = ( ( scrollTop ) ).toFixed(5);

		alpha = (alphaValue > minAlpha) ? alphaValue : minAlpha;
		scale = (scaleValue > minScale) ? scaleValue : minScale;
		offsetY = (offsetYValue < containerHeight) ? offsetYValue : containerHeight;

		console.log(": ", offsetY);

		if (alpha < 1) {
			$element.css('pointer-events','none');
		} else {
			$element.css('pointer-events','auto');
		}

		TweenMax.to(opacityViewElement, 0, {
			scale: scale,
			autoAlpha: alpha,
			y: offsetY
		});
	}

	function fixedView() {
		var $container = $('.entry');

		if (!$container.length) return;

		var scrollTop = $scrollArea.scrollTop(),
			containerHeight = $container.outerHeight() - 80,
			maxOffsetY = 30.0,
			offsetY;

		var offsetYValue = ( ( scrollTop / containerHeight * maxOffsetY ) ).toFixed(5);

		offsetY = (offsetYValue < maxOffsetY) ? offsetYValue : maxOffsetY;

		TweenMax.to(slideViewElement, 0, {
			y: -offsetY
		});
	}
}
/*behaviors card product elements end*/

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

		$(window).on('load', function () {
			setTimeout(function () {
				layoutFooter();
			}, 100)
		});

		$(window).on('debounsedresize', function () {
			layoutFooter();
		});

		function layoutFooter() {
			var footerOuterHeight = $('.footer__holder', $footer).outerHeight();
			$footer.css({
				// 'margin-top': -footerOuterHeight
			});

			$('.spacer').css({
				'height': footerOuterHeight
			});
		}
	}
}
/*footer at bottom end*/

/**
 * !form success for example
 * */
function formSuccessExample() {
	var $form = $('.user-form form');

	if ( $form.length ) {

		$form.submit(function (event) {
			var $thisForm = $(this);

			if ($thisForm.parent().hasClass('success-form')) return;

			event.preventDefault();

			testValidateForm($thisForm);
		});

		// $(':text, input[type="email"], textarea', $form).on('keyup change', function () {
		// 	var $form = $(this).closest('form');
		// 	if ($form.parent().hasClass('error-form')) {
		// 		testValidateForm($form);
		// 	}
		// })

	}

	function testValidateForm(form) {
		var $thisFormWrap = form.parent();

		var $inputs = $(':text, input[type="email"], input[type="password"], textarea', form);

		var inputsLength = $inputs.length;
		var inputsHasValueLength = $inputs.filter(function () {
			return $(this).val().length;
		}).length;

		$thisFormWrap.toggleClass('error-form', inputsLength !== inputsHasValueLength);
		$thisFormWrap.toggleClass('success-form', inputsLength === inputsHasValueLength);

		$.each($inputs, function () {
			var $thisInput = $(this);
			var thisInputVal = $thisInput.val();
			var $thisInputWrap = $thisInput.parent();
			var $thisInputWrapSiblings = $thisInput.parent().siblings();

			$thisInput.toggleClass('error', !thisInputVal.length);
			$thisInput.toggleClass('success', !!thisInputVal.length);

			$thisInputWrap.toggleClass('error', !thisInputVal.length);
			$thisInputWrap.toggleClass('success', !!thisInputVal.length);

			$thisInputWrapSiblings.toggleClass('error', !thisInputVal.length);
			$thisInputWrapSiblings.toggleClass('success', !!thisInputVal.length);
		});
	}
}
/* form success for example end */

/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	printShow();
	toggleHeader();
	fixedHeader();
	slidersInit();
	objectFitFixed();
	showFormSearch();
	behaviorEntryBlock();

	footerBottom();
	formSuccessExample();
});

$(window).on('load', function(){
	$('html').addClass('loaded');
});