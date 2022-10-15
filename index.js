var sec=0
var min=0
var hor=0

var frozen 

function twoudigits(digit){
     if(digit<10){
        return('0'+digit)
     }else{
        return(digit)
     }
}
function start(){
   watch()
   frozen= setInterval(watch, 1000)
}

function pause(){
    clearInterval(frozen)
}

function stop(){
    clearInterval(frozen)
    sec=0
    min=0
    hor=0
    document.getElementById("watch").innerText='00:00:00'
}


function watch(){
     sec++
     if(sec==60){
        min++
        sec=0
          if(min==60){
            min=0
            hor++
          }
     }
    document.getElementById("watch").innerText=twoudigits(hor)+':'+twoudigits(min)+':'+twoudigits(sec)
}