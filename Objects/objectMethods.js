var name1 = new Object();
name1.firstname = "Sandeep";
name1.lastName = "Shrestha";
name1.age = 19;
name1.caste = "Newar";

//console.log(name1);

// to get the key of the objects]
// console.log(Object.keys(name1));

// object by method of literals
var studentDetails = {
  Name: "Sandeep",
  Age: 20,
  calss: "Bachelor 1st sem",
  rollno: 16,
};
// console.log(Object.keys(studentDetails));

// create objects by construction

function Student_Details(Name, Age, rollno, combinition) {
  this.Name = Name;
  this.Age = Age;

  this.rollno = rollno;
  this.combinition = combinition;
}
var bscCsit = new Student_Details("Sandeep Shrestha", 19, 20, "CSIT");

// assume that nobody is allowed to modify the bsccsit deatils then =====> use objects.freez();

//Object.freeze(bscCsit);

bscCsit.college = "ASCOl";
//console.log(bscCsit);

Object.seal(bscCsit);
bscCsit.rollno=16;
//console.log(bscCsit);
//console.log(Object.keys(bscCsit));

// to get the valueas of object by method of .values() but  cant be deleted
// console.log("--------------------");

// console.log(Object.values(bscCsit));


// WE  dont have to edlete the object but to modify  only then use Objects.seal()


// for in loop objects iteration;
  

for (var key in bscCsit){
    console.log(bscCsit[key]);
}