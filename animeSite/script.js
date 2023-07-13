"use strict";

const naruto = document.getElementById('naruto');
const onePiece = document.getElementById('onePiece');
const demonSlayer = document.getElementById('demonSlayer');
const attackOnTitan = document.getElementById('attackTitan');
const narutoShippuden = document.getElementById('narutoShippuden');
const assassination = document.getElementById('assassination');
const myHeroAcademia = document.getElementById('myHeroAcademia');
const hunterXhunter = document.getElementById('hunterXhunter');
const section = document.getElementById('section')



// naruto.addEventListener('click',  function(event){

//     //c'est pour pouvoir rediriger vers une nouvelle page apres le click
//     // if(event.target.id = 'naruto')
//     // window.open("https://animetv.night-city.online/1293-naruto-qartulad-narutos-bavshvoba.html", "_self");

//     if(event.target.id = 'naruto'){
//         window.location.href = "naruto.html"
//     }
// });

// onePiece.addEventListener('click',  function(event){
//     if(event.target.id = 'onePiece'){
//         window.location.href = 'onePiece.html'
//     }
// });


const elements = document.querySelectorAll('.col');

// ajoute un événement "click" à chaque élément avec la classe "btn"
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function() {
    // utilise une instruction switch pour traiter les clics en fonction de l'ID de l'élément cliqué
    switch (this.id) {
      case 'naruto':
        // code à exécuter lorsque l'élément "naruto" est cliqué
        window.location.href = "./filesHtml/naruto.html"
        break;
      case 'onePiece':
        // code à exécuter lorsque l'élément "onePiece" est cliqué
        window.location.href = './filesHtml/onePiece.html'
        break;
      case 'demonSlayer':
        // code à exécuter lorsque l'élément "demonSlayer" est cliqué
        window.location.href = './filesHtml/demonSlayer.html'
        break;
        case 'attackTitan':
        // code à exécuter lorsque l'élément "demonSlayer" est cliqué
        window.location.href = './filesHtml/attackTitan.html'
        break;
        case 'narutoShippuden':
        // code à exécuter lorsque l'élément "demonSlayer" est cliqué
        window.location.href = './filesHtml/narutoSippuden.html'
        break;
        case 'assassination':
        // code à exécuter lorsque l'élément "demonSlayer" est cliqué
        window.location.href = './filesHtml/assassination.html'
        break;
        case 'myHeroAcademia':
        // code à exécuter lorsque l'élément "demonSlayer" est cliqué
        window.location.href = './filesHtml/myHeroAcademia.html'
        break;
        case 'hunterXhunter':
            // code à exécuter lorsque l'élément "demonSlayer" est cliqué
        window.location.href = './filesHtml/hunterXhunter.html'
        break;
    }
  });
};






