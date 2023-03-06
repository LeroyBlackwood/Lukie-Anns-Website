const navHam = document.querySelector(".hamburger");
const navX = document.querySelector(".x");
let navMenu = document.querySelector(".nav_menu")
const navLink = document.querySelectorAll(".nav_link")



navHam.addEventListener("click", () =>{
    navHam.classList.toggle("x");
    navX.classList.toggle("x");
    navMenu.classList.add("slideInMenu");
})

navX.addEventListener("click", () =>{
    navX.classList.toggle("x");
    navHam.classList.toggle("x");
    navMenu.classList.remove("slideInMenu");
  
})

navLink.forEach((n) => {
n.addEventListener("click", () =>{
    navX.classList.toggle("x");
    navHam.classList.toggle("x");
    navMenu.classList.remove("slideInMenu");
    console.log("clicked")
})})
