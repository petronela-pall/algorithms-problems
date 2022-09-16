// Se da o matrice de dimensiuni n x m. Sa se modifice matricea astfel incat
// varianta ei finala sa fie oglindirea variantei initiale. A B C → C B A
//merge!!!!

var m =4 , n = 4;
x = [
    [3, 5, 6, 9],
    [8, 0, 12, 11],
    [53, 66 ,77 ,88],
    [12, 34, 1, 55]
]
var aux;

//merg pe fiecare linie - salvez primul element in aux, mut ultimul elem de pe linie in primul, mut aux in ultimul;
//ca sa gasesc elementul din oglinda lungimea liniei n-1-i
for (var i = 0; i< m; i++ ){
    for(var j = 0; j < n/2; j++){
        aux = x[i][j];
        x[i][j] = x[i][n-1-j];
        x[i][n-1-j] = aux;
    }
}

console.log(x);