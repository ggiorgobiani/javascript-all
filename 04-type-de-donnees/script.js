//chaine de caracteres (string)
let str_1 = "ceci est une chaine de caracteres.";

console.log( str_1);
console.log( typeof str_1);


let str_2 = "ceci est une autre chaine de caracteres.";

console.log( str_2 );
console.log( typeof str_2 );

let str_3 = "aujourd'hui il fait beau";
            ' aujourd\'hui il fait beau';  //on protege  ca c'est simple cote ''

console.log( str_3 );
console.log( typeof str_3 );

let str_4 = `ceci est encore une autre caine de caracteres`;

console.log( str_4 );
console.log( typeof str_4 );


//concaténation de chaine
let firstname = "john";

console.log( "bonjour " + firstname);
console.log( "bonjour ".concat(firstname));
console.log( `bonjour ${firstname}` );



//les nombres (numbers)
//on ecris les nombre sans simple ou double cote

let num_1 = 42;
console.log(num_1);
console.log(typeof num_1);

let num_2 = 21.5;
console.log(num_2);
console.log(typeof num_2);

let num_3 = -42;
console.log(num_3);
console.log(typeof num_3);



//il met 42AZERTY
let num_4 = 42 + "AZERTY";
console.log(num_4);
console.log(typeof num_4);




//les bouléens (booleans / bool)
//il y a que true et false, pas d'autre type
let bool_1 = true;
console.log(bool_1);
console.log(typeof bool_1);

let bool_2 = false;
console.log(bool_2);
console.log(typeof bool_2);



// les tableaux (array)
//ancienne methode
let arr_1 = new Array();
console.log(arr_1);
console.log(typeof arr_1);

//recent methode
let arr_2 = [];
console.log(arr_2);
console.log(typeof arr_2);




// les tableaux (array)
//ancienne methode
//on ajoute le mot length pour compter longueur de tableau

let arr_3 = new Array();
console.log(arr_3);
console.log(typeof arr_3.length);

//recent methode
let arr_4= [];
console.log(arr_4);
console.log(typeof arr_4.length);



//les Objects (objects) differents facons
//majuscule est important

let obj_1 = new Object();
console.log(obj_1);
console.log(typeof obj_1);


let obj_2 = {};
console.log(obj_2);
console.log(typeof obj_2);

let arr_6 = [
    'John',  //index 0
    'Doe',  //index 1
    25     //index 2
];

console.log( arr_6);
console.log( arr_6[1]);


// ici on a associé  pour qu"il soit facilement comprehansible
let obj_3 = {
    firstname: "BOB",
    lastname: " DOE",
    age: 28
};

//objet est plus facile a comprendre
console.log( obj_3.firstname);



let obj_4 = {
    String: "azerty",
    Number: 32,
    bool: true,
    Object: {},
    Array: [],
    fnc: function(){}
};

console.log( obj_4);










