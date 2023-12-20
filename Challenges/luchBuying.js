// write a function which will select a random naem from a list of names
//the person selected will have to pay for everybody's food bill.

// ['Sandeep','Sansank','Ovan];
// output=> Sasank is going to pay our bill today;

const payingBill = (nameList)=>{
    var numberOfPeople = nameList.length;
    var randompersonPosition = Math.floor(Math.random()*numberOfPeople);
    var randomPersom = nameList[randompersonPosition];

    return randomPersom = randomPersom + " is going to pay the bill";
};
var randomPersom=['Sandeep','ovan','sashank'];
console.log(payingBill(randomPersom));