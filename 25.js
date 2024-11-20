var my_object = [
    {name: "reza", family: "ahmade", age: 20, email: "reza@gmail.com"},
    {name: "ali", family: "ahmade", age: 20, email: "reza@gmail.com"},
    {name: "ahmad", family: "ahmade", age: 20, email: "reza@gmail.com"},
]

while (true){
var singin = prompt("sing in?")
if (singin == "yes"){
    my_object2 = {}
    var names = prompt("name: ")
    var family = prompt("family: ")
    var ages = Number(prompt("age: "))
    var email = prompt("email: ")
    if (names.length > 3 && names.length <= 10 && family.length > 3 && family.length <= 15){
        my_object2 = {name: names, family: family, age: ages, email: email} 
        my_object.push(my_object2)
    }
}else{
    break
}
}
console.log(my_object)