// Collect and Store the Slide Cards (2) in an array.
var slideTotal = document.getElementsByClassName('slide-card');

//Set a Slide Index
var slideIndex = 0;

//Set the first slide display to block
slideTotal[slideIndex].style.display = "block";

// Get the length of the slideTotal. So if you add more slides the code doesn't have to change
var slideTotalLenght = slideTotal.length;

var sliderControls = document.getElementsByClassName('arrow');
for (var i = 0; i < slideTotalLenght; i++) {
  sliderControls[i].addEventListener('click', function() {
        //check if the arrow that was clicked is left
        if(this.id == "left"){

            slideTotal[slideIndex].style.display="none";
            if(slideIndex == 0){
              slideIndex = slideTotal.length-1;
              slideTotal[slideIndex].style.display ="block";
            }
            else {
              slideTotal[slideIndex].style.display="none";
              slideIndex-=1
              slideTotal[slideIndex].style.display ="block";
            }
        }
        else if(this.id == "right"){
          if(slideIndex > slideTotal.length-2){
            slideTotal[slideIndex].style.display="none";
            slideIndex=0;
            slideTotal[slideIndex].style.display ="block";

          }
          else {
            slideTotal[slideIndex].style.display="none";
            slideIndex++
            slideTotal[slideIndex].style.display ="block";
          }
        }

  });//Closes out event addEventListener function
}//Closes out for loop
//Note if the arrow left was clicked, the slider should go back one, or minus none.
//If the arrow right was clicked the slider should go up one, or add one.
