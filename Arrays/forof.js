const college=["ASCOL","pulchwok","KU"];
for (const clz of college){
     // console.log(clz);
}


// using for each loop
const collegeName =["ascol","pulchwok","ku","boston"];
collegeName.forEach((item,index)=>{
   // console.log(`name: ${item} \n index: ${index}`);
});


const price =[100,990,500,600]; // 50% discount  chalirako xa
// o/p: [ 50,495,250,300]

var output=[];
price.forEach((item,index)=>{  // arrow function ta ho 
    output.push(item*0.5);
    
});
//console.log(output);


// same problem with function lityeral

price.forEach(function(item,index){
    output.push(item*0.5);
});
console.log(output);