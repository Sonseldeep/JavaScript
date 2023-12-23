class Person {
  constructor(name) {
    this.name = "Homosappins";
  }
  eat() {
    console.log("eat");
  }
  drink() {
    console.log("drink");
  }
}
class Engineer extends Person {
  constructor(name) {
    super();
  }
  setBranch(branch) {
    this.branch = branch;
    console.log(branch);
  }
  work() {
    console.log("solve problems");
  }
}
let e1 = new Engineer("Babu Kanxa");

e1.work();
e1.setBranch("ComputerEngineer");
e1.eat();
