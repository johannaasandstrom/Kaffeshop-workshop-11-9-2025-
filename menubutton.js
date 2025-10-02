const menubutton = document.querySelector(".menu-btn");
const navlinks = document.querySelector("nav");

menubutton.addEventListener("click", function(){
    navlinks.classList.toggle("open");
});