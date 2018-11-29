function myfunction(X) {
    X.classList.toggle("change");
}

$(document).ready(function () {
    $('.container').click(function () {
        $('ul').toggleClass('active');
    })
    $(window).resize(()=>{
        
       if($(window).width() >= 768){
           $('ul').show();
       }else{
           $('ul').hide();
       }
    })
})



$('.container').click(function () {
    $('ul').slideToggle("slow", function () {
        // Animation complete.
    });
});


var $doc = $('html, body');
$('.scroll').click(function() {
$doc.animate({
scrollTop: $( $.attr(this, 'href') ).offset().top
}, 500);
return false;
});

$('#logomarca').click(function() {
$doc.animate({
scrollTop: 0
}, 500);
return false;
});
