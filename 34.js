var number1 = Number(prompt("number: "))
var number2 = Number(prompt("number: "))
var samboly = prompt("samboly: ")
if(isNaN(number1) || isNaN(number2)){
    alert("error")
}
else if(samboly == "+"){
    alert(number1 + number2)
}
else if(samboly == "-"){
    alert(number1 - number2)
}
else if(samboly == "*"){
    alert(number1 * number2)
}
else if(samboly == "/"){
    alert(number1 / number2)
}