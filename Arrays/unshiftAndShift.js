let writters = [
  "laxmi prasad devkota",
  "shidhicharan shrestha",
  "lekhnath poudel",
  "Bhanu Bhakta Aacharya",
];

writters.unshift("Madhav Prasad Ghimire");
console.log(writters);
let deletedName = writters.shift();
console.log(`deleted name: ${deletedName}`);
console.log(writters);
