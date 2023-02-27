

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
  setTimeout(slide, 2000); // Change image every 2 seconds
}