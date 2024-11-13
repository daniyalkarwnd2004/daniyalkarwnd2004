var number = +prompt("mark: ")
if (isNaN(number)){
    alert("error")
}else{
    switch (number) {
        case 18:
        case 19:
        case 20:
            alert("mark: A");
            break;
        case 17:
        case 16:
        case 15:
            alert("mark: B");
            break;
        case 14:
        case 13:
            alert("mark: C");
            break
        case 12:
            alert("oh soury !!!");
            break;
        default:
            alert("oh no");
            break;
    }
}

