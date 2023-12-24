const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am promise");
    resolve("success");
    // reject("error");
    // // promise never fulfilled
  });
};
let promise = getPromise();
promise.then((resolve) => {
  console.log("fulfilled", resolve);
});

// let promise = getPromise();
// promise.catch((err) => {
//   console.log("unexpected error",err);
// });
