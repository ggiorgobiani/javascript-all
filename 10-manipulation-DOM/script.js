"use strict";

const div_1 = document.getElementById('div_1')

//-----creation d'un elemant dans html-----
const div_2 = document.createElement('div');

div_2.id= "div_2";
//--ajouter le text dans ce div -- 
//ca prends le text -> former comme objet -> mettre comme enfant de div
//div_2.textContent= "john doe"; 

//text sera interpreter brut -- directement
div_2.innerText = "hello word"
console.log(div_2);

div_2.innerHTML = "hello <strong>word<strong> !";
document.body.appendChild(div_2) // c'est pour ajouter dans html


