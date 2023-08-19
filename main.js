// Select all slide elements and log them to the console
let slides = document.querySelectorAll('.slide');
console.log(slides);

// Convert the slide NodeList to an array and log it to the console
let slideArray = Array.from(slides);
console.log(slideArray);

// Select the next and prev elements
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

/**
 * Returns the previous and next slides based on the currently active slide.
 *
 *  An array containing the previous and next slides.
 */
function prevNext() {
  // Get the currently active slide
  const activeSlide = document.querySelector('.slide.active');

  // Get the index of the active slide in the slide array
  const currentIndex = slideArray.indexOf(activeSlide);

  // Initialize variables for the previous and next slides
  let prev, next;

  // If the active slide is the first slide, set the previous slide to the last slide in the array
  if (currentIndex === 0) {
    prev = slideArray[slideArray.length - 1];
  } else {
    // Otherwise, set the previous slide to the slide before the active slide
    prev = slideArray[currentIndex - 1];
  }

  // If the active slide is the last slide, set the next slide to the first slide in the array
  if (currentIndex === slideArray.length - 1) {
    next = slideArray[0];
  } else {
    // Otherwise, set the next slide to the slide after the active slide
    next = slideArray[currentIndex + 1];
  }

  // Return an array containing the previous and next slides
  return [prev, next];
}
// prevNext()


/**
 * This function is responsible for transitioning to the previous or next slide.
 * It updates the transform value of each slide element based on the current slide index.
 */
function goPrevNext() {
  // Get the active slide and its index
  const activeSlide = document.querySelector('.slide.active');
  const currentIndex = slideArray.indexOf(activeSlide);

  // Get the previous and next slides
  const [prev, next] = prevNext();

  // Loop through each slide element
  slideArray.map( ( slide, index ) => {
    console.log(index , currentIndex);
    // Update the transform value based on the current slide index
    if (currentIndex === index) {
      slide.style.transform = 'translateX(0%)'; // Set transform value to 0% for the active slide
    } else if (slide === prev) {
      slide.style.transform = 'translateX(-100%)'; // Set transform value to -100% for the previous slide
    } else if (slide === next) {
      slide.style.transform = 'translateX(100%)'; // Set transform value to 100% for the next slide
    }
  });
}





next.addEventListener('click', function() {
  // Get the active slide and the next slide
  let activeSlide = document.querySelector('.slide.active');
  let [next] = prevNext();

  // Remove the 'active' class from the active slide
  activeSlide.classList.remove('active');

  // Update the transform value for the active slide
  // activeSlide.style.transform = 'translateX(-100%)';

  // Add the 'active' class to the next slide
  next.classList.add( 'active' );
  goPrevNext();

  // Update the transform value for the next slide
  // next.style.transform = 'translateX(0%)';
});


prev.addEventListener('click', function() {
  // Get the active slide and the previous slide
  let activeSlide = document.querySelector('.slide.active');
  let [prev] = prevNext();

  // Remove the 'active' class from the active slide
  activeSlide.classList.remove('active');

  // Update the transform value for the active slide
  // activeSlide.style.transform = 'translateX(100%)';

  // Add the 'active' class to the previous slide
  prev.classList.add( 'active' );
  goPrevNext();

  // Update the transform value for the previous slide
  // prev.style.transform = 'translateX(0%)';
});

