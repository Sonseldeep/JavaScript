let reg1 = /abc/;
console.log(reg1.test("abcde"));
// here abc occur anywhere in the string it returns true else false

console.log(".....................");

let reg2 = /abxd/;
console.log(reg2.test('abcdef'));
// here in string x is absence

let reg3 = /[0-9]/;  // [0-9] includes 0,1,2,3,4,6,7,8,9
console.log(reg3.test("1924")); // 1924 comes under 0 to 9 range 