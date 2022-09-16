// Se da o matrice patratica cu numere random.
//     sa se verifice daca e simetrica fata de diagonala principala sau secundara

//TODO rescrie folosing functii, param matrice, return true sau false ;

var x = [
    [1, 2, 3, 4],
    [2, 1, 6, 3],
    [3, 6, 1, 2],
    [4, 3, 2, 1]
]
var m = 4; n = 4;

function checkSymPrincipal(x){
    var symetricPrincipala = true;
    for(var i = 0; i < m; i++){
        for(var j = 0; j < n; j++){
            if(i !== j && x[i][j] !== x[j][i]){
                symetricPrincipala = false;
                break;
            }
        }
    }
    return symetricPrincipala;
}

console.log('simetrica fata de diagonala principala: ' + checkSymPrincipal(x));

function checkSymSecondary(x){
    var symetricSecondary = true;
    for(var i = 0; i < m; i++){
        for(var j = 0; j < m; j++){
            if(i !== j && x[i][j] !== x[m - j - 1][m - i - 1]){
                symetricSecondary = false;
                break;
            }
        }
    }
    return symetricSecondary;
}


console.log('simetrica fata de diagonala secundara: ' + checkSymSecondary(x));