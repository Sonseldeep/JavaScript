
function deliveryProduct(name,callback){
    console.log(`Done with the develivery of ${name}`);
    callback();
}

function successFunction(){
    console.log("Product has been successfully delevired");
}
console.log(deliveryProduct('mack book',successFunction));




// yo paxi padhne ho proimise ma :)
/*
getProduct(18, (product) => {
  getUserInfo(product.userId, (userInfo) => {
    getAddress(userInfo.userName, (address) => {
      console.log(address);
    });
  });
});
   */