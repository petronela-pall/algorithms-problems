//Se da o matrice cu valori de 0 (apa) sau 1 (pamant).
// sa se calculeze aria celui mai mare continent.

var x = [
    [1, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 1, 0]
]
var contor = 0;
function changeValueForOnes(array, i, j) {

    if (i < 0 || j < 0 || i >= array.length || j >= array[0].length) {
        return 0;
    }
    if (array[i][j] !== 1) {
        return 0;
    }
    if (array[i][j] === -1) {
        return 0;
    } else {
        array[i][j] = -1;
        contor++;
        changeValueForOnes(array, i - 1,j);
        changeValueForOnes(array, i + 1, j);
        changeValueForOnes(array, i, j - 1);
        changeValueForOnes(array, i,j + 1);
    }
    return contor;

}
function findBiggestContinent(array){
    var sizeOfBiggestContinent = 0;
    var newContor = 0;

    for(var i = 0; i < array.length; i++){
        for(var j = 0; j< array[0].length; j++){
            if(array[i][j] === 1){ //e pamant
                newContor =  changeValueForOnes(array, i,j);
                console.log('printam new contor' + newContor)
                if(sizeOfBiggestContinent < newContor){
                    sizeOfBiggestContinent = newContor;
                }
            contor = 0;
            }
        }
    }
    return sizeOfBiggestContinent;
}

var biggest = findBiggestContinent(x);
console.log("cel mai mare continent " + biggest);

//pas 1 coloram pasul 2 cautam cel mai mare element;
//scrie pasii;