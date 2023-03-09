const navBar = document.querySelector(".nav_bar");
const navMenu = document.querySelector(".nav_menu");
const navButton = document.querySelectorAll(".nav_link");

navBar.addEventListener("click", () => {
    navBar.classList.toggle("active");
    navMenu.classList.toggle("active");
})


navButton.forEach(n => n.addEventListener("click", () => {
    navBar.classList.remove("active");
    navMenu.classList.remove("active");
})
)