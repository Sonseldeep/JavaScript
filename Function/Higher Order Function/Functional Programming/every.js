// syntax:  array.every(function(currentValue,currentIndex,array));
// to check the array elements are of the same data type or not

const prices = [90, 89, 9, 0];
const NewPrices = prices.every(function (item, index) {
  return typeof item === "number";
});
console.log(NewPrices);
console.log("------------------------------------");
// to check either in array is all are string or not;
const string = ["sandeep","krishna","hari",0];
const NewStr = string.every(function(item,index){
    return typeof item === "string";
});
console.log(NewStr);
