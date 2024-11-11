var time = Number(prompt("time: "))
if(isNaN(time)){
    alert("error")
}else{
    alert("hours: ", time / 60)
}