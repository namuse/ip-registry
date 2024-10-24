const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__left .container__btn", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  delay: 3500,
});

ScrollReveal().reveal(".container__right .tent-1", {
  duration: 1000,
  delay: 4000,
});
ScrollReveal().reveal(".container__right .tent-2", {
  duration: 1000,
  delay: 4500,
});

ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 5000,
});

ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 5500,
  interval: 500,
});

let dropdownBtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");

dropdownBtn.onclick = function(){
    if (list.classList.contains('show')) {
    icon.style.rotate = "0deg" ;   
    }
    else
    {
    icon.style.rotate = "-180deg";
    }
    list.classList.toggle("show");
};

window.onclick = function(e){
    if(
        e.target.id !== "drop-text"&&  
        e.target.id !== "span"&&  
        e.target.id !== "icon"){
            list.classList.remove("show");
            icon.style.rotate = "0deg";
        }
};

for(item of listItems){
    item.onclick = function (e){
        span.innerText = e.target.innerText;

        if (e.target.innerText == "Everything") {
          input.placeholder = "IP Lookup...";  
        } else {
            input.placeholder = "Lookup in " + e.target.innerText + "..." 
        }

    };
}
    