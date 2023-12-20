// create the objets by method of constructor

function Course(name,language,title,cost){
    this.name = name;
    this.language = language;
    this.title = title;
    this.cost = cost; 
}
var projects = new Course ("Java",
"nep",
"OOP with Java",
500);
    console.log(projects);

    var studentDetails = new Course(
        "Sandeep Shrestha",
        "Nepali, English, Hindi",
        "student of Computer Sciences",
        2.8 
    );

    // to delete th items from the objects
    // delete studentDetails.cost;
    
    // not to delete the key but resrt the cost  uuse == null or undefined
    studentDetails.cost=undefined;
    //  console.log(studentDetails);

    