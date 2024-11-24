var task_object = {
    ali: ["js", "python"],
    dani: ["sql", "python", "open-cv"],
    reza: ["js", "python", "c#"],
}
var new_task = prompt("enter new task: ")
var new_name = prompt("enter new name: ")

var new_task_object = task_object[new_name]
new_task_object.push(new_task)
console.log(task_object)