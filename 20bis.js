//Se da o matrice cu valori de 0 (apa) sau 1 (pamant).
// sa se calculeze aria celui mai mare continent.

var x = [
    [1, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 1, 1, 0, 1],
    [0, 0, 0, 1, 0, 0, 1]
]

function changeValueForOnes(array, i, j, newValue) {
    if (i < 0 || j < 0 || i >= array.length || j >= array[0].length) {
        return;
    }
    if (array[i][j] !== 1) {
        return;
    } else {
        array[i][j] = newValue;
        changeValueForOnes(array, i - 1, j, newValue);
        changeValueForOnes(array, i + 1, j, newValue);
        changeValueForOnes(array, i, j - 1, newValue);
        changeValueForOnes(array, i, j + 1, newValue);
    }
}

function iterateAndChange(array, value){
    for (var i = 0; i < array.length; i++){
        for (var j = 0; j < array[0].length; j++){
            if(array[i][j] === 1)
                value++;
                changeValueForOnes(array, i, j, value);
        }
    }
}

iterateAndChange(x ,1);
console.log(x);

function findHighestNumberOfOccurances(array){
     var vectorAparitii = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
    for (var i = 0; i< array.length; i++){
        for (var j = 0 ; j< array[0].length; j++){
            if(array[i][j]!== 0)
                vectorAparitii[array[i][j]]++;
        }
    }
    var biggestNumber = 0;

    for(var i =0; i<vectorAparitii.length; i++){
        if (vectorAparitii[i] >biggestNumber){
            biggestNumber = vectorAparitii[i];
        }
    }
     return biggestNumber;
}


console.log(findHighestNumberOfOccurances(x));


