"use strict";

/**
 * Подключение JS файлов которые начинаются с подчеркивания
 */

/**
 * Возвращает функцию, которая не будет срабатывать, пока продолжает вызываться.
 * Она сработает только один раз через N миллисекунд после последнего вызова.
 * Если ей передан аргумент `immediate`, то она будет вызвана один раз сразу после
 * первого запуска.
 */
function debounce(func, wait, immediate) {
  var timeout = null,
      context = null,
      args = null,
      later = null,
      callNow = null;
  return function () {
    context = this;
    args = arguments;

    later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
} // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license


;

(function () {
  var lastTime = 0,
      vendors = ['ms', 'moz', 'webkit', 'o'],
      x,
      currTime,
      timeToCall,
      id;

  for (x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      currTime = new Date().getTime();
      timeToCall = Math.max(0, 16 - (currTime - lastTime));
      id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
})();

;

(function () {
  // Test via a getter in the options object to see if the passive property is accessed
  var supportsPassiveOpts = null;

  try {
    supportsPassiveOpts = Object.defineProperty({}, 'passive', {
      get: function get() {
        window.supportsPassive = true;
      }
    });
    window.addEventListener('est', null, supportsPassiveOpts);
  } catch (e) {} // Use our detect's results. passive applied if supported, capture will be false either way.
  //elem.addEventListener('touchstart', fn, supportsPassive ? { passive: true } : false);

})();

function getSVGIconHTML(name, tag, attrs) {
  if (typeof name === 'undefined') {
    console.error('name is required');
    return false;
  }

  if (typeof tag === 'undefined') {
    tag = 'div';
  }

  var classes = 'svg-icon svg-icon--<%= name %>';
  var iconHTML = ['<<%= tag %> <%= classes %>>', '<svg class="svg-icon__link">', '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#<%= name %>"></use>', '</svg>', '</<%= tag %>>'].join('').replace(/<%= classes %>/g, 'class="' + classes + '"').replace(/<%= tag %>/g, tag).replace(/<%= name %>/g, name);
  return iconHTML;
}
/* ^^^
 * JQUERY Actions
 * ========================================================================== */


$(function () {
  'use strict';
  /**
   * определение существования элемента на странице
   */

  $.exists = function (selector) {
    return $(selector).length > 0;
  };
  /*sizeCover*/


  ;

  (function () {
    var bgCover = $('[data-section-bg]');

    if (!$.exists(bgCover)) {
      return;
    }

    var cover = function cover() {
      var self = $(this);
      var selfBg = self.data('section-bg');

      if (selfBg) {
        self.css('background-image', 'url(' + selfBg + ')');
      }
    };

    $.each(bgCover, cover);
  })(); //scroll to block


  function scrollToBlock(block, time, offset, callback) {
    var _this = block;
    var offset = offset ? offset : 0;

    if (!_this.length > 1) {
      return;
    }

    var position = _this.offset().top - offset;
    $('body,html').stop().animate({
      scrollTop: position
    }, time, function () {
      if (callback) {
        callback();
      }
    });
  }

  var flag991 = false;
  $(window).on('resize', function (event) {
    //    if($.exists('.app-header__menu') && window.matchMedia("(min-width: 992px)").matches){
    //    	if (!$.exists('.app-header__menu > ul > li.more-button')) {
    // 		var ulMaxWidth      = parseInt($('.app-header__menu > ul').outerWidth());
    // 		var moreButtonWidth = 50;
    // 		$('.app-header__menu > ul > li').each(function(index, el) {
    // 			var crawledOut = parseInt($(this).position().left + $(this).outerWidth() + moreButtonWidth) > ulMaxWidth;
    // 			if (crawledOut) {
    // 				if (!$('.app-header__menu > ul > li.more-button').length) {
    // 					$('.app-header__menu > ul').append('<li class="more-button"><a href="#">Еще <span class="svg-icon svg-icon--chevron-down"><svg class="svg-icon__link"><use xlink:href="#chevron-down"></use></svg></span></a><ul class="more-dropdown"></ul></li>');
    // 				}
    // 				$(this).appendTo('.app-header__menu > ul > li.more-button .more-dropdown');
    // 			}
    // 		});
    // 		$('.app-header__ul').addClass('views');
    // 	}
    // }
    if (window.matchMedia("(max-width: 991px)").matches) {
      if (!flag991) {
        if ($.exists('.e-card__code') && $.exists('.e-card__title')) {
          $('.e-card__code').prependTo($('.e-card__layout--slider'));
          $('.e-card__title').prependTo($('.e-card__layout--slider'));
        } //leftbar-filter


        if ($.exists('.leftbar-filter')) {
          $('.breadcrumb').after('<div class="leftbar-filter__adaptive-title">' + $('.leftbar-filter__title').text() + '</div>');
          $('.leftbar-filter').appendTo($('.remodal[data-remodal-id="leftbar-filter"] .remodal-content'));
        }

        flag991 = true;
      }
    } else {
      if (flag991) {
        if ($.exists('.e-card__code') && $.exists('.e-card__title')) {
          $('.e-card__code').prependTo($('.e-card__content'));
          $('.e-card__title').prependTo($('.e-card__content'));
        } //leftbar-filter


        if ($.exists('.leftbar-filter')) {
          $('.leftbar-filter__adaptive-title').remove();
          $('.leftbar-filter').prependTo($('.app__aside--left'));
        }

        flag991 = false;
      }
    }
  }).trigger('resize');
  ;

  (function ($) {
    $.fn.myTabs = function (options) {
      var settings = $.extend({
        title: '.tabs__title',
        body: '.tabs__body',
        responsive: false,
        responsiveWidth: 768,
        adaptiveOffset: 0,
        activeClass: 'active',
        afterInit: $.noop(),
        afterChange: $.noop()
      }, options);
      return $(this).each(function () {
        var titles = $(this).find(settings.title);
        var bodys = $(this).find(settings.body);
        var titlesParent = titles.parent();
        var bodysParent = bodys.parent();
        var flag = false;
        titles.each(function (ind, title) {
          $(title).attr('data-tab-index', ind);
          bodys.eq(ind).attr('data-tab-index', ind);
        });

        if (settings.responsive) {
          $(window).on('resize', function () {
            if (window.matchMedia("(max-width:" + settings.responsiveWidth + "px)").matches) {
              if (!flag) {
                //titles.filter('.' + settings.activeClass).after(bodysParent);
                titlesParent.append(bodysParent);
                titles.removeClass(settings.activeClass);
                bodys.removeClass(settings.activeClass);
                bodys.hide();
                flag = true;
              }
            } else {
              if (flag) {
                titlesParent.after(bodysParent);

                if (!titles.hasClass(settings.activeClass)) {
                  titles.eq(0).trigger('click');
                }

                flag = false;
              }
            }
          }).trigger('resize');
        }

        bodys.hide();
        titles.on('click', function (event) {
          event.preventDefault();
          var $this = $(this);
          var indx = $this.data('tab-index');

          if ($this.hasClass(settings.activeClass)) {
            if (!window.matchMedia("(max-width:" + settings.responsiveWidth + "px)").matches) {
              return;
            } else {
              titles.removeClass(settings.activeClass);
              bodys.hide();
              return;
            }
          }

          titles.removeClass(settings.activeClass);
          $this.addClass(settings.activeClass);
          bodys.hide().removeClass(settings.activeClass).filter('[data-tab-index="' + indx + '"]').addClass(settings.activeClass).fadeIn();

          if (settings.responsive) {
            if (window.matchMedia("(max-width:" + settings.responsiveWidth + "px)").matches) {
              titles.filter('.' + settings.activeClass).after(bodysParent);
              var scrollBlock = titles.filter('.' + settings.activeClass).offset().top;
              var fixedTop = settings.adaptiveOffset;
              $('html, body').animate({
                scrollTop: scrollBlock - fixedTop
              }, 700);
            }
          }

          if ($.isFunction(settings.afterChange)) {
            settings.afterChange();
          }
        });

        if (!window.matchMedia("(max-width:" + settings.responsiveWidth + "px)").matches) {
          titles.eq(0).trigger('click');
        }

        if ($.isFunction(settings.afterInit)) {
          settings.afterInit();
        }
      });
    };
  })(jQuery);

  $('._js-scroll-link').on('click', function (event) {
    event.preventDefault();
    var scrollBlockId = $(this).data('scroll-id');
    console.log($(scrollBlockId));
    scrollToBlock($(scrollBlockId), 1000);
  });
  /**
   * [^_]*.js - выборка всех файлов, которые не начинаются с подчеркивания
   */

  $(function () {
    if (!$('#addresses-map').length) {
      return;
    }

    ymaps.ready(init);
    var map;

    function init() {
      var retail = $('#addresses-map');
      map = new ymaps.Map('addresses-map', {
        center: [56.837992, 60.597223],
        zoom: 10,
        behaviors: ['drag', "scrollZoom"]
      });
      var baloons = retail.data('address');
      $.each(baloons, function (index, value) {
        var myGeocoder = ymaps.geocode(value.address);
        myGeocoder.then(function (res) {
          var coords = res.geoObjects.get(0).geometry.getCoordinates();
          var placemark = new ymaps.Placemark(coords, {
            balloonContent: value.baloon
          }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/baloon.png',
            iconImageSize: [34, 50],
            iconImageOffset: [-20, -50]
          });
          map.geoObjects.add(placemark);
        });
      }); // console.log(retail.data('city'));

      if (retail.data('city')) {
        var mapCenter = ymaps.geocode(retail.data('city'));
        mapCenter.then(function (res) {
          var centerCoords = res.geoObjects.get(0).geometry.getCoordinates();
          map.setCenter(centerCoords, 10);
        });
      } else {
        var mapCenter = ymaps.geocode('Казань');
        mapCenter.then(function (res) {
          var centerCoords = res.geoObjects.get(0).geometry.getCoordinates();
          map.setCenter(centerCoords, 5);
        });
      }
    }
  });

  if ($.exists('.e-addresses')) {
    var slickSliderObject = {
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      centerPadding: '160px',
      slidesToScroll: 1,
      draggable: false,
      touchMove: false,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="98.148px" height="98.148px" viewBox="0 0 98.148 98.148" style="enable-background:new 0 0 98.148 98.148;"	xml:space="preserve"><path d="M33.458,97.562L80.531,50.49c0.75-0.75,0.75-2.078,0-2.828L33.456,0.586C33.081,0.211,32.572,0,32.042,0c-0.53,0-1.039,0.211-1.414,0.586L17.641,13.573c-0.391,0.391-0.586,0.902-0.586,1.414c0,0.512,0.195,1.023,0.586,1.414l32.674,32.674L17.642,81.75c-0.751,0.75-0.75,2.078,0,2.828l12.987,12.984C31.411,98.344,32.677,98.344,33.458,97.562z"/></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="98.148px" height="98.148px" viewBox="0 0 98.148 98.148" style="enable-background:new 0 0 98.148 98.148;"	xml:space="preserve"><path d="M33.458,97.562L80.531,50.49c0.75-0.75,0.75-2.078,0-2.828L33.456,0.586C33.081,0.211,32.572,0,32.042,0c-0.53,0-1.039,0.211-1.414,0.586L17.641,13.573c-0.391,0.391-0.586,0.902-0.586,1.414c0,0.512,0.195,1.023,0.586,1.414l32.674,32.674L17.642,81.75c-0.751,0.75-0.75,2.078,0,2.828l12.987,12.984C31.411,98.344,32.677,98.344,33.458,97.562z"/></svg></button>',
      responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerPadding: '115px'
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerPadding: '140px'
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: '50px'
        }
      }, {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px'
        }
      }]
    };
    /*$(window).on('resize', function(event) {*/

    $('.e-addresses__slider').each(function (index, el) {
      var $this = $(this);
      var storeName = 'store-' + $this.data('store');
      var $thisWidth = parseInt($this.outerWidth());
      var items = $this.find('.e-addresses__slider-item');
      var itemsWidth = 0;
      items.each(function (index, el) {
        itemsWidth = itemsWidth + ($(this).outerWidth() + parseInt($(this).css('margin-left')) + parseInt($(this).css('margin-right')));
      });
      $('.' + storeName).colorbox({
        rel: storeName,
        transition: "fade",
        maxHeight: '95%',
        maxWidth: '95%',
        closeButton: true,
        close: ""
      });

      if (Math.round(itemsWidth) == Math.round($thisWidth)) {
        $this.on('init', function (event, slick, currentSlide, nextSlide) {// if(window.matchMedia("(min-width: 1200px)").matches) {
          // 	$this.find('.e-addresses__slider-item.slick-center.slick-current').prev().addClass('prev-center');
          // 	$this.find('.e-addresses__slider-item.slick-center.slick-current').next().addClass('next-center');
          // }
        });
        $this.slick(slickSliderObject).on('beforeChange', function (event, slick, currentSlide, nextSlide) {// if(window.matchMedia("(min-width: 1200px)").matches) {
          // 	var direction;
          // 	if (Math.abs(nextSlide - currentSlide) == 1) {
          // 		direction = (nextSlide - currentSlide > 0) ? "right" : "left";
          // 	}
          // 	else {
          // 		direction = (nextSlide - currentSlide > 0) ? "left" : "right";
          // 	}
          // 	if(direction == 'left') {
          // 		$this.find('.e-addresses__slider-item.slick-active.prev-center').removeClass('prev-center').prev().addClass('prev-center');
          // 		$this.find('.e-addresses__slider-item.slick-active.next-center').removeClass('next-center').prev().addClass('next-center');
          // 	} else {
          // 		$this.find('.e-addresses__slider-item.slick-active.prev-center').removeClass('prev-center').next().addClass('prev-center');
          // 		$this.find('.e-addresses__slider-item.slick-active.next-center').removeClass('next-center').next().addClass('next-center');
          // 	}
          // }
        }).on('afterChange', function (event, slick, currentSlide, nextSlide) {// if(window.matchMedia("(min-width: 1200px)").matches) {
          // 	var centerItem = $this.find('.e-addresses__slider-item.slick-center.slick-current');
          // 	if ( !$this.find('.e-addresses__slider-item.slick-active').hasClass('prev-center') && !$this.find('.e-addresses__slider-item.slick-active').hasClass('next-center') ) {
          // 		$this.find('.e-addresses__slider-item').removeClass('prev-center next-center')
          // 		centerItem.prev().addClass('prev-center');
          // 		centerItem.next().addClass('next-center');
          // 	}
          // }
        });
      }
    });
    /*}).trigger('resize');*/
  }

  ;

  (function () {
    $.preventScrolling = function (selector, options) {
      // запрещаем прокрутку страницы при прокрутке элемента
      var defaults = {
        classes: {
          scrolled: 'is-scrolled',
          onTop: 'is-onTop',
          onBottom: 'is-onBottom'
        },
        onTop: function onTop() {},
        onBottom: function onBottom() {}
      };
      var options = $.extend({}, defaults, options);
      var scroller = $(selector);
      scroller.on('scroll', function () {
        if (scroller.scrollTop() == 0) {
          scroller.addClass(options.classes.onTop).removeClass(options.classes.onBottom);
        }

        if (scroller.scrollTop() == scroller[0].scrollHeight - scroller.height()) {
          scroller.removeClass(options.classes.onTop).addClass(options.classes.onBottom);
        }
      });

      if (scroller[0].scrollHeight > scroller.height()) {
        scroller.addClass('with-scroll');
      } else {
        scroller.removeClass('with-scroll');
      }

      $(window).on('resize', function () {
        if (scroller[0].scrollHeight > scroller.height()) {
          scroller.addClass('with-scroll');
        } else {
          scroller.removeClass('with-scroll');
        }
      });
      scroller.off('mousewheel DOMMouseScroll').on('mousewheel DOMMouseScroll', function (e) {
        var scrollTo = null;

        if (e.type == 'mousewheel') {
          scrollTo = e.originalEvent.wheelDelta * -1;
        } else if (e.type == 'DOMMouseScroll') {
          scrollTo = 40 * e.originalEvent.detail;
        }

        if (scrollTo && scroller[0].scrollHeight > scroller.height()) {
          e.stopPropagation();
          e.preventDefault();
          $(this).scrollTop(scrollTo + $(this).scrollTop());
        }
      });
    };
  })();
  /**
   * Simple menu
   * @version 1.0.0-beta.1
   */


  ;

  (function ($) {
    $.fn.simpleMenu = function (options) {
      var settings = $.extend(true, {
        timing: 300,
        topMargin: 0,
        menu: {
          list: 'ul',
          item: 'li',
          trigger: 'a'
        },
        classes: {
          opened: 'opened',
          active: 'active',
          used: 'used'
        },
        attrs: {
          opened: {
            key: 'opened',
            true: 'true',
            false: 'false'
          }
        }
      }, options);
      var $this = this;
      var $trigers = $this.find(settings.menu.list).parent(settings.menu.item).find('> ' + settings.menu.trigger);
      $trigers.on('click', function (event) {
        event.preventDefault();
        var $list = $(this).parent(settings.menu.item).find('> ' + settings.menu.list);
        $list.css({
          display: 'block'
        });

        if ($list.parent(settings.menu.item).hasClass(settings.classes.opened)) {
          $list.stop().animate({
            marginTop: -($list.outerHeight(true) - settings.topMargin)
          }, settings.timing, function () {
            $list.attr(settings.attrs.opened.key, settings.attrs.opened.false).addClass(settings.classes.used).parent(settings.menu.item).removeClass(settings.classes.opened);
          });
        } else {
          if (!$list.hasClass(settings.classes.used)) {
            $list.css({
              marginTop: -($list.outerHeight(true) - settings.topMargin)
            }).addClass(settings.classes.used);
          }

          $list.parent(settings.menu.item).addClass('opening').end().stop().animate({
            marginTop: 0 + settings.topMargin
          }, settings.timing, function () {
            $list.attr(settings.attrs.opened.key, settings.attrs.opened.true).parent(settings.menu.item).removeClass('opening').end().addClass(settings.classes.used).parent(settings.menu.item).addClass(settings.classes.opened);
          });
        }
      });
    };
  })(jQuery);
  /**
   * Мобильное меню сайта
   */


  var asideMenuBtn = $('.b-aside-menu-btn');
  var asideMenu = $('.b-aside-menu');
  var asideHead = $('.b-aside-menu__head');
  var asideMenuContent = $('.b-aside-menu__content');
  var asideMenuScroller = $('.b-aside-menu__scroller-content');
  var asideMenuFoot = $('.b-aside-menu__foot');

  function openAsideMenu() {
    $('body').addClass('js-menu-open');
    asideMenu.addClass('js-animate js-opening');
  }

  function closeAsideMenu() {
    $('body').removeClass('js-menu-open');
    asideMenu.removeClass('js-animate');
    setTimeout(function () {
      asideMenu.removeClass('js-opening');
    }, 150);
  }

  asideMenuBtn.on('pointerup', function (event) {
    event.preventDefault();

    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      closeAsideMenu();
    } else {
      $(this).addClass('open');
      openAsideMenu();
    }
  });
  $('.b-aside-menu__close').on('pointerup', function (event) {
    event.preventDefault();
    closeAsideMenu();
  });
  $('.b-aside-menu__overlay').on('pointerup', function (event) {
    event.preventDefault();
    closeAsideMenu();
  });
  /**
   * запрещаем прокрутку страницы при прокрутке бокового-мобильного
   */

  $.preventScrolling($('.b-aside-menu__scroller'));
  /**
   * Клонирование верхнего-левого меню в боковое-мобильное
   */

  if ($.exists('.app-header__city-change')) {
    var newCityChange = $('.app-header__city-change').clone();
    newCityChange.addClass('aside-nav-list aside-nav-list__city-change').appendTo(asideMenuScroller);
  }
  /*if ($.exists('.app-header__search')) {
  
      var newSearch = $('.app-header__search').clone();
  
      newSearch
          //.removeClass('app-header__catalog-list')
          .addClass('aside-nav-list__search')
          .appendTo(asideMenuScroller);
  
  
  }*/


  if ($.exists('.app-header__menu')) {
    var newMainMenu = $('.app-header__menu').clone();

    if (newMainMenu.find('> ul > li.more-button').length) {
      newMainMenu.find('> ul > li.more-button > ul > li').appendTo(newMainMenu);
      newMainMenu.find('> ul > li.more-button').remove();
    }

    newMainMenu.removeClass('app-header__menu').addClass('aside-nav-list aside-nav-list__menu').appendTo(asideMenuScroller);
  }
  /*if ($.exists('.aside-nav-list')) {
  
      $('.aside-nav-list').simpleMenu({
          timing : 500,
          menu : {
              trigger : '.sub-menu-trigger'
          }
      });
  }
  
  $(document).on('click', '.app-header__catalog-list-button > a', function(event) {
      if($(this).closest('.aside-nav-list__catalog-list').length) {
          event.preventDefault();
          $(this).toggleClass('is-opened').closest('.aside-nav-list__catalog-list').find('>ul.nav-bar').stop().slideToggle();
      }
      
  });
  
  $(document).on('click', '.svg-icon.svg-icon--chevron-right', function(event) {
      if($(this).closest('.aside-nav-list__catalog-list').length) {
          event.preventDefault();
          $(this).closest('li').toggleClass('opened').find('>ul').stop().slideToggle();
      }
  });*/


  if ($.exists('.e-card-slider')) {
    $('.e-card-slider__blocks').slick({
      arrows: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="98.148px" height="98.148px" viewBox="0 0 98.148 98.148" style="enable-background:new 0 0 98.148 98.148;"	xml:space="preserve"><path d="M33.458,97.562L80.531,50.49c0.75-0.75,0.75-2.078,0-2.828L33.456,0.586C33.081,0.211,32.572,0,32.042,0c-0.53,0-1.039,0.211-1.414,0.586L17.641,13.573c-0.391,0.391-0.586,0.902-0.586,1.414c0,0.512,0.195,1.023,0.586,1.414l32.674,32.674L17.642,81.75c-0.751,0.75-0.75,2.078,0,2.828l12.987,12.984C31.411,98.344,32.677,98.344,33.458,97.562z"/></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Previous" type="button"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="98.148px" height="98.148px" viewBox="0 0 98.148 98.148" style="enable-background:new 0 0 98.148 98.148;"	xml:space="preserve"><path d="M33.458,97.562L80.531,50.49c0.75-0.75,0.75-2.078,0-2.828L33.456,0.586C33.081,0.211,32.572,0,32.042,0c-0.53,0-1.039,0.211-1.414,0.586L17.641,13.573c-0.391,0.391-0.586,0.902-0.586,1.414c0,0.512,0.195,1.023,0.586,1.414l32.674,32.674L17.642,81.75c-0.751,0.75-0.75,2.078,0,2.828l12.987,12.984C31.411,98.344,32.677,98.344,33.458,97.562z"/></svg></button>',
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px'
        }
      }]
    });
  }

  $('.e-card-tabs').myTabs({
    title: '.e-card-tabs__link',
    body: '.e-card-tabs__block',
    responsive: true,
    responsiveWidth: 767
  });

  if ($.exists('.e-card__vertical-slider')) {
    var verticalSlider = $('.e-card__vertical-slider');
    var firstSlide = verticalSlider.find('.e-card__vertical-slider-item').first();
    firstSlide.addClass('_js-slick-active');
    verticalSlider.slick({
      arrows: true,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      vertical: true,
      verticalSwiping: true,
      useTransform: true,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 444.819 444.819" style="enable-background:new 0 0 444.819 444.819;" xml:space="preserve"><path xmlns="http://www.w3.org/2000/svg" d="M433.968,278.657L248.387,92.79c-7.419-7.044-16.08-10.566-25.977-10.566c-10.088,0-18.652,3.521-25.697,10.566   L10.848,278.657C3.615,285.887,0,294.549,0,304.637c0,10.28,3.619,18.843,10.848,25.693l21.411,21.413   c6.854,7.23,15.42,10.852,25.697,10.852c10.278,0,18.842-3.621,25.697-10.852L222.41,213.271L361.168,351.74   c6.848,7.228,15.413,10.852,25.7,10.852c10.082,0,18.747-3.624,25.975-10.852l21.409-21.412   c7.043-7.043,10.567-15.608,10.567-25.693C444.819,294.545,441.205,285.884,433.968,278.657z"/></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 444.819 444.819" style="enable-background:new 0 0 444.819 444.819;" xml:space="preserve"><path xmlns="http://www.w3.org/2000/svg" d="M433.968,278.657L248.387,92.79c-7.419-7.044-16.08-10.566-25.977-10.566c-10.088,0-18.652,3.521-25.697,10.566   L10.848,278.657C3.615,285.887,0,294.549,0,304.637c0,10.28,3.619,18.843,10.848,25.693l21.411,21.413   c6.854,7.23,15.42,10.852,25.697,10.852c10.278,0,18.842-3.621,25.697-10.852L222.41,213.271L361.168,351.74   c6.848,7.228,15.413,10.852,25.7,10.852c10.082,0,18.747-3.624,25.975-10.852l21.409-21.412   c7.043-7.043,10.567-15.608,10.567-25.693C444.819,294.545,441.205,285.884,433.968,278.657z"/></svg></button>'
    });
    $('.e-card__main-item-block').append(firstSlide.html());
    $('.e-card__vertical-slider-item').on('click', function (event) {
      event.preventDefault();
      var $this = $(this);

      if ($this.hasClass('_js-slick-active')) {
        return;
      } else {
        $('.e-card__main-item-block img').hide();
        $('.e-card__vertical-slider-item').removeClass('_js-slick-active');
        $this.addClass('_js-slick-active');
        var $thisImg = $this.find('img').attr('src');
        $('.e-card__main-item-block img').attr('src', $thisImg);
        $('.e-card__main-item-block img').fadeIn();
      }
    });
  }

  if ($.exists('.e-cart-form__form-item--phone')) {
    $('.e-cart-form__form-item--phone > input').attr('placeholder', '+7(000) 000-00-00').mask("+7(999) 999-99-99");
  }

  if ($.exists('.e-cart-table__cart-item-counter')) {
    $('.e-cart-table__cart-item-counter-item--plus').on('click', function (event) {
      event.preventDefault();
      var $this = $(this);
      var currentNumber = parseInt($this.closest('.e-cart-table__cart-item-counter').find('.e-cart-table__cart-item-counter-item--number').text());
      var maxCounter = parseInt($this.data('max-counter'));

      if (currentNumber != maxCounter) {
        $this.closest('.e-cart-table__cart-item-counter').find('.e-cart-table__cart-item-counter-item--number').text(currentNumber + 1);
      } else {
        return false;
      }
    });
    $('.e-cart-table__cart-item-counter-item--minus').on('click', function (event) {
      event.preventDefault();
      var $this = $(this);
      var minCounter = parseInt($this.data('min-counter'));
      var currentNumber = parseInt($this.closest('.e-cart-table__cart-item-counter').find('.e-cart-table__cart-item-counter-item--number').text());

      if (currentNumber != minCounter) {
        $this.closest('.e-cart-table__cart-item-counter').find('.e-cart-table__cart-item-counter-item--number').text(currentNumber - 1);
      } else {
        return false;
      }
    });
    $('.e-cart-table__delete-button').on('click', function (event) {
      event.preventDefault();
      $(this).closest('.e-cart-table__table-row--cart-item').remove();
    });
  }

  if ($.exists('.leftbar-filter')) {
    $('.leftbar-filter__item-check-wrap').each(function () {
      var $this = $(this);
      var count = $this.find('.leftbar-filter__item-check').length;

      if (count > 3) {
        $this.append('<div class="leftbar-filter__hidden-item-check"></div><div class="leftbar-filter__check-more" data-show="показать все" data-hide="свернуть"></div>');
      }

      $(this).find('.leftbar-filter__item-check').each(function () {
        $(this).filter(function (index) {
          var indexUi = $(this).index();

          if (indexUi > 2) {
            var hiddenWrap = $(this).siblings('.leftbar-filter__hidden-item-check');
            $(this).appendTo(hiddenWrap);
          }
        });
      });
    });
    $('.leftbar-filter__check-more').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active').siblings('.leftbar-filter__hidden-item-check').fadeToggle();
    });
    $('.leftbar-filter__item-topline').on('click', function (event) {
      event.preventDefault();
      var $thisItem = $(this).closest('.leftbar-filter__item');

      if ($thisItem.hasClass('acc-hide')) {
        $thisItem.removeClass('acc-hide').addClass('show').find('.leftbar-filter__item-bottom').slideDown();
      } else {
        $thisItem.removeClass('show').addClass('acc-hide').find('.leftbar-filter__item-bottom').slideUp();
      }
    });
    var leftbarFilterModal = $('.remodal[data-remodal-id="leftbar-filter"]').remodal();
    $(document).on('click', '.leftbar-filter__adaptive-title', function (event) {
      event.preventDefault();
      leftbarFilterModal.open();
    });
  }

  if ($.exists('.e-product-item__img')) {
    var itemMaxHeight = 0;
    $('.e-product-item__img').each(function (index, el) {
      if ($(this).outerHeight() > itemMaxHeight) {
        itemMaxHeight = $(this).outerHeight();
      }
    });
    $('.e-product-item__img').css('min-height', itemMaxHeight + 'px');
  }

  var prodButton = $('.e-product-item__add-button a');
  prodButton.on('click', function (e) {
    e.preventDefault();
    var num = $('.app-header__little-cart-count').val(),
        inputNum = $('.app-header__little-cart-count');
    num++;
    inputNum.val(num);
    $(this).parent().addClass('in-cart');
    $(this).html('Товар в корзине');
  });
  $('.e-product-item__compare a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().addClass('active');
    $(this).find('span.comp').html('в сравнении');
  });
  var rateParent = null;
  var rateDefault = null;
  $('.rating--dynamic .svg-icon').on('mouseenter', function () {
    console.log(123);
    rateParent = $(this).closest('.rating');
    rateParent.removeClass('rating--rate-1 rating--rate-2 rating--rate-3 rating--rate-4 rating--rate-5').addClass('rating--rate-' + ($(this).index() + 1));
  });
  $('.rating--dynamic').on('mouseleave', function () {
    rateParent.removeClass('rating--rate-1 rating--rate-2 rating--rate-3 rating--rate-4 rating--rate-5').addClass('rating--rate-' + rateParent.attr('data-rate'));
  });
  $('.rating--dynamic .svg-icon').on('click', function () {
    rateParent.attr('data-rate', $(this).index() + 1);
  });

  if ($.exists('.e-sortby')) {
    $('.e-sortby__item').on('click', function (event) {
      event.preventDefault();
      $(this).closest('.e-sortby').find('.e-sortby__item').removeClass('active');
      $(this).addClass('active');
    });
  }

  var wrapperList = $('.app-header__bottomline-inner-row .app-header__ul');
  var hiddenMenu = $('<ul class="hidden-list is-overflowed"/>');
  $('.app-header__bottomline-inner-row .app-header__menu').append(hiddenMenu);

  function buildHiddenMenu() {
    hiddenMenu.empty();
    wrapperList.find('li').filter(function (index, element) {
      return $(element).position().top > 20;
    }).addClass('is-overflowed').clone().removeClass('is-overflowed').appendTo(hiddenMenu);
  }

  $(window).on('resize', function () {
    buildHiddenMenu();
  });
  $('.more-button > a,.hidden-list').mouseenter(function () {
    event.preventDefault();
    hiddenMenu.show();
  }).mouseleave(function () {
    event.preventDefault();
    hiddenMenu.hide();
  });
  buildHiddenMenu();
});