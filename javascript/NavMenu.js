const navHam = document.querySelector(".hamburger");
const navX = document.querySelector(".displayX");
let navMenu = document.querySelector(".nav_menu")
const navLink = document.querySelectorAll(".nav_link")



navHam.addEventListener("click", () =>{
    navHam.classList.toggle("active");
    navX.classList.toggle("active");
    navMenu.classList.toggle("slideInMenu");
})

navX.addEventListener("click", () =>{
    navX.classList.toggle("active");
    navHam.classList.toggle("active");
    navMenu.classList.toggle("slideInMenu");
  
})

navLink.forEach((n) => {
n.addEventListener("click", () =>{
    navX.classList.toggle("x");
    navHam.classList.toggle("x");
    navMenu.classList.toggle("slideInMenu");
    console.log("clicked")
})})
