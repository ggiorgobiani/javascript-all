//c'est une function pour faire disparaitre les tooltips
function deactivateTooltips() {

    const spans = document.getElementsByTagName("span");
    const spansLength = spans.length;

    for(let i = 0; i < spansLength; i++){
        if(spans[i].className == "tooltip"){
            spans[i].style.display = "none";
        }
    }

}

function getTooltip(elemHTML){

    while(elemHTML = elemHTML.nextSibling ){
        if(elemHTML.className == "tooltip"){
            return elemHTML;
        }
    }
    return false
}


let check = {

};


//differents verifications dans formulaire
//sexe
check["sexe"] = function() {

    let sexe = document.getElementsByName("sexe"),
    tooltip = getTooltip(sexe[1].parentNode);

    if(sexe[0].checked || sexe[1].checked){
        tooltip.style.display = "none";
        return true;
    }else{
        tooltip.style.display = "inline-block";
        return false;
    }
    
};

// lastname
check["lastName"] = function(id) {
    
    let elemHTML = document.getElementById(id),
    tooltip = getTooltip(elemHTML);

    if(elemHTML.value.length >= 2) {
        elemHTML.className = "correct";
        tooltip.style.display = "none";
        return true;
    } else {
        elemHTML.className = "incorrect";
        tooltip.style.display = "inline-block";
        return false;
    }
};
//firstname
check["firstName"] = check["lastName"];


//age
check["age"] = function() {

    let age = document.getElementById("age"),
    tooltip = getTooltip(age),
    ageValue = parseInt(age.value);

    if(ageValue >= 5 && ageValue <= 140){
        age.className = "correct";
        tooltip.style.display = "none";
        return true;
    }else {
        age.className = "incorrect";
        tooltip.style.display = "inline-block";
        return false;
    }
};

//login
check["login"] = function() {
    let login = document.getElementById("login");
        tooltip = getTooltip(login);

    if(login.value.length >= 4) { 
        login.className = "correct"
        tooltip.style.display = "none";
        return true;
    }else{
        login.className = "incorrect";
        tooltip.style.display = "inline-block";
        return false;
    }
};

//password 1
check["pwd1"] = function() {
    
    let pwd1 = document.getElementById("pwd1"),
    tooltip = getTooltip(pwd1);

    if(pwd1.value.length >= 6){
        pwd1.className = "correct";
        tooltip.style.display = "none"; 
        return true;
    }else {
        pwd1.className = "incorrect";
        tooltip.style.display = "inline-block";
        return false;
    }
};

//password 2     check si mdp est idantique
check["pwd2"] = function() {
    let pwd1 = document.getElementById("pwd1"),
        pwd2 = document.getElementById("pwd2"),
        tooltip = getTooltip(pwd2);

    if(pwd1.value == pwd2.value && pwd2.value != ""){
        pwd2.className = "correct";
        tooltip.style.display = "none";
        return true; 
    } else{
        pwd2.className = "incorrect";
        tooltip.style.display = "inline-block";
        return false;
    }
};

//country
check["country"] = function() {

    let country = document.getElementById("country"),
    tooltip = getTooltip(country);

    if(country.value !== "none"){
        tooltip.style.display = "none";
        return true;
    }else{
        tooltip.style.display = "inline-block";
        return false;
    }
};


//form de IIFE permet d'executer la page ainsi ca va permet d'eviter des probleme en declarant les variables
(function () {
    //--form--
    const myForm = document.getElementById("myForm");
    const listInputs = document.getElementsByTagName("input");
    const listInputsLength = listInputs.length;


    //--OnKeyUp--
    for(let i = 0; i < listInputsLength; i++) {

        if  (listInputs[i].type == "text"  || listInputs[i].type == "password") {
            listInputs[i].onkeyup = function(){      //avoir keyup sur les inputs
                check[this.id](this.id); //ca donne different check.id (country or sexe or others)
            }
        }
    }

    // --Submit-- 
    myForm.onsubmit = function(e){

        e.preventDefault();
        let result = true;

        for(let i in check) {
            result = check[i](i) && result;
        }
        if(result){
            alert("data OK");
        } else {
            alert ("wrong data");
        }
    }


    //--reset--
    myForm.onreset = function(e){
        // c'est pour enlever les bordur vert ou rouge quand champ est juste ou fausse
        for(let i = 0; i < listInputs.length;i++){
            listInputs[i].className = "";
        }
        deactivateTooltips();
    }
    deactivateTooltips();
}());