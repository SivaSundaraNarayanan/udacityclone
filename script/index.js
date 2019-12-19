window.onscroll = () => {
    // console.log(window.pageYOffset);
    if (window.pageYOffset >= 150) {
        document.getElementById("wrapper").classList.add("sticky");
    } else {
        document.getElementById("wrapper").classList.remove("sticky");
    }
}



var intercom = () => {
    var intercomms = document.getElementsByClassName("intercom-button");
    var comms;
    //console.log(intercomms);
    for (let ind = 0; ind < intercomms.length; ind++)
        intercomms[ind].classList.toggle("show");
};

var toggle = () => {
    let div_width = document.getElementById("mov-sidenav").style.width;
    if (div_width == "250px") {
        document.getElementById("mov-sidenav").style.width = "0";
        document.getElementsByTagName("body")[0].style.marginLeft = "0";
    } else {
        document.getElementById("mov-sidenav").style.width = "250px";
        document.getElementsByTagName("body")[0].style.marginLeft = "250px";
    }
}