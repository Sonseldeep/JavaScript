// method 1 : creating objects by literal
// car1 as object
var car1 = {
  name: "honda city", // name as key and honda city as value
  manufacture: "honda",
  fuelCapacity: 40,
  isAutomatic: false,

  greetMe: function () {
    console.log("hello from SonselDeep");
  },
};
console.log(car1.greetMe());
// note: value  may be any data type however  key is always string
var car2 = {
  name: "snoet",
  manufacturer: "toyota",
  fuelCapacity: 56,
  hasAC: true,
};
//console.log(car1);
//console.log(car2);
//console.log(car1.name,car1.fuelCapacity);

// another method to access the date
//console.log(car1['name'],car1.name);

// to update the data for the object value
car1.colour = "red"; // colour property is added into the car1

// to modify the data
car1.isAutomatic = true;
