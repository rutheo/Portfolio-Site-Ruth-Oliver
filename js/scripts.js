console.log("Hi, welcome to Ruth Oliver's protfolio website!")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
    var icon=document.getElementsByClassName("fa-bars")[0];
    if(icon){
       icon.className = icon.className.replace("fa-bars", "fa-xmark");
    }
    else{
    icon=document.getElementsByClassName("fa-xmark")[0];
     icon.className = icon.className.replace("fa-xmark", "fa-bars");
    }
}