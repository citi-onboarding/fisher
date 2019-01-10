$('document').ready(() => {
  $('#carrossel-servicos').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" onclick="resizeDepoiments()" class="carousel-next"><img src="/static/imagens/leftarrowangle1.svg"></button>',
    nextArrow: '<button type="button" onclick="resizeDepoiments()" class="carousel-prev"><img src="/static/imagens/leftarrowangle1.svg"></button>'
  });
});