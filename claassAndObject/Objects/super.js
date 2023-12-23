class Stdent {
  goSchool() {
    console.log("go school at (9:15 am");
  }
  play() {
    console.log("play games");
  }
}
class nonStudent extends Stdent {
  work() {
    // call the play() from parent class;
    super.play();

    console.log("work fro family");
  }
}
let ram = new nonStudent();
ram.work();
