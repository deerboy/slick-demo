$('.js-carousel').slick({
  dots: true,
  nextArrow: '<div class="carousel__arrow carousel__arrow--next"><i class="fas fa-chevron-right"></i></div>',
  prevArrow: '<div class="carousel__arrow carousel__arrow--prev"><i class="fas fa-chevron-left"></i></div>',
  dotsClass: 'carousel__dots',
  responsive: [
    {
      breakpoint: 640,
      settings: {
        arrows: false,
      }
    }
  ]
});