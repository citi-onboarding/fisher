$( document ).ready(resizing)
$( window ).resize(resizing)


var globalSize = 0

function resizing() {
    
    if( window.innerWidth > 850 ){

        cards = document.getElementsByClassName("card-description")

        for (var i = 0; i < cards.length; i++){
            var cardSize = cards[i].offsetHeight
            if (cardSize > globalSize) {
                globalSize = cardSize
            }
        }

        document.getElementById("bluebar").style.height = globalSize + "px";
        globalSize = 0;
    }
}  