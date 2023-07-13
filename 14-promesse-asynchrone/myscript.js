"use strict";


//la promesse est pour decaler l'execution d"un function choisi

const mapromesse = new Promise((resolve, reject) =>{

    setTimeout(() => {
        resolve('toto');
    }, 3000);
    });

mapromesse
    .then(gestionnairesuccesa, gestinnaireecheca)
    .then(gestinnaireechecb, gestionnaireechecb);









