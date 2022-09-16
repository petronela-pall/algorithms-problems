// Se da o liste de numere.
// Sa se caute cea mai lunga secventa de elemente identice
//merge
var x = [6, 6, 5,  6, 7, 8,8,8,8, 5, 5, 5, 5, 5, 5, 5];
var seq;
var longestSeq = 1;

for (var i = 0; i < x.length - 1; i++){
    seq = 1;
    var j = i;
    while (j < x.length - 1){
        if (x[j] === x[j+1]){
            seq++;
            j++;
            i++;
        } else{
            break;
        }
    }
    if (seq > longestSeq){
        longestSeq = seq;
        var indexFinal = j;
        var indexInitial = j - longestSeq + 1;
    }
}
console.log(longestSeq);
console.log('indexii sunt: ' + indexInitial + ' ' + indexFinal);











