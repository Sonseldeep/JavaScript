let name = "Krishna";
for (let i = 0; i <= 10; i++) {
  console.log(name);
}

// sum of even number
let sum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(`sum of 1st 100 even number: ${sum}`);

// sum of 1st natural number;
let total = 0;
for (let i = 0; i <= 100; i++) {
  total += i;
}
console.log(`sum of 1st 100 natural number: ${total}`);
// sum of 1st odd 100 number
let hold = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    hold += i;
  }
}
console.log(`sum of 1st 100 odd number: ${hold}`);
