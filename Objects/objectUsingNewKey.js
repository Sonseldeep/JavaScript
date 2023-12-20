var car= new Object();
car.name="mercedez benz";
car.manufature="benz group";
car.price="$ 12345000.89";
car.isAutomatics=true;
// object behaviour using function
car.greetMe = function(){
    console.log("Hello from SonselDeep");
}
console.log(car);

console.log(car.greetMe());