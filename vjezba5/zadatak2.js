//2)Korištenjem currying i arrow zapisa, omogućiti pozivanje funkcije sa promjenjivim brojem argumenata u formatu (a)(b)(c)....
// koja bi trebala vratiti umnožak pozitivnih brojeva manjih od 20. Glavna currying funkcija prima jedan argument funkciju za množenje (a, b) => a * b.

////regularni zapis
// function currying(fja) {
//     let rez = 1;
//     return function inner(x) {
//     if (!x) {return rez;}
//     if(x > 0 && x < 20){rez = fja(rez, x); }
//     return inner;
//     };
//     }

// const mnozi = currying((a, b) => a * b);
    
////Arrow zapis
let arrw = fja =>{
    let rez = 1;
    return arrIn = x => {
        if (!x) {return rez;}
        if(x > 0 && x < 20){rez = fja(rez, x); }
        return arrIn;
    };
}

const mnozi = arrw((a, b) => a * b);
    
console.log(mnozi(1)(2)(3)(-4)(5)());