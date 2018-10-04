var slideIndex = 0;
showSlides();
var timer;
function showSlides() {  
   var i;
   var slides = document.getElementsByClassName("mySlides");
   for (i = 0; i <slides.length; i++) {
       slides[i].style.display = "none";      
   }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}
   if (slideIndex < 1) {slideIndex = 3}
   slides[slideIndex-1].style.display = "block";
   clearTimeout(timer);
   timer = setTimeout(showSlides, 2000); // Change image every 5 seconds  
}


/* function plusSlides(j) {
    console.log("j: " + j + " Slide nr " + slideIndex + " visas nu!")
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (j>0) { // vänd på denna > till <
        console.log("========== PLUS! ===========");
        //slideIndex++;
        showSlides(); // behövs båda?
    } else {
        slideIndex -= 2; //flytta upp
        console.log("========== MINUS! ===========");
        showSlides(); // en räcker, ska den va inuti if-satsen?
    }
}  */

/* ======== Kortare variation!!============= */

function plusSlides(j) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (j<0) {
        slideIndex -= 2;
    } 
    showSlides();  
} 