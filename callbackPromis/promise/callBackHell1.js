function hell(currentData, nextData) {
  setTimeout(() => {
    console.log("currentData: ", currentData);
    if (nextData) {
      nextData();
    }
  }, 2000);
}

hell(20, () => {
  console.log("loading data 3....");
  hell(30, () => {
    console.log("loading data 4....");
    hell(40);
  });
});
