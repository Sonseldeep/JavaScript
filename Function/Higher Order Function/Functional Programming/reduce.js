// syntax:
// .reduce(function(accumulator,currentValue,currentIndex,array),initialValue);
var course = ["java", "javascript", "c++", "python"];
const price = [1000, 4000, 3000, 3000];

const finalSum = price.reduce(function (acc, item, index) {
  acc += item;
  return acc;
}, 0);

console.log(`sum of price: ${finalSum}`);

// to find the sum in the given array arr = [1,2,44,67,89]

const arr = [1, 2, 44, 67, 89];
const newArr = arr.reduce(function (sum, item, index) {
  sum += item;
  return sum;
}, 0);
console.log(newArr);

/* logics 

console.log("-----------------------------");
const value = [1,2,3,4,5];
let sum=0;

for(let i=0; i<value.length;i++){
    
    
    sum+=value[i];
}
console.log('using for loop',sum);
*/
