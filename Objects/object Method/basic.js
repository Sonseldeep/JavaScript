let student = {
    firstName: 'Sandeep',
    lastName: 'Shrestha',
    fullName: function(){
        return this.firstName +" " + this.lastName ;
    }
};
console.log(student.firstName);
console.log(student.lastName);
console.log(student.fullName());