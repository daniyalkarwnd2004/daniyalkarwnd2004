var names = [
    {id: 1, name: "ali", email: "ali@gmail.com"},
    {id: 2, name: "reza", email: "reza@gmail.com"},
    {id: 3, name: "neda", email: "neda@gmail.com"},
    {id: 4, name: "ahmad", email: "ahmad@gmail.com"},
]

var username = prompt("enter username: ")
 var data = names.find(function(value){
    if(value.name === username){
        return true
    }
 })

if(data === undefined){
    alert("no")
}