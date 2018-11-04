
var button = document.querySelector("#search-button");
var genderSearch= document.querySelector("#gender-search");
var search= document.querySelector("#search");
var typeSearch= document.querySelector("#type-search");
var ageSearch= document.querySelector("#age-search");

function matchCat(cat) {
    return (cat.catname.includes(search.value)
        && (cat.gender===(genderSearch.value) || genderSearch.value==="all")
        && (cat.age===(ageSearch.value) || ageSearch.value==="all")
        && (cat.type===(typeSearch.value) || typeSearch.value==="all")
    );
}

function loadCats() {
    kassar.innerHTML = "";
    var matchedCats = cats.filter(matchCat) //matchedCats eru filtered niðurstöðurnar
    for (arrayPosition = 0; arrayPosition < matchedCats.length; arrayPosition ++) {

        addCard(matchedCats[arrayPosition], false)//þetta er hvar einn köttur er staðsettur
        //false í seinna parameter af því ég vil ekki birta skorið hér
    }
    if (matchedCats.length===0){
        kassar.innerHTML = '<h2 class="leitin">Leitin skilaði engum niðurstöðum</h2>';
    } // ef það er ekkert lenght á matchedCats þýðir það að ekki passar við leitina
}


function addItemToList (value, list) {

    for (var listArrayPosition = 0; listArrayPosition < list.options.length ; listArrayPosition ++) {
         if (list.options[listArrayPosition].value == value) {
              return true;
         }    
     } // svo sama value birtist ekki tvisvar í dropdown listanum, þetta er false fyrst og þá gerist þetta
     //fyrir neðan (þ.e option er búið til), en ef satt þá stoppar þetta. þ.e sama option birtist ekki tvisvar

    var option = document.createElement('option'); //þetta býr til nýtt option í html-inu, fann þetta með að gúgla
    option.text = value; //option.text er textinn í option elementinu
    list.options.add(option, list.options.length); //length, bætir option aftast í listann, ef ég vil bæta
    //framar í listann þá kemur númer í staðinn fyrir length
}
function loadLists() {
    for (var arrayPosition = 0; arrayPosition < cats.length; arrayPosition ++) {
        addItemToList(cats[arrayPosition].gender, genderSearch);
        addItemToList(cats[arrayPosition].type, typeSearch);
        addItemToList(cats[arrayPosition].age, ageSearch);
    }
} // þetta bætir listunum á síðuna

button.onclick = loadCats;

loadCats(); //kallar á functionið loadCats, svo þeir birtist þegar síðan opnast þá unfiltered því all er 
//valið by default
loadLists(); //þetta kallar á loadlist svo valmoguleikarnir birtast sem option í select í html-inu

// javascript fyrir sign up hér að neðan

var signUp = document.querySelector("#sign-up-button");
var catNameTextbox = document.querySelector("#catname");
var photoTextbox= document.querySelector("#photo");
var ageTextbox= document.querySelector("#age");
var genderTextbox= document.querySelector("#gender");
var typeTextbox= document.querySelector("#type");

var addCat = function(e){
    var cat = { photo: photoTextbox.value,
    catname: catNameTextbox.value, 
    age: ageTextbox.value, 
    gender: genderTextbox.value,
    type: typeTextbox.value};
    addCard(cat);    
}

signUp.onclick = addCat;
