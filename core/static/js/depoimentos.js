$('document').ready(() => {
  $('.depoimentos-card').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" onclick="resizeDepoiments()" class="carousel-next"><img src="/static/imagens/leftarrowangle1.svg"></button>',
    nextArrow: '<button type="button" onclick="resizeDepoiments()" class="carousel-prev"><img src="/static/imagens/leftarrowangle1.svg"></button>'
  });
});

window.onload = resizeDepoiments();

var topHeight = 0;
function resizeDepoiments() {
  console.log('oi')
  cards = document.getElementsByClassName('card-item');
  var i = 0;
  for (i = 0; i < cards.length; i ++){
    if(cards[i].offsetHeight > topHeight){
      topHeight = cards[i].offsetHeight;
    }
  }
  var track = document.getElementsByClassName('slick-track')
  track[0].style.height = topHeight + "px";
  topHeight = 0
}