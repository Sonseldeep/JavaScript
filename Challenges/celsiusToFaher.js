// using function convert cel to far 
// f = (9*C/5)+32;

// by arrow function
const celTofar = (C)=> {
    return f = (9*C/5)+32;

};
console.log(celTofar(38));
console.log('...........................');

// by function literal
function conveter(C){
     F=(9 * C / 5) + 32 ;
    return F;
}
console.log(conveter(38));

// by function def;
const convert1 = function(C) {
    F=(9 * C / 5) + 32 ;
    return F;
}
console.log(convert1(38));
