var number =[
    {id: 1, title: "2 * 2", answer: "4"},
    {id: 1, title: "2 + 2", answer: "4"},
    {id: 1, title: "2 - 3", answer: "1"},
    {id: 1, title: "2 / 8", answer: "0.25"},
]

var sum = 0

number.forEach(function(value){
    var qezi = prompt(value.title + "?")
    if(qezi === value.answer){
        sum ++
    }
})

console.log(sum)