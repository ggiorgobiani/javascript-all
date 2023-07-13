const numbers = [1,2,3,4,5];
/*
let sum = 0;
for(const number of numbers){
    sum = sum +number; //an ese sum += number;
}
console.log(sum);

*/

// es igivea rac zevit gavaketet for-it 
//am semtxvevashi es ari reduce metodit
const sum = numbers.reduce(
    (previous, current, index, arr) => {
       // shemoklebuli ikneba  const sum = numbers.reduce((previous, current) => previous + current, 0);
        console.log(`previous = ${previous}, current - ${current}, index - ${index}, array - ${arr}`);
        
    return previous + current;
    },
    0          //es aris araishi myopi pirveli iteracia
);