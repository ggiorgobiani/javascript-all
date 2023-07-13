// -----------------
// function with argument - argument est ce qui est ecrit dans ().
//qui aide a calculer facilement et rapidement
function functionWithArgument(MyNumber){
    return MyNumber * MyNumber;
}
let result = functionWithArgument(3);
console.log("result:"+ result);

functionWithArgument(4);


//------calculer la TVA --- multiple arguments------------

function calculTTC(montantHT, tauxTVA){
    return montantHT * tauxTVA
}

let monTTC = calculTTC(50, 1.2)
console.log("monTTC:" + monTTC);

//nous pouvons declarer un constant de tva pour le mettre partout 
//si on a plusieurs produits  avec le meme TVA

const tva = 1.2;

let myTTC = calculTTC(132, tva)
console.log("myTTC:" + myTTC);


let my2TTC = calculTTC(1822, tva)
console.log("myTTC:" + my2TTC);


let my3TTC = calculTTC(93, tva )
console.log("myTTC:" + my3TTC);


//--------portée des variables
//--les variables globals qui sont accesible globalement--
//sans mot cle var avant myVariable, cet variable est GLOBAL
myVariable = "my text";                                         //global
//deuxiemme facon de declaration de variable clobal
//global car elle est en dehors de function
//il faut faire attention pour ne pas utiliser le nom de meme variable
//plus tard en bas pour ne pas ecraser celui la
let myVariable2 = "my text";                                     //global
//--- variable local---
//variable est local quand il est dans une function et
//elle n'est pas visible de l'exterieur de function.
function myFunction() {
    let localVariable = "this variable is local";               //local
    //localVariable += "oh yeaah!!";     //on peut concatener une function a notre variable
    console.log(localVariable);
  }

  myFunction();   // pour appeler la function


  let samih = {
    firstname: "samih",
    lastname: "habbani",
    age: 29,
    sexe: "m",
    hobbie: ["motorcycle","basket","football"],
    weigh : 76,
    foods: [["tacos","soccison","bagguette"],
    [0.5, 0.4, 1]],

    
    getOlder : function(){
      this.age += 1;
    },
    eat : function(food){
      let indexOFFood = this.foods[0].indexOf(food);

      if(indexOFFood >=0){
        this.gainWeight(this.foods[1][indexOFFood]);
      }
    },
    gainWeight: function(kilos){
      this.weigh += kilos;
    },
  };

samih.getOlder();
console.log("age : "+ samih.age);

samih.eat(samih.foods[0][0]);
console.log("weight after eating : " + samih.weigh);
