var name_todo = [
    {id: 1, name: "kkk", vazet: true},
    {id: 2, name: "ggg", vazet: false},
    {id: 3, name: "mmm", vazet: true},
]

var number = prompt("1= add\n2= delet\n3= edit\n :")
if(number == 1){
    var names = prompt("names: ")
    var add_to_list = {
        id: name_todo.length + 1,
        name: names,
        vazet: false
    }
    name_todo.push(add_to_list)
}
else if(number == 2){
    var delet_name = prompt("name: ")
    var deletes = name_todo.findIndex(function(value){
        return value.name === delet_name
    })
    name_todo.splice(deletes, 1)
    
}
else if(number == 3){
    var edit_to_list = prompt("name: ")
    var edits = name_todo.forEach(function(value){
        if(value.name == edit_to_list){
            value.vazet = true
        }
    })
    console.log(name_todo)
}
console.log(name_todo)