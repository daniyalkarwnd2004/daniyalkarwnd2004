var number = Number(prompt("number: "))
var sum = 0
while(number / 10 != 0){
    sum = sum + number % 10
    number = Math.floor(number / 10)
}
console.log(sum)