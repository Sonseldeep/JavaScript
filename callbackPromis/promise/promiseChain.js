function asyn1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 2000);
  });
}
function asyn2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 2000);
  });
}

asyn1()
  .then((res) => {
    console.log("fetching data1...");
    console.log(res);
    return asyn2();
  })
  .then((res) => {
    console.log("fetching data2...");
    console.log(res);
  });

// promise chain is also difficult so there is asyn awai---->
// lets do it;
