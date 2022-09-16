var x = [
    [1, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 1, 1, 0, 1],
    [0, 0, 0, 1, 0, 0, 1]
]

function iterateAndChange(array, i, j, newValue){

    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array[0].length; j++) {
            if (array[i][j] === 1) {
                array[i][j] = newValue;
                iterateAndChange(array, i - 1, j, newValue);
                iterateAndChange(array, i + 1, j, newValue);
                iterateAndChange(array, i, j - 1, newValue);
                iterateAndChange(array, i, j + 1, newValue);
                if (array[i][j] !== 1) {
                    return;
                }

            }
        }
    }
}

iterateAndChange(x, 0,0, 2);
console.log(x);