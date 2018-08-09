$(document).ready(function() {
  //full-page
  $('#fullpage').fullpage({
    sectionSelector: '.js-page-section',
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    autoScrolling: true,
    scrollOverflow: true,
    scrollOverflowReset: true,
    scrollOverflowOptions: {
      mouseWheel: true,
      scrollbars: true,
      useTransform: true,
      useTransition: true,
      HWCompositing: true,
      bounce: true
    },
    onLeave: function(origin, destination, direction) {
      var params = {
        origin: origin,
        destination: destination,
        direction: direction
      };
      if(params.destination.item.classList.contains('dark')) {
        $('.main-menu').addClass('white');
      } else {
        $('.main-menu').removeClass('white');
      }
      if(params.destination.item.classList.contains('last')) {
        $('.header').addClass('visibility-hidden');
      } else {
        $('.header').removeClass('hidden').removeClass('visibility-hidden');
      }
    },
    afterLoad: function(origin, destination, direction) {
      var params = {
        origin: origin,
        destination: destination,
        direction: direction
      };
      if(params.destination.item.classList.contains('last')) {
        $('.header').addClass('hidden');
      }
    },
    afterRender: function() {
      var section = this;
      if(section.isFirst === true && section.item.classList.contains('dark')){
        $('.main-menu').addClass('white');
      }
    }
  });

  //слайдер карточек партнеров
  if ($(".js-partners-slider").length) {
    $('.js-partners-slider').slick({
      infinite: false,
      edgeFriction: 0,
      prevArrow: '<button type="button" class="slick-prev" title="Назад"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#arrow-left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next" title="Вперед"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#arrow-right"/></svg></button>',
      dots: true,
      appendDots: $('#partners-slider-dots')
    });
  }

  //убираем эвенты при перелистывании
  $('.js-partners-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(this).addClass('no_pointer_events');
  });

  $('.js-partners-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(this).removeClass('no_pointer_events');
  });

  //слайдер блога
  if ($(".js-blog-slider").length) {
    $('.js-blog-slider').slick({
      slidesToShow: 3,
      infinite: false,
      edgeFriction: 0,
      prevArrow: '<button type="button" class="slick-prev" title="Назад"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#arrow-left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next" title="Вперед"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#arrow-right"/></svg></button>',
      dots: true,
      appendDots: $('#blog-slider-dots'),
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
    var sliderSlidesCount = $('.js-blog-slider').slick('getSlick').$slides.length;

    //добавляем пустой слайд в конец слайдера после инициализации, если ширина окна меньше 1900
    if($('body').width() < 1900){
      $('.js-blog-slider').slick('slickAdd', '<div class="articles-slider__slide"><div class="articles-slider__slide-fake"></div></div>');
    }
    //удаляем последний пустой слайд, при достижении брейкпоинта 1900
    $('.js-blog-slider').on('breakpoint', function(e) {
      $(this).slick('slickRemove', sliderSlidesCount - 1);
    });
  }

  //убираем эвенты при перелистывании
  $('.js-blog-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(this).addClass('no_pointer_events');
  });

  $('.js-blog-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(this).removeClass('no_pointer_events');
  });

  //слайдер сми
  if ($(".js-articles-slider").length) {
    $('.js-articles-slider').slick({
      slidesToShow: 3,
      infinite: false,
      edgeFriction: 0,
      prevArrow: '<button type="button" class="slick-prev" title="Назад"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#arrow-left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next" title="Вперед"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#arrow-right"/></svg></button>',
      dots: true,
      appendDots: $('#articles-slider-dots'),
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
    var sliderSlidesCount = $('.js-articles-slider').slick('getSlick').$slides.length;
    //добавляем пустой слайд в конец слайдера после инициализации, если ширина окна меньше 1900
    if($('body').width() < 1900){
      $('.js-articles-slider').slick('slickAdd', '<div class="articles-slider__slide"><div class="articles-slider__slide-fake"></div></div>');
    }
    //удаляем последний пустой слайд, при достижении брейкпоинта 1900
    $('.js-articles-slider').on('breakpoint', function(e) {
      $(this).slick('slickRemove', sliderSlidesCount - 1);
    });
  }

  //убираем эвенты при перелистывании
  $('.js-articles-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(this).addClass('no_pointer_events');
  });

  $('.js-articles-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(this).removeClass('no_pointer_events');
  });

  //форма
  $('.js-input').each(function( index ) {
    if ($(this).val() != 0) {
      $(this).addClass("changed");
    } else {
      $(this).removeClass("changed");
    }

    $(this).blur(function() {
      if ($(this).val() != 0) {
        $(this).addClass("changed");
      } else {
        $(this).removeClass("changed");
      }
    });
  });
});
