var cities = {
    tehran:["tehran", "dmavnd", "rae", "aslam shhr"],
    alborz:["ashthard", "kraje", "fardes", "mohammd shahr"],
    hamedan:["toserkan", "hamedan", "nhavnd", "mlaer"],
    azarbaejan:["meanh", "srab", "hashtrod", "tabrez"],
}

var name_city = prompt("enter name: ")
var new_city = cities[name_city]

new_city.forEach(function (params) {
    console.log(params)
});