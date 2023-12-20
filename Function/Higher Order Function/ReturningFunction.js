 /*
 function multiple7(x){
    return x*7;
}
function process(fn,x){
    return fn(x);


}
console.log(process(multiple7,7));

*/
// returning function

/* 
function mul7(){
    return function(x){
        return x*7;
    }
 }
 const  execute = mul7();
 console.log(execute(7));
*/

 function sum(x){
    return function(y){
        return x+y;
    }
 }
 console.log( sum(1)(2));

 // product of any two number using returning function

 function product(x){
    return function(y){
        return (x * y) ;
    }
 }
 console.log("product is ",product(2)(5));