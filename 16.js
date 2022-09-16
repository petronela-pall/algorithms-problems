// Se dă un număr n. Afișați rezultatul operației 2^n
// (fara a folosii functii predefinite pentru ridicare la putere) RECURSIV & NERECURSIV
//merge


function raisePow(n) {
    var result = 2;
    for (var i = 2; i <= n; i++) {
        result = result * 2;
    }
    return result;
}

console.log(raisePow(7));

function f(n) {
    if (n === 0) {
        return 1;
    } else {
        return 2 * f(n - 1);
    }

}
console.log(raisePower2(3));

