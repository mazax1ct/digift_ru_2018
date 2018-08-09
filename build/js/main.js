//проверка touch
function isTouchDevice() {
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

$(document).ready(function() {
  //убираем пометку о том что js выключен
  $('body').removeClass('no-js');

  //full-page
  if ($('#fullpage').length) {
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
        $('.js-root .main-menu__link').removeClass('drop-open');
        $('.header').removeClass('fader').stop(true, true);
        $('.main-menu__dropdown').fadeOut(200).stop(true, true);
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
  }

  //слайдер карточек партнеров
  if ($('.js-partners-slider').length) {
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
  if ($('.js-blog-slider').length) {
    $('.js-blog-slider').slick({
      mobileFirst: true,
      slidesToShow: 3,
      infinite: false,
      edgeFriction: 0,
      prevArrow: '<button type="button" class="slick-prev" title="Назад"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#arrow-left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next" title="Вперед"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#arrow-right"/></svg></button>',
      appendArrows: $('#blog-slider-arrows'),
      dots: true,
      appendDots: $('#blog-slider-dots')
    });

    //добавляем пустой слайд в конец слайдера после инициализации, если ширина окна меньше 1900
    if($('body').width() < 1900) {
      $('.js-blog-slider').slick('slickAdd', '<div class="articles-slider__slide"><div class="articles-slider__slide-fake"></div></div>');
    }
  }

  //убираем эвенты при перелистывании
  $('.js-blog-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(this).addClass('no_pointer_events');
  });

  $('.js-blog-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(this).removeClass('no_pointer_events');
  });

  //слайдер сми
  if ($('.js-articles-slider').length) {
    $('.js-articles-slider').slick({
      mobileFirst: true,
      slidesToShow: 3,
      infinite: false,
      edgeFriction: 0,
      prevArrow: '<button type="button" class="slick-prev" title="Назад"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#arrow-left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next" title="Вперед"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#arrow-right"/></svg></button>',
      appendArrows: $('#articles-slider-arrows'),
      dots: true,
      appendDots: $('#articles-slider-dots')
    });

    //добавляем пустой слайд в конец слайдера после инициализации, если ширина окна меньше 1900
    if($('body').width() < 1900) {
      $('.js-articles-slider').slick('slickAdd', '<div class="articles-slider__slide"><div class="articles-slider__slide-fake"></div></div>');
    }
  }

  //убираем эвенты при перелистывании
  $('.js-articles-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(this).addClass('no_pointer_events');
  });

  $('.js-articles-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(this).removeClass('no_pointer_events');
  });

  //дропдаун на touch
  if(isTouchDevice() === true) {
    $('.js-root .main-menu__link').click(function () {
      if(!$(this).hasClass('drop-open')) {
        $('.main-menu__link').removeClass('drop-open');
        $(this).addClass('drop-open');
        $('.header').addClass('fader').stop(true, true);
        $('.main-menu__dropdown').fadeOut(200).stop(true, true);
        $(this).next('.main-menu__dropdown').fadeIn(200).stop(true, true);
        return false;
      } else {
        return true;
      }
    });

    //закрытие дропдауна при клике не в меню
    $(document).click(function(event) {
      if ($(event.target).closest('.js-root .main-menu__link').length) return;
        $('.js-root .main-menu__link').removeClass('drop-open');
        $('.header').removeClass('fader').stop(true, true);
        $('.main-menu__dropdown').fadeOut(200).stop(true, true);
        event.stopPropagation();
    });
  }

  //выпадающее меню
  $('.js-root').hover(
    function() {
      //появляется псевдоэлемент с затенением
      $('.header').addClass('fader').stop(true, true);
      //появляется дропдаун
      $(this).find('.main-menu__dropdown').fadeIn(200);
    }, function() {
      //исчезает дропдаун
      $(this).find('.main-menu__dropdown').stop(true, true).fadeOut(200);
      //класс для обраной анаимации псевдоэлемента
      $('.header').addClass('fade-out');
      //полностью убираем псевдоэлемент
      setTimeout(function() {
        $('.header').removeClass('fader').removeClass('fade-out');
      }, 200);
    }
  );

  //форма
  $('.js-input').each(function( index ) {
    if ($(this).val() != 0) {
      $(this).addClass('changed');
    } else {
      $(this).removeClass('changed');
    }

    $(this).blur(function() {
      if ($(this).val() != 0) {
        $(this).addClass('changed');
      } else {
        $(this).removeClass('changed');
      }
    });
  });
});
