// Se da o lista de numere. Sa se afle cel mai mare numar.
//ok
var x = [1, 2, 4, 5, 77, 3, 12, 99];

var max = 0;
var i;
for (i = 0; i < x.length; i++){

    if (x[i] > max){
        max = x[i];
    }

}
console.log(max);