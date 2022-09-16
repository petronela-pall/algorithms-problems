// Se da o lista de numere.
// Sa se verifice daca lista este ordonata strict crescator.
//ok


var x = [4, 5, 6, 7, 8, 8, 1];
var ordonat = true;
var i;

for(i = 0; i < x.length; i++){
    if(x[i] > x[i+1]){
        ordonat = false;
        break;
    }
}

console.log(ordonat);

//break = iese din for - doar sa te opresti.
//return iese din functie