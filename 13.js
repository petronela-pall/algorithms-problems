// Se da o matrice de dimensiuni n x m.
// Sa se calculeze suma elementelor care au in vecinatate un element 0.
// (pe diagonala nu e vecinatate, ci doar cele 4 laturi)

var sum = 0;
var m = 3;
var n = 3;
var x = [
    [1, 4, 0],
    [3, 6, 8],
    [2, 0, 9]
];
console.log(x);

var y = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function fillAroundIndex(i, j) {
    if (j !== 0) {
        y[i][j - 1] = 1; // stanga
    }
    if (j !== m - 1) {

        y[i][j + 1] = 1; // dreapta
    }
    if (i !== 0) {
        y[i - 1][j] = 1; //sus
    }
    if (i !== n - 1) {
        y[i + 1][j] = 1; // jos
    }
}

for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
        if (x[i][j] === 0) {
            fillAroundIndex(i, j);
        }
    }
}
console.log(y);

for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
        if (y[i][j] === 1) {
            sum += x[i][j];
        }
    }
}
console.log('suma este: ' + sum);
