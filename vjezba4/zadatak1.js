/*Omogućiti da korisnik može upisivati brojeve dok ne upiše 0. Za svaki broj se utvrđuje parnost i na kraju se ispisuje zbroj
 svih parnih brojeva i ukupan broj neparnih brojeva. Za testiranje parnosti broja koristiti funkciju. Za zbrajanje parnih brojeva
  i brojanje neparnih koristiti closure. Ne koristiti nizove. Zadatak riješiti i sa regularnim i sa arrow zapisom funkcija.*/
//Prvi Zadatak
/*Regular Functions*/
function checkEven(number){
    return (number%2==0);
}

function sumEven(){
    let sum = 0;
    return function(number){
        return sum += number;
    }
}

function returnNumOfOdd(){
    let odd = 0;
    return function(){
        return odd++;
    }
}

let number = +prompt("Enter one number: ", 0);
let suma = sumEven()
let numOfOdd = returnNumOfOdd()
while(number != 0){
    checkEven(number) ? suma(number) : numOfOdd();
    number = +prompt("Enter one number: ", 0);
}

console.log(suma(number));
console.log(numOfOdd())

/*Arrow functions*/
/*
let checkEven = (number) => (number%2==0);

let sumEven = () => {
    let sum = 0;
    return(number) => sum += number;
}

let returnNumOfOdd = () => {
    let odd = 0;
    return() => odd++;
}

let number = +prompt("Enter one number: ", 0);
let suma = sumEven()
let numOfOdd = returnNumOfOdd()
while(number != 0){
    checkEven(number) ? suma(number) : numOfOdd();
    number = +prompt("Enter one number: ", 0);
}

console.log(suma(number));
console.log(numOfOdd())*/


