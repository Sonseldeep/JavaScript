const student = {
  fullName: "Sandeep Shrestha",
  age: 21,
  cgpa: 3.8,
  isPas: true,
};

// another method to access value
console.log(student["fullName"]);

// we can update the value is object
console.log((student.fullName = "Ram Shrestha"));

console.log(typeof student);

// object of profile;

const profile = {
  userName: "@sonseldeep",
  followers: 145,
  following: 123,
  isProfessional: true,
};
console.log(typeof profile.userName);
