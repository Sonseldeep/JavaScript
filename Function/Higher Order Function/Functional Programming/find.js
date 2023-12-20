const number = [1,2,3,4,5,6,7,8,9,0];
const find = number.find(function(item,index){
    return item ===9;
});
console.log(find);
// if not found then itrs gives undefined


const string = ['java','c','c++','python','rubby'];
const FindString = string.find((item,index)=>{
    return item === "java";
});
console.log(FindString);