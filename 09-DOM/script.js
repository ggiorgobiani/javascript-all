"use strict";

// ----------selecteur d'ID------
//retourne un element car c'est un ID qu'on ne donne pas 
//a plusieurs elements
const elId = document.getElementById('myId');
console.log(elId);


//----------selecteur de classe ------
// retourne toujours une liste 
//donc si on mets plusieurs element dans la meme classe 
//il retourne tous.
const elClass = document.getElementsByClassName('myClass');
console.log(elClass);



//-------selecteur de type---------
// il peut retourner plusieurs elements si meme nom  

const elType = document.getElementsByTagName('div');
console.log(elType);


//-------selecteur de nom------
const elName = document.getElementsByName('firstname');
console.log(elName);






//----- selecteurs "query"------- queryselector----


//---- selecteur d'ID------
const elId2 = document.querySelector('#myId');
console.log(elId2);

//--selecteur de classe---
//il retourne pas tous les element, mais il retourne
//le premier element trouvé de la classe
const elClass2 = document.querySelector('.myClass');
console.log(elClass2);

// il retourne la liste "all"
const elClass3 = document.querySelectorAll('.myClass');
console.log(elClass3);



//---selecteur de type----
const elType2 = document.querySelector('span');
console.log(elType2);



//-----selecteur d'attribut-----
const elAttr = document.querySelector('[data-price]');
console.log(elAttr);







