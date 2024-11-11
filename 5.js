var user_age = Number(prompt("enter date: "))
const date = 1403
if (user_age > 0){
    if (isNaN(user_age)){
        alert("Error")
    }else{
        alert(date - user_age)
    }
}else{
    alert("error date")
}

