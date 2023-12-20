let arr = [1, 0, 9, 12, 5, 6, 9.9];

let max = arr.reduce((previous, current) => {
  //return Math.max(previous, current);
  return previous > current ? previous : current;
});
console.log(max);
