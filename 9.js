// Se dau 2 liste de numere, ordonate crescator.
// Sa se creeze a 3-a lista, sortata, obtinuta prin combinarea celor doua liste.
//merge
var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 26, 27, 28, 29, 500, 565];
var y = [15, 20, 25, 26, 100];
var z = [];
var i = 0;
var j = 0;

while (i < x.length && j < y.length) {
    if (x[i] < y[j]) {
        z.push(x[i]);
        i++;
        console.log(i);
    } else {
        z.push(y[j]);
        j++;

    }
}
if (x.length !== i) {
    while (i < x.length) {
        z.push(x[i]);
        i++;
    }
} else if (y.length !== j) {
    while (j < y.length) {
        z.push(y[j]);
        j++;
    }
}
