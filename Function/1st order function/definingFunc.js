
/* const addition = function(a,b) {
    return a+b;
};
console.log(addition(1,2));
*/

// to find the power 
const power= function(a,b){
    let result=1;
    for(let i=0;i<b;i++){
        result*=a;
    }
    return result;
};
console.log(power(2,10));