$('document').ready(() => {
  $('.slider-active').slick({
    prevArrow: '<button type="button" class="carousel-next"><img src="/static/imagens/leftarrowangle1.svg"></button>',
    nextArrow: '<button type="button" class="carousel-prev"><img src="/static/imagens/leftarrowangle1.svg"></button>'
  });
});

$('#avatar-imagem').css('background-image', `url(media/${$(`.slider-item[index=0]`).attr('imgurl')})`); 

$('.slider-active').on('afterChange', (event, slick, activeSlide) => {
  $('#avatar-imagem').css('background-image', `url(media/${$(`.slider-item[index=${activeSlide}]`).attr('imgurl')})`); 
});

