
function calculate(num){
    let result="";
    if(num%2===0){
        result=`juft son`;
    }
    else{
        result=`toq son`;
    }
   return result;
}
console.log(calculate(9));

const evenorodd= function(num){
    let result="";
    if(num%2===0){
        result=`juft son`;
    }
    else{
        result=`toq son`;
    }
   return result;
}
console.log(evenorodd(4));

const evenorodd1=(number) => number%2==0 ? 'juft son':'toq son';
console.log(evenorodd1(3));



