

// selection by id 
let myP = document.getElementById("myPgh")
console.log(typeof myP);
myP.style.color = "red";
myP.style.fontSize = "xx-large";


//selection queryselector by id
let myOtherP = document.querySelector("#myOtherPgh");
console.log(myOtherP);


//selectio by class
myOtherP.style.display = "none";

let listClass = document.getElementsByClassName("myDiv");
console.log("listClass : " + typeof listClass);
console.log("listClass :", listClass);


//selection queryselector by class
let liistClass = document.querySelectorAll(".myDiv")
console.log("ListClass: "+ typeof liistClass );
console.log("listClass :", liistClass);

//selection one div in listClass
let secondClass = listClass[1];
console.log(secondClass.textContent);
console.log(secondClass.innerHTML);
secondClass.style.color = "green";


//selection by type
let  myUl = document.getElementsByTagName("ul");
console.log("myul :", myUl);
//select by type + li inside my ul
let  myUll = document.getElementsByTagName("ul");
console.log("myul :", myUll[0].getElementsByTagName("li"));


//selection by attribute
let myName = document.getElementsByName("userName")
console.log(myName);





//queryselectors 

//by id
let myOtheerP = document.querySelector("#myOtherPgh");
console.log(myOtheerP);

//by class
let liiistClass = document.querySelectorAll(".myDiv")
console.log("ListClass: "+ typeof liiistClass );
console.log("listClass :", liiistClass);

// by ul and li (list)recuper le premier li
let select = document.querySelector("ul li")
console.log("premier li :", select);
//by ul and li (all li)
let selectAll = document.querySelectorAll("ul li")
console.log("selectAll li :", selectAll);

//by ID and recuperer P in this ID
let myOtherSelectAll = document.querySelectorAll("#querySelectorAll p");
console.log("MyOtherSelectAll :", myOtherSelectAll);

// selection by attribute (pour recuperer l'image)
let img = document.querySelector("img[src='photo2.jpg']");
console.log("my img :", img);
console.log("title :", img.title);

//iteration pour changer la couleur des paragraphe
for(var i = 0; i < myOtherSelectAll.length; i++){
    myOtherSelectAll[i].style.color = "orange"; 
}
