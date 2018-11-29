$(document).ready(function() {
    //Adicionar dots
	let totalSlides = $('.cascade-slider_item').length;
    let dotClass = 'cascade-slider_dot'
    let dotElementHTML = '<li class="' + dotClass + '"></li>';
    for (let i = 0; i < totalSlides; i++) {
    	$('.cascade-slider_nav').append(dotElementHTML);
    }

    $('.' + dotClass).eq(0).addClass('cur');

    //Inicializar slider
    $('#cascade-slider').cascadeSlider({});

    //Adicionar evento de clique no botões de voltar e ir
    $('.cascade-slider_arrow-left, .cascade-slider_arrow-right').click(function(){
    	let index = $('.cascade-slider_item.now').data('slide-number');
    	$('.cascade-slider_dot').eq(index).addClass('cur');
    });

    $('.botao-agendamento').click(function() {
        $('#myModal').fadeIn();
    });

    $('#modal-close, .modal-overlay').click(function() {
        $('#myModal').fadeOut();
    });
});
