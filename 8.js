// Se da o lista de numere sortata crescator.
// Sa se verifice daca un element X dat se gaseste in lista, folosind cautare binara.

var lista = [1, 5, 6, 9, 11, 22, 33, 45, 66, 99, 199];

var n = 2;
function findElement(x, y){
    var mid = Math.floor((x + y) / 2) ;
    console.log(x, y, n, lista[mid]);

    if (n === lista[mid]){
        return mid;
    }
    if (x === y){
        return -1;
    }

    if ( n < lista[mid]) {
       return findElement(x, mid);

    } else {
      return findElement(mid + 1, y);
    }
}

console.log(findElement(0, lista.length));

