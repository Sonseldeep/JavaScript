let integer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let EvenNumber = integer.filter((val) => {
  return val % 2 === 0;
});
console.log(EvenNumber);

// to get number greater than 3

let Greater3 = integer.filter((key) => {
  return key > 3;
});
console.log(Greater3);
