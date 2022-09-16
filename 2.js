// Se da o lista de cuvinte (sau secvente de cuvinte).
// Sa se gaseasca cel mai lung element
//ok
var x = ['rosu', 'alb', 'negru', 'verde', 'violet'];

var maxLengthElement = x[0];
var i;

for (i = 0; i < x.length; i++){

    if (x[i].length > maxLengthElement.length){
        maxLengthElement = x[i];
    }

}

console.log(maxLengthElement);