let heroes = ["ram", "krishna", "shiva", "ganesh"];
heroes.splice(2, 0, "Kuber");

console.log(heroes); // adding kuber in 2nd index
heroes.splice(3, 1, "Mahadev");
console.log(heroes);

heroes.splice(0, 1); // delete the one item from 0 index
console.log(heroes);

heroes.splice(heroes.length - 1, 1, "bal ganesh"); // replacing ganesh with balganesh
console.log(heroes);
