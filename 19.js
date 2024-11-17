var number = Number(prompt("number: "))
var sum = 0
var digit = 0
while (number % 10 != 0) {
    sum += number % 10
    number = Math.floor(number / 10)
    digit ++
}
console.log(digit + "\n" + sum)
