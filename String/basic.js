let str = "Shree Krishna";
let len = str.length;
// console.log(str[0], str[1]);

// // to return the last char of string

// by using charAt
// console.log(str.charAt(len - 1));

// ny using slice with -1;

console.log(str.slice(-1));

// by using spread and destructing
let [lastchar] = [...str].reverse();
console.log(lastchar);
