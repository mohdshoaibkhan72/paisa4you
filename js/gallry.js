let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showNextSlide() {
  currentIndex++;

  // If at the end, reset to start (for infinite loop effect)
  if (currentIndex >= totalSlides - 2) {
    currentIndex = 0;
    document.querySelector(".slides").style.transition = "none"; // Disable transition for seamless looping
    document.querySelector(".slides").style.transform = "translateX(0px)";
  } else {
    document.querySelector(".slides").style.transition =
      "transform 1s ease-in-out"; // Re-enable transition
    const offset = -(currentIndex * 420); // Move by 420px (400px image width + 20px gap)
    document.querySelector(
      ".slides"
    ).style.transform = `translateX(${offset}px)`;
  }
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);
