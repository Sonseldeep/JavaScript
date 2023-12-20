const mode = "any";
let color;

if (mode === "dark") {
  color = "black";
} else if (mode === "light") {
  color = "white";
} else {
  color = "as device theme";
}
console.log(color);
