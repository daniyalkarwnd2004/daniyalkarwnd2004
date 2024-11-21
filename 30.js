var enter_name = prompt("name: ")
var names = enter_name.split('')
var reverses = names.reverse()
var name1 = reverses.join('')
console.log(name1)
if (enter_name == name1){
    alert("yes")
}
else{
    alert("no")
}