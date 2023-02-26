const navHam = document.querySelector(".hamburger");
const navX = document.querySelector(".x");
let navMenu = document.querySelector(".nav_menu")
console.log(navMenu);


navHam.addEventListener("click", () =>{
    navHam.classList.toggle("x");
    navX.classList.toggle("x");
    navMenu.classList.toggle("slideInMenu");

    console.log("clicked")
})

navX.addEventListener("click", () =>{
    navX.classList.toggle("x");
    navHam.classList.toggle("x");
    navMenu.classList.toggle("slideInMenu");

    console.log("clicked")
  
})