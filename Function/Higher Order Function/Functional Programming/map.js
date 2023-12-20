// same as forEach but easier than \
const price = [100, 200, 400, 500];

const output = [];
// by for each method, we have to define new array
price.forEach((item, index) => {
  output.push(item * 0.5);
});
console.log(output);

// using same  logic as .map
// we dont have to define new array

const collection = [100, 200, 400, 500];
const NewCollection = collection.map((item, index) => {
  return item * 0.5;
});
console.log(NewCollection);
