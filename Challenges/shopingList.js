//shoppingList = ['milk','butter','juice','rice','potatoes'];
// get last items and plce it in the beginning of the list
// add two more items at the end of list: Cheese, Eggs

const shoppingList = ['milk','butter','juice','rice','potatoes'];
 
// to get last elements
let lastElement = shoppingList[shoppingList.length - 1];
console.log(lastElement);

// to remove last elements
shoppingList.pop();
// to add last elements in the beginning
shoppingList.unshift(lastElement);
console.log(shoppingList);
// to add two more extras 
shoppingList.push("butter",'cake');
console.log(shoppingList);