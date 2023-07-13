//differents type d'ecrire ARROW FUCTIONS

//function avec parametres et le mot return
function summ1(a){
    return a + 10;
};
console.log(summ1(5));

/*function en mode const sans mot return qui return quand meme 
grace a la fleche
si on a une parametre on peut ecrire sans (). */
const summ = a => a + 10;

console.log(summ(5));

//function sans parametres 
const summ2 = () => 10 + 10;
console.log(summ2);

/*function dans const  avec plusieurs parametre 
dans le cas de plesieurs parametres il nous faut (). */
const summ3 = (a, b) => a + b;
console.log(summ3(5,10));



/*boolean aris imistvis rom ori ragac shevadarot radgan
aqvs mxolod ori pasuxi true an false*/

let z = 10; //roca minichebuli ak mnishvneloba nomeric da stringic aris true
let s; /*roca ar akvs minichebuli mnishvneloba an mnishvneloba 
akvs 0 an mnishvneloba undefined an mnishvneloba false aris false */



//shedarebis logikuri operatorebi
const sample = x =>  {
    return Boolean(x > 10)
}
console.log(sample(5));  //false radgan 5 araa meti 10ze
console.log(sample(20)); // true radgan 20 metia 10ze 




//pirobiti operatorebi if else

const simpleconst = d => {
    if(d > 10){
        console.log(`${d} metia 10ze`);
    } else if(d == 10){
        console.log(`${d} tolia 10is`);
    } else {
        console.log( `${d} naklebia 10ze`);//ese vnaxot consoleshi
        console.log( d + " naklebia 10ze");//an esec sheidzleba
    }
}
simpleconst(5);


// switch operatori

const flowers = flower => {
    switch (flower) {
        case "vardi":
            console.log(flower + " aris witeli");
            break;
        case "ia":
            console.log(flower + " aris iisperi");
            break;
        case "gvirila":
            console.log(flower + " aris tetri, yviteli gulit");
            break;
        default:
          console.log("gtxovt airchiot sxva yvavili");
    }
}

flowers("gvirila");



//for (loop) cikli 

const cars = ['ferrari','porche','bmw','mercedes'];
for (let i = 0; i < cars.length;i++){
console.log(cars[i]);
}


//for in (loop) cikli

const car = {
    brand: 'ferrari',
    modele: 'la ferari',
    color: 'red',
    year : 2012,
    price: 100000
}

for(const all in car){
// console.log(car[all]);
console.log("tviseba : " + all , "mnishvneloba : " + car[all]);
}


//for of (loop) cikli

const carrs = [ 'ferrari','porche','subaru','opel'];

for(const car of carrs){
    console.log(car);
}


//while  (loop) cikli

const voitures = ['tank','traktori','buldozeri','opelvectra' ];

let x = 0;

while(x < voitures.length) {
    console.log(voitures[x]);
    x++;
}

// do while (loop) cikli 
//sruldeba tu ar sruldeba while piroba, mainc daibechdeba ertxel

let g = 20;
do {
    console.log('hey');
} 
while( g < 10)


/* break da continue operatorebi
break ari imistvis roca gvinda ro chveni cikli bolomde ar mivides 
da mtliani length ar gaiaros */
const voiture = ['herkebi','porche','uuidzaxizeriovna','andavectraarais' ];

for (let car of voiture){
    if (car == 'porche') break;  //am shemtxvevashi porches ikit agar midis
    console.log(car);
}
for( let voit of voiture){
    if(voit == 'porche') continue; // rogorcki dainaxavs ro chveni voit aris porche, amis mere gadaxteba shemdeg mankanaze
    console.log(voit);
}