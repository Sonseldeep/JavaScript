let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turnO = true; // player X and player Y
const winnigPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [8, 4, 0],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.Disabled = true;
    checkWinner();
  });
});
const checkWinner = () => {
  for (let pattern of winnigPattern) {
    let pos1value = pattern[0].innerText;
    let pos2value = pattern[1].innerText;
    let pos3value = pattern[2].innerText;

    if (pos1value != "" && pos2value != "" && pos3value != "") {
      if (pos1value === pos2value && pos2value === pos3value) {
        console.log("winner", pos1value);
      }
    }
  }
};
