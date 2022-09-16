//nu merge

function fibonaccirecursiv(n){
    if (n===0){
        return 0;
    }
    if(n=== 1 || n===2){
        return 1;
    }
    else{

            return fibonaccirecursiv(n-1)+ fibonaccirecursiv(n-2);
    }
}

for (var i =0; i < 5; i++){
    console.log(fibonaccirecursiv(5));
}

//0 1 1 2 3 5
