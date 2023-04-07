$('.main__slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false
});

$('.popular__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button class="slick-prev" type="button"><img class="arrow" src="img/arrow.png" alt=""></button>',
    nextArrow: '<button class="slick-next" type="button"><img class="arrow" src="img/arrow.png" alt=""></button>',
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});

$('.mobile__menu__open').click(function (e) { 
  e.preventDefault();
  $('.nav__mobile').removeClass('st0');
  $('body').addClass('no_scroll');
});

$('.mobile__menu__close').click(function (e) { 
  e.preventDefault();
  $('.nav__mobile').addClass('st0');
  $('body').removeClass('no_scroll');
});