// Se da o lista de numere.
// Sa se ordoneze lista descrescator folosind Bubble Sort.
// functioneaza ok

var x =[ 45, 4, 77, 41, 3, 99, 21, 7, 3];
var i, j;
var aux;
for(i = 0; i < x.length -1 ; i ++){
    for (j = 0; j < x.length - i - 1; j++){
        if(x[j] > x[j + 1]){
            aux  = x[j];
            x[j] = x[j + 1];
            x[j + 1] = aux;
        }
    }
}

console.log(x);