var array_product = [
    {id: 1, name: "not book", price: 15000},
    {id: 2, name: "book", price: 150000},
    {id: 3, name: "a4", price: 90000},
    {id: 4, name: "medad", price: 15000},
    {id: 5, name: "irpad", price: 500000},
    {id: 6, name: "specr", price: 150000},
]

var sam = 0
var sumProduct = 0 
var userProduct = array_product.filter(function (value) {
    sumProduct += value.price
    if(value.price < 100000){
        sam += 1000
    }
})
console.log("sum price post", sam)
console.log("sum price product: ", sumProduct)
console.log("sum price: ", sam + sumProduct)