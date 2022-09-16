
//Se da o lista de numere intre 0 si 100. Sa se verifice daca numerele sunt distincte.

//iau primul element si il compar cu toate celelalte in afara de el
//functioneaza

var x = [0, 2, 5, 3, 8, 9, 7, 1, 0, 4, 5, 1];
var vectorAparitii = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for(var i = 0; i < x.length ; i++){
    vectorAparitii[x[i]]++;

}

for( i = 0; i < vectorAparitii.length; i++){
    if(vectorAparitii[i] > 1){
        console.log('lista nu contine doar elemente distincte');
        break;
    }
}



