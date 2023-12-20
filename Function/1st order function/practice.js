// create function using function keyword that takes a string as an argument and returns the number of
//vowels in string

// function txt(string) {
//   let count = 0;
//   for (let mes of string) {
//     if (
//       mes === "a" ||
//       mes === "e" ||
//       mes === "i" ||
//       mes === "o" ||
//       mes === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// txt("sandeep");
// txt("sandeep shrestha");

// bv arrow function
let vow = (string) => {
  let count = 0;
  for (let mes of string) {
    if (
      mes === "a" ||
      mes === "e" ||
      mes === "i" ||
      mes === "o" ||
      mes === "u"
    ) {
      count++;
    }
  }
  console.log(count);
};
vow("Sandeep");
