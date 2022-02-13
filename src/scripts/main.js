$(document).ready(function () {
  $(".reviews__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    draggable: false,
    speed: 400,
    centerPadding: '0px',
    dots: false,
    arrows: false,
    asNavFor: '.reviews__phone-slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          fade: true,
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(".reviews__phone-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
  speed: 400,
  dots: false,
  arrows: false,
  asNavFor: '.reviews__slider',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        fade: true,
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
});

$('.reviews__phone-slider-btn--left').click(function () {
  $('.reviews__phone-slider').slick('slickPrev');
});
$('.reviews__phone-slider-btn--right').click(function () {
  $('.reviews__phone-slider').slick('slickNext');
});

new ScrollBooster({
  viewport: document.querySelector('.roadmap__wrap'),
  scrollMode: 'transform',
  direction: "horizontal",
  pointerMode: "all"
});

