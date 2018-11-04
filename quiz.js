var quizContainer = document.getElementById('quiz'); 
var submitButton = document.getElementById('next-question');


var spurningar = [
    {
      spurning: "Ertu inni- eða útiköttur",
      svor: {
        a: "inniköttur",
        b: "útiköttur",
      },
    },
    {
      spurning: "Hver eru áhugmál þín",
      svor: {
        a: "Veiða mýs",
        b: "Elta skottið á mér",
        c: "Borða",
        d: "Láta þjóna mér",
      },
    },
    {
      spurning: "Uppáhaldsmatur",
      svor: {
        a: "Borða allt",
        b: "Þurrfóður",
        c: "Blautfóður",
        d: "Kattanammi",
      },
    },
    {
        spurning: "Hvað finnst þér um hunda?",
        svor: {
          a: "Ég hata þá",
          b: "Hundar eru eins og stórir heimskir kettir",
          c: "Besti vinur minn er hundur",
          d: "Þeir eru ágætir",
        },
      },
      {
        spurning: "Hvað líkar þér best við eiganda þinn?",
        svor: {
          a: "Hann gefur mér að borða",
          b: "Hann klappar mér",
          c: "Hann hlýðir mér",
          d: "Hann leikur við mig",
        },
      },
  ];

  var spurningNumer = 0; 
  
  function birtaSpurningu(){
      var nyjastaSpurning = spurningar[spurningNumer]; /* spurningNumer er 0, af því þetta er í kassa sviga
      þá veit ég að spurningNumer er array position í var spurningar*/
      
      var spurnTexti = `<h1 class="spurningar">${nyjastaSpurning.spurning}</h1>`;

      /*þetta fyrir neðan er loop, keys fer í gegnum properties í object, forEach, gerir eitthvað fyrir öll property sem það 
      finnur, key er property-ið sjálft, (hér a,b,c,d) index eer arrayið svo a b c d er komið í array.
      */
      Object.keys(nyjastaSpurning.svor).forEach(function(key,index) {
        var svar = nyjastaSpurning.svor[key];
        var svarValue = key;
        spurnTexti += `<input class="quiz-input" type="radio" name="svar" value="${svarValue}">${svar}</input>`
    });

      quizContainer.innerHTML = spurnTexti 

  }; //býr til radiobutton list fyrir spurningarnar

  function svaraSpurningu(){

    var nyjastaSvar = document.querySelector('input[name="svar"]:checked').value;
    for (var arrayPosition = 0; arrayPosition < cats.length; arrayPosition ++) {
        if(cats[arrayPosition].svor[spurningNumer] === nyjastaSvar){
            cats[arrayPosition].score++ //bæti einum við stig kattarins
        }
    }

    spurningNumer++;

    if(spurningNumer===spurningar.length){
        synaNidurstodur();
    }
    else{
        birtaSpurningu();
    }
  }; //scannar kettina og eykur skorið hjá þeim köttum sem hafa sama svar
  //ef það þarf að hlaða inn fleiri spurningum, hækka skorið á var spurningNumer og á síðustu spuringu
  //kalla á synaNidurstodur

  submitButton.onclick = svaraSpurningu; //kallar á functionið svaraSpurningu sem síðan gerir allt sem neft fyrir ofan

  function compareCatScore(catA, catB) {
    
    var comparison = 0;
    if (catA.score > catB.score) {
      comparison = -1;
    } else if (catA.score < catB.score) {
      comparison = 1;
    }//ber saman stig tveggja katta
    return comparison;
  }
  
  function synaNidurstodur(){
      var bestCats = cats.sort(compareCatScore); //sort býr til array með köttum í röð frá stigahæstu til stigalægstu
      for (arrayPosition = 0; arrayPosition < 3; arrayPosition ++){
        addCard(bestCats[arrayPosition], true); // hér er true því ég vil sýna skorið
    }
    quizContainer.innerHTML = `<br/><br/><br/><h2>Þessir kettir passa best við þig</h2>`; 
    submitButton.style.visibility = 'hidden';
} //felur radiobutton listann, submit takkann og sýnir þrjá stigahæstu kettina

function nullstilla(){
    for (var arrayPosition = 0; arrayPosition < cats.length; arrayPosition ++) {
        cats[arrayPosition].score=0; //lækkar stig kattarins niður í 0
    }

}//loopa í gegnum kettina og setur skorið niður í núll. 

birtaSpurningu();
nullstilla();