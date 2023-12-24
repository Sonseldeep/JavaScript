function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data: ", dataId);
      resolve("success");
    }, 3000);
  });
}
(async () => {
  console.log("getting data....1");
  await getData(1);
  console.log("getting data....2");
  await getData(2);
  console.log("getting data....3");
  await getData(3);
})();
