/*Potrebno je omogućiti korisniku da unese broj prema želji (prompt). Kreirati uvjetnu struturu if-else if-else koja će ispitati
    da li je broj koji je korisnik upisao 0, odnosno ako nije, potrebno je ispitati je li uneseni broj paran ili neparan.
Nadalje je potrebno definirati istu takvu strukturu korištenjem ternarnog operatora ?. Ispisati pripadne rezultate korištenjem console.log().*/
function myFunctionTernar() {
var input = Number(prompt("Please enter one number:", ""));
let number = (input === 0) ?  "Number entered is 0." : (input%2) ? "Number entered is odd" : "Number entered is even";
console.log(number);
}

function myFunctionIfElse() {
var input = Number(prompt("Please enter one number:", ""));
if (input === 0){
    console.log("Number entered is 0");
    }
else if(input%2){
    console.log("Number entered is odd");
    }
else{
    console.log("Number entered is even");
    }
}

//Kreirati switch strukturu prema želji sa više caseova i default opcijom. Ispisati pripadne rezultate korištenjem console.log(). 
function makeSwitch(){
    let vrijednost = prompt("Please enter one color:", "");
    switch(vrijednost){
    case "red":
        console.log("Selected color is red");
        break;
    case "green":
        console.log("Selected color is green");
        break;
    case "blue":
        console.log("Selected color is blue");
        break;
    default:
        console.log("Selected color is not RGB");
        break;
    }
}

// Korištenjem petlje while ispisati brojeve djeljive sa 10 između 155 i 105. Ispisati pripadne rezultate korištenjem console.log().
function divisableBy10(){
    let num = 155;
    while(num >= 105){
        if(num % 10 == 0){
            console.log(num);
        }
        --num;
    }
}

//Korištenjem petlje for, potrebno je izračunati i ispisati zbroj brojeva između 50 i 100. Zbroj ispisati korištenjem console.log(). 
function sum50to100(){
    let sum = 0;
    for(let num = 100; num > 49; num--){
        sum += num;
    }
    console.log(sum);
}

myFunctionTernar();
myFunctionIfElse();
makeSwitch();
divisableBy10();
sum50to100();