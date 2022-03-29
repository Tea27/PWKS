/*Definirati funkciju rezultat koja će ispisivati poruku o ostvarenom rezultatu iz ispita iz određenog kolegija.
 Prva vrijednost koja se šalje funkciji je naziv kolegija, druga ostvareni broj bodova, a treća ukupan broj bodova. 
 Primjer poziva funkcije rezultat je rezultat("MUP/PWKS")(25)(35); , a primjer ispisa pozvane funkcije "Iz kolegija MUP/PWKS ostvarili ste 71.43% "
Koristiti metodu toFixed objekta Number za zaokruživanje rezultata na dva decimalna mjesta (broj.toFixed(2)). Zadatak riješiti i sa regularnim
i sa arrow zapisom funkcija.*/
//Drugi Zadatak
//regular
/*
function rezultat(naziv){
    return function(ostvareniBrBodova){
        return function(ukupanBrB){
            alert("Iz kolegija " + naziv + " ostvarili ste: " + ((ostvareniBrBodova/ukupanBrB)*100).toFixed(2));
        }
    }
    
}*/
//arrow
let rezultat = (naziv) =>{ 
    return (ostvareniBrBodova) =>{ 
        return (ukupanBrB) => {        
            alert("Iz kolegija " + naziv + " ostvarili ste: " + ((ostvareniBrBodova/ukupanBrB)*100).toFixed(2));
            }
        }
    }
             

rezultat("MUP/PWKS")(25)(35);