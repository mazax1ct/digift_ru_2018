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

  //слайдер карточек
  if ($(".js-cards-slider").length) {
    $('.js-cards-slider').each(function( index ) {
      $(this).slick({
        infinite: false,
        edgeFriction: 0,
        prevArrow: '<button type="button" class="slick-prev" title="Назад"><img src="images/icons/slider_left.jpg"></button>',
        nextArrow: '<button type="button" class="slick-next" title="Вперед"><img src="images/icons/slider_right.jpg"></button>',
        dots: true,
        appendDots: $('#'+ $(this).attr("data-dots") +'')
      });
    });
  }

  //убираем эвенты при перелистывании
  $('.js-cards-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(this).addClass('no_pointer_events');
  });

  $('.js-cards-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(this).removeClass('no_pointer_events');
  });

  //слайдер статей
  if ($(".js-articles-slider").length) {
    $('.js-articles-slider').each(function( index ) {
      $(this).slick({
        slidesToShow: 3,
        infinite: false,
        edgeFriction: 0,
        prevArrow: '<button type="button" class="slick-prev" title="Назад"><img src="images/icons/slider_left.jpg"></button>',
        nextArrow: '<button type="button" class="slick-next" title="Вперед"><img src="images/icons/slider_right.jpg"></button>',
        dots: true,
        appendDots: $('#'+ $(this).attr("data-dots") +'')
      });
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

  //новость
  $('.js-article').click(function() {
    $('body').addClass('overflow-hidden');
    $('.article-detail').addClass('is-open');
    return false;
  });

  $('.js-article-close').click(function() {
    $('.article-detail').removeClass('is-open');
    $('body').removeClass('overflow-hidden');
    return false;
  });

});
