var number = prompt("Number: ")
var number1 = String(number)
var digit = 0
if (isNaN(number)){
    console.log("error")
}else if(number <= 0){
    console.log("please enter number :)")
}
else{
    for(var i = 1; i <= number1.length; i++){
        digit++
    }
    console.log(digit)
    console.log(typeof number1)
}
