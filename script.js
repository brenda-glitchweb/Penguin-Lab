const menuButton = document.getElementById("menuButton");
const menuLinks = document.getElementById("menuLinks");

menuButton.addEventListener("click", () => {
  menuLinks.classList.toggle("show");
});

setTimeout(() => {
  document.body.classList.remove("home-page");
}, 11000);


// REGISTRATION FORM
const registrationForm = document.getElementById("registrationForm");
const registerCard = document.querySelector(".register-card");
const entryScreen = document.getElementById("entryScreen");

registrationForm.addEventListener("submit", function(event) {
  event.preventDefault();

  registerCard.style.display = "none";

  document.querySelector(".hole").style.display = "none";
  document.querySelector(".penguin").style.display = "none";

  entryScreen.style.display = "flex";

  setTimeout(() => {
    entryScreen.style.display = "none";
    document.body.classList.remove("home-page");

    const labScreen = document.getElementById("labScreen");
    labScreen.style.display = "block";
    labScreen.style.overflowY = "auto";
    startPenguinBubbles();
  }, 3000);

});


// IMAGE SLIDER
const slidesTrack = document.querySelector(".slides-track");

let currentSlide = 0;

if (slidesTrack) {
  setInterval(() => {
    currentSlide++;

    slidesTrack.style.transform =
      "translateX(-" + (currentSlide * 16.6667) + "%)";

    if (currentSlide === 5) {
      setTimeout(() => {
        slidesTrack.style.transition = "none";
        currentSlide = 0;

        slidesTrack.style.transform = "translateX(0)";

        setTimeout(() => {
          slidesTrack.style.transition =
            "transform 0.8s ease-in-out";
        }, 50);

      }, 800);
    }

  }, 4000);
}

// OPEN LAB DIRECTLY
const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get("lab") === "true") {
  document.querySelector(".register-card").style.display = "none";
  document.querySelector(".hole").style.display = "none";
  document.querySelector(".penguin").style.display = "none";

  const labScreen = document.getElementById("labScreen");

  labScreen.style.display = "block";
  labScreen.style.overflowY = "auto";
  
  document.body.classList.remove("home-page");

  startPenguinBubbles();
}

// PENGUIN BUBBLE MESSAGES

const bubbles = document.querySelectorAll(".penguin-bubble");

let currentBubble = 0;


function startPenguinBubbles() {

  if (bubbles.length === 0) return;

  function showBubble() {

    // Hide all bubbles
    bubbles.forEach((bubble) => {
      bubble.classList.remove("show");
    });

    // Show one bubble
    bubbles[currentBubble].classList.add("show");

    currentBubble++;

    if (currentBubble >= bubbles.length) {
      currentBubble = 0;
    }

    // Hide after 8 seconds
    setTimeout(() => {
      bubbles.forEach((bubble) => {
        bubble.classList.remove("show");
      });
    }, 8000);
  }

  // First message after 10 seconds
  setTimeout(showBubble, 10000);

  // New message every 60 seconds
  setInterval(showBubble, 60000);
}