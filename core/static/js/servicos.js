$('document').ready(() => {
  $('.servicos-card').slick({
    centerMode: true,
    dots: true,
    variableWidth: true,
    variableHeight: true,
    prevArrow: '<button type="button"  class="service-prev"><img src="/static/imagens/left-arrow.png"></button>',
    nextArrow: '<button type="button"  class="service-next"><img src="/static/imagens/right-arrow.png"></button>',
  });

  $('.solicitar-servico').click((e) => {
    $('#servico-modal-container').css('display', 'flex');
    $('#servico-select').val(e.target.getAttribute('data'));
  });

  $('#modal-close').click(() => {
    $('#servico-modal-container').css('display', 'none');
  });
});
 