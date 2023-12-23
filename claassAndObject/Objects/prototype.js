const Students = {
  college: "Amrit science Campus",
  hobbies: ["Reading", "Writing", "Travelling"],
  skills: ["team Work", "leadership"],
  level: "bachelor",
  department: "CSIT",
};

const Student1 = {
  address: "KTM",
  phoneNumber: "+977 9823334566",
  age: 21,
  height: 5.2,
};

const Student2 = {
  address: "Pokhara",
  phoneNumber: "+977 9820004566",
  age: 20,
  height: 5.7,
};
const Student3 = {
  address: "Dang",
  phoneNumber: "+977 9823334588",
  age: 22,
  height: 5.9,
};
Student1.__proto__ = Students;
Student2.__proto__ = Students;
Student3.__proto__ = Students;

console.log(Student1.colleg);
