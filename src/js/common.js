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
			$parent = $fixedElement.parent(),
			ifEntryIs = $('.entry').length > 0,
			$window = $(window),
			layout = 1200;

		// var minScrollTop = $fixedElement.parent().offset().top;
		// var currentScrollTop = $(window).scrollTop();
		//
		// $page.toggleClass('nav-fixed', (currentScrollTop > minScrollTop));

		$window.on('load resizeByWidth scroll', function () {

			var topLimit = $parent.offset().top;
			var minScrollTop = (window.innerWidth < layout && ifEntryIs) ? topLimit - 80 : topLimit;
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
	var btnSearchCloseClass = 'btn-search-close-js';
	var classFormIsOpen = 'form-is-open';

	$html.on('click', '.btn-search-open-js', function(e){
		e.stopPropagation();

		// !important
		// var $searchForm = $searchFormContainer.find('form');
		// if ( $searchForm.find($searchField).val().length && $searchFormContainer.is(':visible') ){
		// 	$searchForm.submit();
		// 	return;
		// }

		if ($html.hasClass(classFormIsOpen)){
			closeSearchForm();
			return;
		}

		setTimeout(function () {
			$searchField.trigger('focus');

			// close lang drop
			var $choiceContainer = $('.js-choice-wrap');
			if($choiceContainer.hasClass('choice-opened')) {
				$choiceContainer.trigger('closeChoiceDrop');
			}
		}, 50);

		$html.addClass(classFormIsOpen);

		e.preventDefault();

	});

	$html.on('click', '.' + btnSearchCloseClass, function(e){
		e.stopPropagation();
		e.preventDefault();

		closeSearchForm();
	});

	$(document).on('click', function (e) {
		closeSearchForm();
	});

	$(document).keyup(function(e) {
		if ($html.hasClass(classFormIsOpen) && e.keyCode === 27) {
			closeSearchForm();
		}
	});

	$searchFormContainer.on('closeSearchForm', function () {
		closeSearchForm();
	});

	$searchFormContainer.on('click', function (e) {
		if($(e.target).hasClass(btnSearchCloseClass)) {
			return
		}

		e.stopPropagation();
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
				slideToClickedSlide: true,

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
				effect: 'fade',
				fade: {
					crossFade: true
				}

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
		if (window.innerWidth < viewport) {
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

		if (alpha < 1) {
			$element.css('pointer-events','none');
		} else {
			$element.css('pointer-events','auto');
		}

		if (DESKTOP) {
			TweenMax.to(opacityViewElement, 0, {
				scale: scale,
				autoAlpha: alpha,
				y: offsetY
			});
		} else {
			if (scrollTop > 30) {
				TweenMax.to(opacityViewElement, 0.2, {
					autoAlpha: 0
				});
			} else {
				TweenMax.to(opacityViewElement, 0.2, {
					autoAlpha: 1
				});
			}
		}
	}

	function fixedView() {
		var $container = $('.entry');

		if (!$container.length) return;

		var scrollTop = $scrollArea.scrollTop(),
			containerHeight = $container.outerHeight() - 80,
			maxOffsetY = 30,
			offsetY;

		var offsetYValue = ( ( scrollTop / containerHeight * maxOffsetY ) ).toFixed(5);

		offsetY = (offsetYValue < maxOffsetY) ? offsetYValue : maxOffsetY;

		if (DESKTOP) {
			TweenMax.to(slideViewElement, 0, {
				y: -offsetY
			});
		} else {
			if (scrollTop > maxOffsetY) {
				TweenMax.to(slideViewElement, 0.2, {
					y: -maxOffsetY
				});
			} else {
				TweenMax.to(slideViewElement, 0.2, {
					y: 0
				});
			}
		}
	}
}
/*behaviors card product elements end*/

/**
 * !Toggle drop
 * */
function toggleDrop() {

	var $choiceContainer = $('.js-choice-wrap');
	var openClass = 'choice-opened';

	if ($choiceContainer.length) {

		$.each($choiceContainer, function () {
			var $thisContainer = $(this);

			if ($thisContainer.attr('data-parent-position') !== undefined) {
				$thisContainer.parent().css({
					'position': 'relative',
					'padding-right': Math.round($thisContainer.outerWidth() + 10),
					'overflow': 'visible'
				});
			}
		});

		$('.js-choice-open').on('click', function (e) {
			e.preventDefault();
			var $currentContainer = $(this).closest('.js-choice-wrap');

			e.stopPropagation();

			if ($currentContainer.hasClass(openClass)) {
				$currentContainer.removeClass(openClass);
				return;
			}

			$choiceContainer.removeClass(openClass);
			$currentContainer.addClass(openClass);

			// close search form
			var $searchFormContainer = $('.search-form-js');
			if($('html').hasClass('form-is-open')){
				$searchFormContainer.trigger('closeSearchForm');
			}
		});

		$(document).on('click', function () {
			closeDrop();
		});

		$(document).keyup(function(e) {
			if ($choiceContainer.hasClass(openClass) && e.keyCode === 27) {
				closeDrop();
			}
		});

		$choiceContainer.on('closeChoiceDrop', function () {
			closeDrop();
		});

		function closeDrop() {
			$choiceContainer.removeClass(openClass);
		}

		$('.js-choice-drop').on('click', 'a', function (e) {
			var $this = $(this);

			// if data-window-location is true, prevent default
			if ($this.closest($choiceContainer).attr('data-window-location') === 'true') {
				e.preventDefault();
			}

			// if data-select is false, do not replace text
			if ($this.closest($choiceContainer).attr('data-select') === 'false') {
				return false;
			}

			$('a', '.js-choice-drop').removeClass('active');

			$this
				.addClass('active')
				.closest('.js-choice-wrap')
				.find('.js-choice-open span')
				.text($this.find('span').text());
		});
	}

}

/**
 * !footer at bottom
 * */
function footerBottom(){
	var $footer = $('.footer');

	if($footer.length){
		$('.main').after($('<div class="spacer"></div>'));

		setTimeout(function () {
			layoutFooter();
		}, 50);

		$(window).on('resizeByWidth', function () {
			layoutFooter();
		});

		function layoutFooter() {
			var footerHeight = $('.footer__holder', $footer).outerHeight();
			$footer.css({
				// 'margin-top': -footerHeight
			});

			$('.spacer').css({
				'height': footerHeight
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
	toggleDrop();

	footerBottom();
	formSuccessExample();
});

$(window).on('load', function(){
	$('html').addClass('loaded');
});