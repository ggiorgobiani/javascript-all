"use strict";
//event handler

//HTML attribute


function myFunction(element){
    element.style.color = "red";
    console.log("click");
}



//function anonymous
console.log(document.querySelectorAll("#dClickMe"));
//document.querySelectorAll("#dblclickMe")[0]. ondblclick = function() {
//    console.log("dblclick");
//    this.style.color = "green";
//    console.log("my text is: " + this.innerHTML);
//};

function dblclick(){ 
    this.style.color = "green";
};

document.querySelectorAll("#dClickMe")[0].ondblclick = dblclick;

//addeventlistener

document.querySelector("#myFocus").addEventListener("focus", function(){
    console.log("focus oooonnn");
    this.style.borderColor = "red";
    this.style.background = "orange";
});


document.querySelectorAll("input[type='text']")[1]
.addEventListener("change", function (){
  console.log("change"); 
});

document.querySelector("input[type='password']")
.addEventListener("keyup", function (){
  console.log("keyup up up", this.value); //value envoi la valeur de pass ici(ce qu'on ecrit dans pass)
//on peut faire une condition
if(isNaN(this.value)){
  alert(" please insert numeric value")
}
});


//hover
document.querySelector("img")
.addEventListener("mouseover", function(){  //quand on passe avec mouse
  this.style.width = "450px";
});

document.querySelector("img")
.addEventListener("mouseout", function(){  //quand on enleve mouse
  this.style.width = "250px";
});


// amis html ver vnaxe mara gaketebis metodi esetia 
//submit 
document.querySelector("#myForm").addEventListener("submit", submitFunction);

function submitFunction(event){
  console.log("what up");
  event.preventDefault();             //c'est pour ne pas recharger la page
}