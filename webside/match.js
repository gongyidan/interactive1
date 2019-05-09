let card =  document.getElementsByClassName("image");
let cards = [...card];
var openedCards = [];

function cardOpen() {
    openedCards.push(this);
    console.log(openedCards.length);
    var len = openedCards.length;
    if(len === 2){
        if(openedCards[0].className === openedCards[1].className){
            matched();
        } else {
            alert("!");
        }
        openedCards = [];
    }
}

for (var i = 0; i < cards.length; i++) {
    card = cards[i];
    card.addEventListener("click", cardOpen);
}

function matched() {
    openedCards[0].style.visibility = "hidden";
    openedCards[1].style.visibility = "hidden";
    openedCards = [];
}