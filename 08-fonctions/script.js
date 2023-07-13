// les fonctions - une procedure stocké, nomé
//fonction sert  a répéter du code uniquement au moment ou on en a besoin.


//fonction simple
//function  doSomething()
//{
    //instructions..
//}





//function sayHello()
//{
   // console.log("hello there");
//}


//sayHello();

//console.log(" un petit bout de code.. ");
//console.log(" un autre bout de code..");


//sayHello();




//fonction avec paramétres en entré

//function doAnotherThing(a)
//{
    //instructions
//}


//function sayHello(userName)
//{
  //  console.log(`hello ${userName}`);
//}

//sayHello('john')  //resultat est qu"il ecrit " hello john"





//fonction avec sortie de donnée

//function doJustAThing()
//{
    //instructions

   // return value;
//}

//function sayHello(userName)
//{
    //return `hello ${username}`;
//}







//fonctions internes---------------------
//c'est une alert qui est au moment d'ouverture de page
//alert("message")

//prompt ouvre un input pour ecrire quelque chose 
//c'est une question ouvert que tu reponse ce que tu veux
// let name = prompt("quel est votre nome")
//console.log(name);
//c'est une question ferme car on reponds oui ou non
//  let message =  confirm("etes vous d'accord d'avoir le message?")
//console.log(message);





//fonctions anonymes -----------
//c'est une fonction qui porte pas de nom

//la fonction anonyme est souvent stocké dans variable

//let myFunction = function()
//{
    //instructions
//}

//myFunction();
//------------

//c'est un button qu'on crée sur html avec id= "mybtn1"
//let btn = document.querySelector('#mybtn1');
//btn.addEventListener('click', function(){
 //   alert("btn is clicked !");
//});


//------
//fonction anonyme au moment d'uverture de page et puis -->>ligne 112
//function sayHello()
//{
 //   alert("hello there")
//}
//sayhello();

// on a crée un autre button avec id=btnsayhello 
//et utilisé getelementbyid pour mettre alert 
// de la ligne 108 dans le button pour ouvrir
//le meme alert sayhello au moment de clicker le button

//let btnsayhello = document.getElementById("btnsayhello");
//btnsayhello.addEventListener('click', sayhello)
//---------





//fonction fléchées------------



let btn = document.querySelector('#mybtn1');
btn.addEventListener('click', function(event){
    //instructions... 
});


//let btn = document.querySelector('#mybtn1');
//btn.addEventListener('click', event => /*instructions.. */ );


//let btn = document.querySelector('#mybtn1');
//btn.addEventListener('click', event => {/*instructions... */});


//let btn = document.querySelector('#mybtn1');
//btn.addEventListener('click', ()=> { /*instructions... */});