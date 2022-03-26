// 1)Definirati funkciju koja može primiti promjenjivi broj parametara, a koja vraća zbroj vrijednosti prvog i zadnjeg poslanog argumenta.
function funMultiArg(...args) {
    return (args.length < 2) ? 'Nedovoljan broj parametara' : args[0] + args[args.length - 1];
}
console.log(funMultiArg(10,1,13,4));

//Potrebno je definirati niz sa 10tak pozitivnih i negativnih brojeva te funkciju koja prima četiri parametra. Prvi parametar funkcije je niz brojeva, 
//drugi funkcija sa jednim parametrom koja će ispitivati da li je broj pozitivan, treći funkcija sa dva parametra koja će ispitivati da li je broj (prvi par) 
//djeljiv sa drugim brojem (drugi param) i četvrti parametar je broj za kojeg će se ispitivati djeljivost u funkciji iz trećeg parametra
//(fja(nizBrojeva, fjaPozit, fjaDjelji,brojDj);).

var niz = [2, -1, 10, -3, -10, 13, 14, 15, -4, -5]
function fja(nizBrojeva, fjaPozit, fjaDjelji,brojDj) {
    for(let i = 0; i < nizBrojeva.length; i++){
        if(fjaPozit(nizBrojeva[i]) && fjaDjelji(nizBrojeva[i], brojDj)){
            console.log(nizBrojeva[i])
        }
    }
}
function fjaPozit(broj){
    return broj > 0;
}
function fjaDjelji(prvi, drugi){
    return (prvi % drugi) ? false : true;
}
fja(niz, fjaPozit, fjaDjelji, 2);

//Definirati funkciju koja prima tri parametra, gdje prvi predstavlja funkciju za unos broja od strane korisnika korištenjem prompta, 
//drugi parametar predstavlja broj koliko brojeva korisnik treba upisati, a treći parametar predstavlja funkciju za zbrajanje dvaju brojeva.
// Glavna funkcija vraća zbroj svih upisanih brojeva kao povratnu vrijednost.

function fun(userIn, numOfElements, funSum){
    let sum = 0;
    while(numOfElements > 0){
        let input = userIn();
        sum = funSum(sum, input);
        numOfElements--;
    }
    return sum;
}
function userIn(){
    let number = +prompt("Please enter one number");
    return number;
}
function funSum(a, b){
    return a + b;
}

console.log(fun(userIn, 3, funSum));
