var kassar = document.querySelector("#container");

var cats = [
    { photo: "https://cdn-images-1.medium.com/max/1600/1*mONNI1lG9VuiqovpnYqicA.jpeg",
     catname: 'Kisi', 
     age: '5 ára', 
     gender: "Fress",
     type: "Heimilisköttur",
     svor: ["b","c","c","a","b"]
    },

     { photo: "https://frettabladid.imgix.net/perla_180615_120836.jpg?auto=format%2Ccompression&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=490&ixlib=php-1.1.0&q=80&w=736&s=df92d7330956a67d013f09ef981eb8c4",
     catname: 'Perla', 
     age: '9 ára', 
     gender: "Læða",
     type: "Heimilisköttur",
     svor: ["b","d","d","a","a"]
    },

     { photo: "https://www.catster.com/wp-content/uploads/2017/01/maine-coon-01-119076985-600x497.jpg",
     catname: 'Mjálmar', 
     age: ' 3 ára', 
     gender: "Fress",
     type: "Maine Coon",
     svor: ["a","c","a","c","d"]
    },
     
     { photo: "https://jornal.drougmagazine.ru/upload/iblock/758/7585ebbe06d96033d0d7f92070df3af7.jpg",
     catname: 'Lotta', 
     age: '5 ára', 
     gender: "Læða",
     type: "Síamssköttur",
     svor: ["a","a","d","d","c"]
    },

     { photo: "https://therapypet.org/wp-content/uploads/2018/02/norwegian-cat.jpg",
     catname: 'Simba', 
     age: '7 ára', 
     gender: "Fress",
     type: "Norskur skógarköttur",
     svor: ["b","b","a","d","a"]
    },
    
     { photo: "https://i.imgur.com/tnuIxnp.jpg",
     catname: 'Nala', 
     age: '2 ára', 
     gender: "Læða",
     type: "Heimilisköttur",
     svor: ["b","a","b","c","d"]
    },
    
     { photo: "http://shsanimalshelter.com/wp-content/uploads/2018/05/DSC_2492-745x1024.jpg",
     catname: 'Kleópatra', 
     age: '1 árs', 
     gender: "Læða",
     type: "Heimilisköttur",
     svor: ["a","a","c","d","d"],
    },
    
     { photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lR20gYCoX4tXri7-SpuT26uaPwDKW7iz2UJK25C6-3wclKoX",
     catname: 'Mörður', 
     age: '10 ára', 
     gender: "Fress",
     type: "British shorthair",
     svor: ["a","d","c","b","a"]
    },
    
     { photo: "https://i0.wp.com/www.wagpets.com/wp-content/uploads/2016/09/word-image.jpeg?fit=808%2C720&ssl=1",
     catname: 'Köttólfur', 
     age: '3 ára', 
     gender: "Fress",
     type: "Norskur skógarköttur",
     svor: ["b","d","a","a","b"]
    },
     
     { photo: "https://1dkpox2x79277ohvm1um4njx-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/winking-cat-licking.jpg",
     catname: 'Álfheiður', 
     age: '6 ára', 
     gender: "Læða",
     type: "Heimilisköttur",
     svor: ["a","c","c","c","d"]
    },
     
];

console.log(cats);

function addCard(cat,showScore){

    var kassi = `<div class="kettir">
        <img src="${cat.photo}"> 
        <h2>${cat.catname} </h2>
        <h3>${cat.age}</h3>
        <h3>${cat.gender}</h3>
        <h3>${cat.type}</h3>`;
        if(showScore){
            kassi+=`<h3>Þú varst með ${cat.score} eins svör og þessi kisa</h3>`
        }
        kassi+='</div>';
    kassar.innerHTML += kassi;
} //ég kalla á þetta function í load Cats
