// Se da un numar. Sa se calculeze suma cifrelor pare.
//merge

var sum = 0;
var ultimaCifra;
function sumOfDigits(x){
    while(x > 0) {
        ultimaCifra = x % 10;
        if (ultimaCifra % 2 === 0) {
            sum = sum + ultimaCifra;
        }
        x = Math.floor(x / 10);
    }
    return sum;
}

console.log(sumOfDigits(126748));
