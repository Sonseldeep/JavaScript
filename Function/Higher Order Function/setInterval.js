/*
 set interval: repeats given function at every given time interval

 syntax:
       window.setInterval(function,milliseconds);
 
*/ 

// set interval le certain interval of times ma repeat garxa same tast or command

var timerId = setInterval(function(){
    console.log("its time to drink water");
    console.log(new Date());
    clearInterval(timerId);
},5000);

// to stop this we use clearInterval();
