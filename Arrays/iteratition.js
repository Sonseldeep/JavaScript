/*
//printing items of array using forRach function
const number = [1,2,3,4];
const Num = [];
const result = number.forEach(function(item,index){
    console.log(item);

});
console.log("---------------------------");

const string = ['sandeep','hari','krishna','radha'];
const NewStr = [];
const final = string.forEach(function(item,index){
    console.log(item);
});


// printing using for of loop
const string = ['sandeep','hari','krishna','radha'];
for(const result of string){
    console.log(result);
}
*/

// printing using map function
const string = ['sandeep','hari','krishna','radha'];
const newArr =  string.map(function(item,index){ 
    return item;
});
console.log(newArr);
