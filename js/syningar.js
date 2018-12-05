var cardContainer = document.querySelector(".card-container");

function addCard(play){

    var card = 
    `<div class="card"  onmouseover="showMouseOverCard(this)" onmouseleave="showMouseLeaveCard(this)">
        <div class="small-button" />
        <a href="${play.buttonURL}">Kaupa miða</a></div>
         <div class="card-img">
             <img src="${play.photo}" alt="${play.name}">
         </div>
        <div class="card-title">    
             <h1>${play.name}</h1>
        </div>          
    </div> `;
    cardContainer.innerHTML += card;
}

// var search= document.querySelector("#search");

// function matchplay(play) {
//     return true;(play.name.includes(search.value) 
//     );
// }

function loadCards() {
    
    cardContainer.innerHTML = "";
    var matchedPlays = cards; //matchedPlays eru filtered niðurstöðurnar, í byrjun er sjálfgefið að öll leikrit sjáist, filterast út með leit
    
    var itemsToShow = matchedPlays.length;
    var maxItems = cardContainer.getAttribute("data-list-size");
    
    if (maxItems > 0 && maxItems < itemsToShow) {
        itemsToShow = maxItems;
    } //segir hvað á að sýna mörg spjöld

    for (i = 0; i < itemsToShow; i ++) {
        addCard(matchedPlays[i])
    }
    if (matchedPlays.length===0){
        kassar.innerHTML = '<h2 class="leitin">Leitin skilaði engum niðurstöðum</h2>';
    } // ef það er ekkert lenght á matchedPlays þýðir það að ekkert passar við leitina
    //þarf kannski að hreinsa þetta úr kóðanum
}


loadCards();



