var groupUser = [
    {id: 1, name: "ali", age: 25},
    {id: 2, name: "reza", age: 19},
    {id: 3, name: "ahmad", age: 20},
    {id: 4, name: "mohammd", age: 17},
    {id: 5, name: "neda", age: 35},
    {id: 6, name: "sahel", age: 41},
    {id: 7, name: "dorsa", age: 22},
]

var userAll = groupUser.every(function(user){
    return user.age > 18
})
if(userAll == true){
    alert("yes is good")
}else{
    alert("oh no :(((")
}