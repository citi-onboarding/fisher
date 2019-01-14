function myfunction(X) {
  X.classList.toggle("change");
}

$('.container').click(function () {
  $("#nav-mobile").slideToggle("slow", function () {});
});

$('.navbar-link').on('click', function (event) {
  if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      const dist = ($(hash).offset().top - $(window).scrollTop()) / 1.5;

      $('html, body').animate({
          scrollTop: $(hash).offset().top,
      }, Math.abs(dist));
  }
});

