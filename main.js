var slideIndex = 0;
showSlides();

function showSlides() {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   for (i = 0; i <slides.length; i++) {
       slides[i].style.display = "none";      
   }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}
   slides[slideIndex-1].style.display = "block";
   setTimeout(showSlides, 5000); // Change image every 5 seconds
   
}


/* plusSlides()
function plusSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i <slides.length; i++) {
        slides[i].style.display = "none";
 }
    slideIndex++;
    if(slides[i].style.display === "block"){ 
        slides[slideIndex-1].style.display = "block"; 
    } 
 

} */

function plusSlides(){
    var foto = document.getElementsByClassName("mySlides")
      
    if(foto == "front-end.jpg"){
        foto = "redovisning.jpg"
    }
    else{
        console.log("fel bild")
    }
    
    
}