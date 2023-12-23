class Toyota {
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  setBrand(name) {
    this.name = name;
    console.log(name);
  }
}
// creating object;
let car1 = new Toyota();
car1.start();
car1.setBrand("Fortunure");
let car2 = new Toyota();

car2.setBrand("Fraree");
car2.stop();
