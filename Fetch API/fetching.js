const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// (async () => {
//   console.log("fetching the data......");
//   let response = await fetch(URL);
//   console.log(response); // ---------> JSON format
//   // to check staus only
//   //console.log(response.status);
//   let data = await response.json();
//   console.log(data); //----------> in useable data
//   console.log(data[0].text);
// })();

// or
const getFacts = async () => {
  console.log("fetching the data......");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data); //----------> in useable data
  factPara.innerText = data[2].text;
};
// getFacts(); //------> unnecessary call so we use IIFE
btn.addEventListener("click", getFacts);
