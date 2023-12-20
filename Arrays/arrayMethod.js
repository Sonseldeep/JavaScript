var movieLine= ["Sandeep","Krishna","Sashank","Ovan"];
movieLine.push("Arpan");
movieLine.push("Kritisha");

console.log(movieLine);
const person=movieLine.pop();
console.log(person);
console.log(movieLine);
  //  shift=> remove the first index 
const who=movieLine.shift();
console.log(who);
console.log(movieLine);

// unshift  adds to the first index 
movieLine.unshift("Dilmaya");
console.log(movieLine);

// splice helps to remove the nth index and how mmany have to remove
movieLine.splice(1,1);
console.log(movieLine);

// to replace nth index by another variable then
movieLine.splice(2,1,"Sangam");
console.log(movieLine);

const movieLine2=["Gyani","Samana"];
const concate=(movieLine.concat(movieLine2));
console.log(concate);

console.log('--------------------');

 // use of slice :   to get the value of index in range;

 console.log(concate.slice(0,3));

 // .join() helps to join the string by anything
 console.log(concate.join(','));
 console.log("the reverse order is: ");
 console.log(concate.reverse().join(','));

 // to find the index of given varibale in the list

console.log(concate.indexOf("Hari"));
// if it is not in the list then  it returns -1;





