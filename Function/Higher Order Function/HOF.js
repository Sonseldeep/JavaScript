/* var getSeven = function () {
    return 7;
};

function useFunction(fn) {
    return fn();
}
//console.log(useFunction(getSeven));

function returnFunction() {
    return getSeven;
}
const exFunction = returnFunction();
console.log(typeof exFunction);
console.log(exFunction());
*/

function sum(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}

function division(x,y){
    return x/y;
}

// create a function which accepts these above fuinction as an argument and passes values to these

function Calculator(fn,x,y){
    return fn(x,y);

}

console.log("sum=>",Calculator(sum,1,2));
console.log("diff=>",Calculator(subtract,1,2));
console.log("Product=>",Calculator(multiply,1,2));
console.log("fraction=>",Calculator(division,1,2));