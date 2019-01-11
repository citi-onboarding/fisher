$('document').ready(() => {
  $('#carrossel-servicos').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" onclick="resizeDepoiments()" class="carousel-next"><img src="/static/imagens/leftarrowangle1.svg"></button>',
    nextArrow: '<button type="button" onclick="resizeDepoiments()" class="carousel-prev"><img src="/static/imagens/leftarrowangle1.svg"></button>',
    centerMode: true,
  });

  $('.solicitar-servico').click((e) => {
    $('#servico-modal-container').css('display', 'flex');
    $('#servico-select').val(e.target.getAttribute('data'));
  });
  
  $('#modal-close').click(() => {
    $('#servico-modal-container').css('display', 'none');
  });
});