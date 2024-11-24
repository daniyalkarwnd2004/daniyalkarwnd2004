var minute = +prompt("enter minute: ")
var second = +prompt("enter second: ")

var timer = setInterval( function timers(){
    if (second == -1){
        minute --
        second = 59
    }
    if(minute === 0 && second === 0){
        clearInterval(timer)
    }
    console.log("timer: " + minute + ":" + second)
    second --
}, 1000)