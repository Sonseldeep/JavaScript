// we are given array of marks of strudent. Filter our of the marks of students that score 90+

let score = [20, 56, 98, 34, 91, 92, 97];

let Agrade = score.filter((mrk) => {
  return mrk > 90;
});
console.log(Agrade);

// to create an array from user n
// use reduce method to calculate the product of all number in array

let n = 5;
let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i] = i;
}
console.log(arr);

let product = arr.reduce((previous, current) => {
  return previous * current;
});
console.log(product);
