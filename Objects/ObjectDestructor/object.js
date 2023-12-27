const course = {
  courseName: "JavaScript",
  price: 999,
  courseInstructor: "Chai Aur JS",
};

const { courseName, price, courseInstructor } = course;
console.log(courseName, price, courseInstructor);
// we can destructure object names
// const { courseName: CN, price: p, courseInstructor: CI } = course;
// console.log(CN,p,CI);
