

var myIndex = 0;
slide();

function slide() {
  var i;
  var images = document.getElementsByClassName("images");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > images.length) {myIndex = 1}    
  images[myIndex-1].style.display = "block";  
  setTimeout(slide, 5000); // Change image every 5 seconds
}

const hamburger = document.querySelector(".hamburger");
const x = document.querySelector(".x");
const nav_menu = document.querySelector(".nav_menu");
const nav_item = document.querySelectorAll(".nav_item");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    x.classList.toggle("active");
    nav_menu.classList.toggle("active");

})

x.addEventListener("click", () => {
    hamburger.classList.remove("active");
    x.classList.remove("active");
    nav_menu.classList.remove("active");
})
nav_item.forEach(n => n.addEventListener("click", () => {
    x.classList.remove("active");
    nav_menu.classList.remove("active");
    hamburger.classList.remove("active");
}))



