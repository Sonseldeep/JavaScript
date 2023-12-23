const student = {
  name: "ram krishna",
  age: 21,
  level: "bachelor",
  // getAge: function () {
  //   console.log(this.age);
  // },
  getAge() {
    console.log(this.age);
  },
};
console.log(student);
console.log(student["getAge"]());
console.log(student["name"]);
