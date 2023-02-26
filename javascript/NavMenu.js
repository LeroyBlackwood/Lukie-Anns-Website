const navHam = document.querySelector(".hamburger");
const navX = document.querySelector(".x");
const navMenu = document.querySelector("nav_menu");

navHam.addEventListener("click", () =>{
    navHam.classList.toggle("x");
    navX.classList.toggle("x");
    navMenu.classList.add("slideImage");


    console.log("clicked")
  
})

navX.addEventListener("click", () =>{
    navX.classList.toggle("x");
    navHam.classList.toggle("x");

    console.log("clicked")
  
})