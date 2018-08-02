//изменение цвета меню
var waypoints = $('.js-section-dark').waypoint(function(direction) {
  $('.main-menu').toggleClass('white');
}, {
  offset: '50'
});

$(document).ready(function() {
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

  //убираем открытие карточек при перелистывании
  $('.js-cards-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(this).addClass('no_pointer_events');
  });

  $('.js-cards-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(this).removeClass('no_pointer_events');
  });
});
