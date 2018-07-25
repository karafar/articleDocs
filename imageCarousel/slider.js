var $carousel = $(".carousel-container")        // Carousel Container (div)
var $reel = $(".reel");                         // 'Reel' (ul)
var reelCounter = 1;                            // Intial position of slider
var first = 1;                                  // Marker for first element
var last = $reel.children('li').length;         // Marker of last element
var width = $carousel.css("width").slice(0,-2); // Width of container with 'px' removed
var bigWidth = width * (last - 1);              // Width * total number of images - 1. For cycling.

/* On a click of the right-arrow. Slide the image to the image on the right.
  If on the last image in the set, slide to the first. */
$(".right-arrow").click(function() {
    if(reelCounter === last) {
      reelCounter = first;
      $reel.animate({"margin-left":'+=' + bigWidth + "px"});
    } else {
      reelCounter++;
      $reel.animate({"margin-left":"-=" + width  + "px"});
    }
});

/*Same priciples as the previous function, but instead checks if we are on
  the first image.*/
$(".left-arrow").click( function() {
    if(reelCounter === first) {
      reelCounter = last;
      $reel.animate({"margin-left":"-=" + bigWidth + "px"})
    } else {
      reelCounter--;
      $reel.animate({"margin-left":"+=" + width  + "px"});
    }
});
