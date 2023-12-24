// hosting us default behavuour of Js where all varaible and function
// deceleration are moved on the top
// works for both local and golobal variable;

// x = 20;
// console.log("x: ", x);
// var x;

callMe();

function callMe() {
  console.log("hello ram");
}
// it works for the normal function and var

// but not for let and const
// not for arrow function
// var callMe = () => {
//   console.log("hello world");
// };
