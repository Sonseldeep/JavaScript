// 0,1,1,2,3,5,8,13,21,34,55,89,144, ....
// 0+1 =1;
// 1+1 =2
//2+1=3;
// 3+2=5

const fibo = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};
for (let i = 0; i < 16; ++i){

    console.log(fibo(i));
}
