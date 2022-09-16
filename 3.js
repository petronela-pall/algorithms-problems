// Se da o lista de numere.
// Sa se afle cel mai mare numar par, si cel mai mic numar impar.
//ok

var x = [8, 2, 3, 55, 44, 66, 77, 88];
var i;
var nrMax = 1, nrMin = 99;

for (i = 0; i < x.length; i++){
    if(x[i] < nrMin && x[i] % 2 !== 0){
        nrMin = x[i];
    }
    else if(x[i] >= nrMax && x[i] % 2 == 0){
        nrMax = x[i];
    }
}

console.log('Numarul minim este: ' + nrMin);
console.log('Numarul maxim este: ' + nrMax);