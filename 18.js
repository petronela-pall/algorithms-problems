// Se da un numar n.
//     Sa se genereze urmatoarea secventa: 1 2 3 ... n ... 3 2 1. RECURSIV & NERECURSIV
//nerecursiv ok


// function createSequence(n){
//
//     for(var i = 1; i <= n; i++){
//         console.log(i);
//     }
//     for ( i = n-1; i>0; i--){
//         console.log(i);
//     }
// }
//
// createSequence(7);

function createSeq2(n) {

    if (n === 1) {
        console.log(1 + " ")
    } else {
        createSeq2(n - 1);
    }
}

console.log(createSeq2(5));

