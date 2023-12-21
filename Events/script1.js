let bt = document.querySelector("#btn1");
bt = () => {
  console.log("button clicked");
};

let btn2 = document.querySelector("#btn2");
btn2 = () => {
  console.log("doubled click");
};
let div = document.querySelector("div");
div.onmouseover = () => {
  console.log("you are inside div");
};
