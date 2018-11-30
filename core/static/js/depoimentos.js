$(document).ready(function () {
  $('.slider-active').slick({
    prevArrow: '<button type="button" class="carousel-prev" id="next"><img src="/static/imagens/leftarrowangle1.svg" /></button>',
    nextArrow: '<button type="button" class="carousel-next"><img src="/static/imagens/leftarrowangle1.svg" /></button>'

  });
});



window.onload = function () {
  avatar = new Array('imagens/executivo.jpg', 'imagens/executivo2.jpg', 'imagens/executivo3.jpg');
  document.getElementById('next').addEventListener('click', function (event) {
    document.getElementById('img').style.backgroundImage = avatar[1];
  });
}
