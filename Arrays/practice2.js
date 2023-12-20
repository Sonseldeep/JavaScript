// for a given array with price of 5 items -> [250,645,300,900,50]
// all items have an offer of 10% off on them
// change the array to store final prioce after applyng offer

let price = [250, 645, 300, 900, 50];
console.log(`original price: ${price}`);
for (let i = 0; i < price.length; i++) {
  let discount = price[i] / 10;
  price[i] -= discount;
}
console.log(price);
