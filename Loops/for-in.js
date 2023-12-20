const students = {
  name: "Ram Krishna",
  age: 21,
  address: "Pokhara",
  level: "Bachelor",
  ph: "+977 9823334566",
  isHardworking: true,
};
// to access theri value
// students.key or
// students["key"] ====> uses

for (let key in students) {
  console.log(`${key}: ${students[key]}`);
}
