const gender = prompt("enter gender: ")
const age = Number(prompt("enter age: "))

if(isNaN(age)){
    alert("error")
}else if(gender != "man" || age <= 18){
    alert("error age or gender")
}else{
    alert("good")
}

