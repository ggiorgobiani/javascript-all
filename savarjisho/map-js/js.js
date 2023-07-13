const numbers = [2,4,6,8,10];

const newNumbers =  numbers.map(number => number + 1);
console.log(numbers, newNumbers);


const cars =['volvo','ferrari','opel','audi','bmw'];

const carsObjectArray = cars.map(car => ({car}));
console.log(carsObjectArray);