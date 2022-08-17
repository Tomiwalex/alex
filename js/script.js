var ham = document.getElementById("hamb");
var menu = document.getElementById("menu");
var closeMenu = document.getElementById("close-menu");

menu.addEventListener('click', slide);
closeMenu.addEventListener('click', removeMenu);

function slide(){
    if (ham.classList.contains('slide-out')){
        ham.classList.add('slide-in');
        ham.classList.remove('slide-out');
    }

    else{
        ham.classList.add('slide-in');
    }
}

function removeMenu(){
    ham.classList.remove('slide-in')
    ham.classList.add('slide-out')
}