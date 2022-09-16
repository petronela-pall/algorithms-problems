
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var matrix = [];
var m = 3; // dimensiunea

for (var i = 0; i < arr.length; i++){

    matrix[i/m][m%i] = arr[i];
}

console.log(matrix);

