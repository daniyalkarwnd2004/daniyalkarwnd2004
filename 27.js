var product = [
    {name: "samsongS20", price: 20000000},
    {name: "hoawe", price: 15000000},
    {name: "1+", price: 18000000},
    {name: "google", price: 1800000},
    {name: "aple", price: 8000000}
]


var userProduct = [
    {name: "hk1900", price: 180000},
    {name: "hoco1900", price: 2800000},
]

var reqest;
var nameProduct = prompt("enter your name prouduct: ")
var inshop = product.some(function (value) {
        if(value.name == nameProduct){
            reqest = value
            return true
        }
})

if(inshop == true){
    alert("yes")
    var newproduct = {
        name: reqest.name,
        price: reqest.price
    }
    userProduct.push(newproduct)
    console.log(userProduct)
    var sum = 0
    userProduct.forEach(function(value){
            sum += value.price
    })
    alert(sum)

}else{
    alert("no")
}