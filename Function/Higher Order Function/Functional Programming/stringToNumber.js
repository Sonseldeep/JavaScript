const string = ['1','2','0','56'];

// convert into number;
const number = string.map(function(item,index){
    return Number(item);
});
console.log(string);

console.log(number);