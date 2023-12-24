// function callBackHell(currentData, nextData) {
//   setTimeout(() => {
//     console.log("current Data: ", currentData);
//     if (nextData) {
//       nextData();
//     }
//   }, 2000);
// }
// callBackHell(1, () => {
//   console.log("getting data 2...");
//   callBackHell(2, () => {
//     console.log("getting data 3...");

//     callBackHell(3, () => {
//       console.log("getting data 4...");

//       callBackHell(4, () => {
//         console.log("hell damn");
//       });
//     });
//   });
// });

// we have to avoid the call back hell
// call back hell forms pyramid structure
// skip callback hell ----> promise(better appraoch for call back hell)

// same work can be done by promise
function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", data);
      resolve("sucess");
    }, 2000);
  });
}
getData(1)
  .then((res) => {
    console.log(res);
    return getData(2);
  })
  .then((res) => {
    console.log(res);
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });
