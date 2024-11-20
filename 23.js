var ary = []
var number = null
while(number !== 0){
    number = Number(prompt("enter number: "))
    if (number != 0){
        ary.push(number)
    }
    else{
        alert("break")
        break
    }
}
var avg = 0
for (var i = 0; i<ary.length; i++){
    avg += ary[i] 
}
console.log(avg / ary.length)
