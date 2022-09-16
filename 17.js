// Dandu-se un numar n, sa se genereze urmatoarea secventa:
//     1 2 2 3 3 3 … n n n (n ori) RECURSIV & NERECURSIV
// merge

function generateSequence(n) {

    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            console.log(i);
        }
    }
}

generateSequence(5);

function generateRecurSeq(n) {

    if (n === 1) {
         console.log(1 + " ");
    } else {
        generateRecurSeq(n-1);
          console.log(n + " ");

     }
}
generateRecurSeq(3);

