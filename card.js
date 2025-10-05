const cards = document.querySelectorAll(".card"); 
const leftbutton = document.getElementById("left"); 
const rightbutton = document.getElementById("right"); 

rightbutton.onclick = () => { 
    const active = document.querySelector(".card.active"); 
    if(active.nextElementSibling) { 
        active.classList.remove("active");
        active.nextElementSibling.classList.add("active"); 
    } 
}; 

leftbutton.onclick = () => { 
    const active = document.querySelector(".card.active"); 
    if(active.previousElementSibling) { 
        active.classList.remove("active");
        active.previousElementSibling.classList.add("active"); 
    } 
};
