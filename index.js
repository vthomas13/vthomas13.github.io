function myFunction(x) {
    x.classList.toggle("change");
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("menubtn").setAttribute( "onclick", "javascript: myFunction(this);closeNav();" );
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menubtn").setAttribute( "onclick", "javascript: myFunction(this);openNav();" );
} 