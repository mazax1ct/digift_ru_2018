$(document).ready(function() {
  //слайдер карточек
  if ($(".js-cards-slider").length) {
    $('.js-cards-slider').slick({
      infinite: false,
      edgeFriction: 0,
      prevArrow: '<button type="button" class="slick-prev" title="Назад"><img src="images/icons/slider_left.jpg"></button>',
      nextArrow: '<button type="button" class="slick-next" title="Вперед"><img src="images/icons/slider_right.jpg"></button>',
      dots: true,
      appendDots: $('#dots_1')
    });
  }
});
