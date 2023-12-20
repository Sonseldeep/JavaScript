const prices = [1000, 4567, 890, 378, 8907];
// display only those whose prices is less than 2000;
const filterPrice = prices.filter((item, index) => {
  if (item <= 2000) {
    return true;
  }
  return false;
});
console.log(`list: ${prices}`);
console.log(`less than 2000: ${filterPrice}`);

// display even number onl;u from a list

console.log("----------------------------------");
const listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = listNumber.filter(function (item, index) {
  if (item % 2 === 0) {
    return true;
  }
  return false;
});
console.log(listNumber);
console.log("----------Even Number---------");
console.log(result);

// display those whose length is less than 5 only
console.log("----------------------------");
const courseName = ["JavaScript", "C++", "C", "Java", "Python"];
const finalAns = courseName.filter(function (item, index) {
  if (item.length < 5) {
    return true;
  } else {
    return false;
  }
});
console.log(`list of course: ${courseName}`);
console.log("----------------------------");
console.log(`name less than 5 length: ${finalAns}`);
