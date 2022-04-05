//3)Kreirati niz sa 10 slučajno generiranih brojeva u intervalu od 50 do 150 koje je potrebno zaokružiti. Ispisati min i max vrijednosti tog niza i njihove pripadne indekse.
// Mogu se koristiti petlje, metode push, indexOf, findIndex, Math (random, min, max, round,...).  

let numArr = [];

for (let i = 0; i < 10; i++) {
  let number = (Math.random() * 100 + 50).toFixed(0);
  numArr.push(number)
}

str = "";

numArr.forEach((element,index) => {
    str += "[" +index + "]" + element + " ";
});
console.log(str)

const minMax = (arr) => {
  let minValue = Math.min(...numArr);
  let maxValue = Math.max(...numArr);
  const minInd = (element) => element == minValue;
  const maxInd = (element) => element == maxValue;
  
  console.log(
    `Maximum value in the array is ${maxValue} at index ${arr.findIndex(minInd)}
     minimum value in the array is ${minValue} at index ${arr.findIndex(maxInd)}
    `
  )
}
minMax(numArr);
