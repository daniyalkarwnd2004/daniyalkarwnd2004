var number = null
var sum = 0
var digit = 0
while(true){
    if (number !== 0){    
        number = Number(prompt("enter number: "))
        digit ++
        sum += number
    }else{
        digit --
        break
    }
}
console.log(sum / digit)

