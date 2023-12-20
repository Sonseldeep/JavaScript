{
  alert("welcomew to guessing game");
  let answer = 65;
  prompt("the numbers are between O and 100");
  let userNumber = prompt("enter the number");

  while (answer != userNumber) {
    userNumber = prompt("enter the number");
    if (userNumber < 50 && userNumber == 0) {
      alert("too low, damn");
    }

    if (userNumber == 50) {
      alert("more than 50");
    }

    if (userNumber == 75) {
      alert("less than 75");
    }

    if (userNumber == 63) {
      alert("preety close");
    }
    if (userNumber > 75 && userNumber <= 100) {
      alert("damn, too big");
    }
    if (userNumber > 100 && userNumber < 0) {
      alert("Out of Range, sad");
    }
  }
  alert("congratulation");
}
