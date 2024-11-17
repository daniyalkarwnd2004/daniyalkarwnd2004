var number1 = Number(prompt("number: "))
var number2 = Number(prompt("number: "))
if (number1 % 2 === 0){
    while(number1 < number2){
        console.log(number1)
        number1 += 2
    }
}
else if (number1 % 2 !== 0){
    number1 ++
    while(number1 < number2){
        console.log(number1)
        number1 += 2
    }
}