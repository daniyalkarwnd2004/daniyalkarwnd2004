document.getElementById("body").style.backgroundColor = "rgb(27, 22, 60)";
document.getElementById("navbar").style.backgroundColor = " rgb(69, 59, 132)";
var Images1 = document.getElementById("Images1");
var Images2 = document.getElementById("Images2");
var Images3 = document.getElementById("Images3");
var Images4 = document.getElementById("Images4");
var Shopping1 = document.querySelector("#shopping1");
var Shopping2 = document.querySelector("#shopping2");
var Shopping3 = document.querySelector("#shopping3");
var Shopping4 = document.querySelector("#shopping4");
var Shopping5 = document.querySelector("#shopping5");
var Shopping6 = document.querySelector("#shopping6");
var Shopping7 = document.querySelector("#shopping7");
var Shopping8 = document.querySelector("#shopping8");
var video = document.querySelector(".video");
var footer = document.querySelector(".footer");


video.onmouseover = function() {
    video.style.opacity = "10";
}
video.onmouseout = function(){
    video.style.opacity = "0.7";
}



function opacity() {
    Images1.onmouseover = function () {
        Images1.style.opacity = "0.8"
    }
    Images1.onmouseout = function(){
        Images1.style.opacity = "10"
    }
    Images2.onmouseover = function () {
        Images2.style.opacity = "0.8"
    }
    Images2.onmouseout = function(){
        Images2.style.opacity = "10"
    }
    Images3.onmouseover = function () {
        Images3.style.opacity = "0.8"
    }
    Images3.onmouseout = function(){
        Images3.style.opacity = "10"
    }
    Images4.onmouseover = function () {
        Images4.style.opacity = "0.8"
    }
    Images4.onmouseout = function(){
        Images4.style.opacity = "10"
    }

    Images5.onmouseover = function () {
        Images5.style.opacity = "0.8"
    }
    Images5.onmouseout = function(){
        Images5.style.opacity = "10"
    }

    Images6.onmouseover = function () {
        Images6.style.opacity = "0.8"
    }
    Images6.onmouseout = function(){
        Images6.style.opacity = "10"
    }

    Images7.onmouseover = function () {
        Images7.style.opacity = "0.8"
    }
    Images7.onmouseout = function(){
        Images7.style.opacity = "10"
    }

    Images8.onmouseover = function () {
        Images8.style.opacity = "0.8"
    }
    Images8.onmouseout = function(){
        Images8.style.opacity = "10"
    }
}

opacity();

function onclick(){
    
Shopping1.onclick = function(){
    Shopping1.style.backgroundColor = "blue";
};

Shopping2.onclick = function(){
    Shopping2.style.backgroundColor = "blue";
};

Shopping3.onclick = function(){
    Shopping3.style.backgroundColor = "blue";
};

Shopping4.onclick = function(){
    Shopping4.style.backgroundColor = "blue";
};

Shopping5.onclick = function(){
    Shopping5.style.backgroundColor = "blue";
};
Shopping6.onclick = function(){
    Shopping6.style.backgroundColor = "blue";
};
Shopping7.onclick = function(){
    Shopping7.style.backgroundColor = "blue";
};
Shopping8.onclick = function(){
    Shopping8.style.backgroundColor = "blue";
};
}
onclick();