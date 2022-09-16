// Se dau n numere naturale.
//     Determinaţi câte cifre pare şi câte cifre impare se află în total în cele n numere
//ok

var list = [12, 8, 4, 33, 22, 66, 55];
var contorPare = 0;
var contorImpare = 0;

for(var i = 0; i < list.length; i++){
   var numar = list[i];

    while(numar > 0){
        var ultimaCifra = numar % 10;
        if (ultimaCifra % 2 === 0) {
            contorPare++;
        } else {
            contorImpare++;

        }
        numar = Math.floor(numar/10);
   }
}
console.log('Avem ' + contorPare + ' cifre pare.');
console.log('Avem ' + contorImpare + ' cifre impare.');

//TODO cifre, nu numere
