function myfunction(X) {
  X.classList.toggle("change");
}

$('.container').click(function () {
  $("#nav-mobile").slideToggle("slow", function () {});
});

$('.navbar-link').on('click', function (event) {
  if (this.hash !== '') {
      event.preventDefault();
      const adjusts = {
        sobrenos: 20,
        servicos: -30,
        depoimentos: 0,
        contato: 7,
      };
      const hash = this.hash;
      const dist = ($(hash).offset().top - $(window).scrollTop()) / 1.5;

      $('html, body').animate({
          scrollTop: $(hash).offset().top + adjusts[hash.substr(1)],
      }, Math.abs(dist));
  }
});

