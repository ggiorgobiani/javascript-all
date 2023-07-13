//structure 
//let a = true
//console.log(!a); // "!" retourne la logique 
//si c'est vrai devient faux, si c'est faux devient vrai




//structure IF ... 

let a = true;

if ( a )
{
    console.log("la valeur de A est vrai !");
}


//vu que un est vrai et l'autre faux, il n'executera pas les acolades
let b = true;
let c = false;

if (b && c)
{
    console.log("B et C sont vraie");
}

let d = false;
if ( !d) 
{ 
    console.log("d est faux");
}



//structure IF ... ELSE  

let e = true;
if (e)
{
    console.log(" E est vrai");
}
else
{
     console.log("E n'est pas vrai");
}



//structure IF ... ELSE  IF 
// execution finira sur le premier vrai et n'executera plus le reste
//si "f" est vrai, il n'executera plus le "g"
//si le "f" n'est pas vrai, il passe a le "g" sans execution de "f".

let f = true;
let g = true;

if (f)
{
    console.log("F est vrai");
}
else if (g)
{
    console.log("G est vrai");
}



//structure IF ... ELSE  IF ... ELSE


let i = false;
let j = false;
let k = false;

if (i)
{
    console.log("I est vrai");
}
else if (j)
{
    console.log("J est vrai");
}
else if (k)
{
    console.log("K est vrai");
}
else
{
    console.log(" I, J et K ne sont pas vrai");
}




// vu que le trafficlight est "red"
//il n"execute pas "green" ni "orange"
//donc il executera else if (trafficlight=="red")
let trafficlight = "red";

if (trafficlight == "green")
{
     console.log("on passe");
}
else if (trafficlight == "orange")
{
    console.log("on s'arrete");
}
else if (trafficlight == "red")
{
    console.log("on stop");
}




//vu que touts les variant sont fausse
//il execute le dernier "else"
let trafficlightt = "clignotant";

if (trafficlightt == "green")
{
     console.log("on passe");
}
else if (trafficlightt == "orange")
{
    console.log("on s'arrete");
}
else if (trafficlightt == "red")
{
    console.log("on stop");
}
else
{
    console.log("c'est de la merde");
}


//switch est pour remplacer "if ...else  if ...else" 
//mais dans les cas precis

switch(trafficlightt)
{
    case 'green':
        console.log("on passe.");
    break;

    case 'orange':
        console.log("on s'arrete");
    break

    case 'red':
        console.log("on stop");
    break

    default:
        console.log("c'est la merde");
}



//operateur ternaire

console.log("operateur ternaire");


let l = 42;
let m; // les mots plus grand ou egale |   plus petit

if(l>50)
{
    m = "plus grande ou egale";
}
else
{
    m = "plus petit";
}

console.log(m);



//c'est le plus court code de l'operateur ternaire en haut,
// ligne 186-(operande condition) ? opearande si condition est vrai : operande si condition est faux
// let l = 42;
// let m = l >= 50 ? "plus grand ou egale" : "plus petit";
//console.log( m )











