const leapyear = (date) => {
  if (date % 4 !== 0) {
    console.log(`${date} is not leap year`);
  } else if (date % 4 === 0) {
    if (date % 100 === 0) {
      if (date % 400 == 0) {
        return "leap year";
      } else {
        return "not leap year";
      }
    }
  }
};
console.log(leapyear(2010));
