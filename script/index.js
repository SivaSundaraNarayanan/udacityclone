window.onscroll = () => {
    console.log(window.pageYOffset);
    if(window.pageYOffset >= 150) {
       document.getElementById("wrapper").classList.add("sticky");
    } else {
        document.getElementById("wrapper").classList.remove("sticky");
    }
}

var intercom = () => {
    var intercomms = document.getElementsByClassName("intercom-button");
    var comms;
    console.log(intercomms);
    for(let ind=0; ind< intercomms.length; ind++)
        intercomms[ind].classList.toggle("show");
};