// n
//1
function printSequence(n, i){
   if( i === n+1){
       return;


   }else{
       console.log(i);

       printSequence(n, i+1);
       if( i !== 1){
           console.log(i-1);
       }

   }
}
printSequence(10, 1);