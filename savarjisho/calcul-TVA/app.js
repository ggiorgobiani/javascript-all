//tout ca c'est pour formater et les , avec les . car js ne lis pas les ,
function formatInputValue(valeurNonFormatee){

    let valeurFormatee;

    valeurFormatee = valeurNonFormatee.replace(",", ".");
    valeurFormatee = valeurFormatee.replace(/[^0-9$.]/g, '');

    return valeurFormatee;
}

function calculerTVA(montantDepart){
    let montantHT = formatInputValue(document.getElementById("montantHT").value);
    let montanTTC = formatInputValue(document.getElementById("montantTTC").value);
    let montantTVA = formatInputValue(document.getElementById("montantTVA").value);
    let tauxTVA = formatInputValue(document.getElementById("tauxTVA").value);

    console.log("tvaaa:" + montantTVA);
    console.log("TTCCC:" + montanTTC );
    console.log("tauuxxx:" + tauxTVA);
    console.log("hTTTT:" + montantHT);

    if(montantDepart == "tauxTVA"){
        montantDepart = "montantHT";

    } else if(montantDepart == "montantHT"){
        montantTVA = Math.round(montantHT * (tauxTVA / 100));
        montanTTC = Math.round(Number(montantHT) + Number(montantTVA));
        
        document.getElementById("montantTVA").value = montantTVA + " €";
        document.getElementById("montantTTC").value = montanTTC + " €";

    } else if (montantDepart == "montantTVA"){
        montantHT = Math.round(montantTVA / (tauxTVA / 100));
        montanTTC = Math.round(Number(montantHT) + Number(montantTVA));

        document.getElementById("montantHT").value = montantHT + " €";
        document.getElementById("montantTTC").value = montanTTC + " €";

    } else if (montantDepart == "montantTTC"){
        montantHT = Math.round(montanTTC/ (1+ tauxTVA /100));
        montantTVA = Math.round(montanTTC - montantHT);

        document.getElementById("montantHT").value = montantHT + " €";
        document.getElementById("montantTVA").value = montantTVA + " €";
    }
    //c'est pour afficher les trois en bas de page
    document.getElementById("totalTva").innerHTML = 
    "<p>MontantHT : "+ montantHT +" <br> MontantTTC : "+ montanTTC +" <br> MontantTVA : "+ montantTVA +" </p>"
}

//cette funfciton est pour ne pas laisser le champs vide 
function reInitInputTelValue(inputId, symbol){
    let myInput = document.getElementById(inputId);
    inputValue = myInput.value.replace (/\s/g, "");
    // c'est pour laisser soit 0€ soit si le champ est remplis ca ajoute juste le symbol €
    if(inputValue.length == 0){
        myInput.value = 0 +  " " + symbol;
    } else if (inputValue.indexOf(symbol) == -1){
        myInput.value = inputValue + " " + symbol;
    }
}


//select all input we need
let listInputTel = document.querySelectorAll("input[type='tel']");
console.log(listInputTel);
//evenemet keyup sur les input
for(let i = 0; i < listInputTel.length; i++){
    listInputTel[i].addEventListener("keyup", function(event){
        calculerTVA(event.currentTarget.id);
    });

    //evenement blur 
    listInputTel[i].addEventListener("blur", function(event) {
       // pour avoir les symbol € et %  en supprimant tout
        if(event.currentTarget.id == "tauxTVA"){
        reInitInputTelValue(event.currentTarget.id, "%");
    } else {
        reInitInputTelValue(event.currentTarget.id, "€");
    }
    });
}



//click  evenement 

//c'est pour choisir quel TVA ecrire dans le champs TauxTVA en clickant
function mettreAjourTauxTVA(tauxTVA){
    console.log(tauxTVA);
    document.getElementById("tauxTVA").value = tauxTVA;
}

//pour choisir quel % de tva il faut calculer
let listInputButton = document.querySelectorAll("input[type='button']");

for(let i = 0; i < listInputButton.length; i++){
    listInputButton[i].addEventListener("click", function (event){
        mettreAjourTauxTVA(event.currentTarget.value);
        calculerTVA("tauxTVA");
    });
}