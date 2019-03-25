let colors = generateRandomColors(6);

// Square select
let squares = document.querySelectorAll(".square");
// Main color select
let colorDisplay = document.getElementById("colorDisplay");
// Random picked color select
let pickedColor = randomColor();
// Secondary message select
let messageDisplay = document.querySelector("#message");
// h1 select
let h1 = document.querySelector("h1");
// Reset button select
let reset = document.querySelector("#reset");

// Reset button event listener
reset.addEventListener("click", function () {
  // Generate random colors
  colors = generateRandomColors(6);
  // Pick from new colors array
  pickedColor = randomColor();
  // Change colorDisplay to pickedColor
  colorDisplay.textContent = pickedColor.toUpperCase();
  // Change all squares to newly generated randon colors
  for (let i = 0; i < squares.length; i++) {
    // Add initial colors
    squares[i].style.backgroundColor = colors[i];
  }
  // Change h1 background color to default
  h1.style.backgroundColor = "#232323";
});


// Setting the random picked color to main color display
colorDisplay.textContent = pickedColor.toUpperCase();

// Loop over squares to check color
for (let i = 0; i < squares.length; i++) {
  // Add initial colors
  squares[i].style.backgroundColor = colors[i];

  // Add event listeners
  squares[i].addEventListener("click", function () {
    // Background color of clicked square
    let clickedColor = this.style.backgroundColor;
    // Picked color and clicked color checker
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      h1.style.backgroundColor = clickedColor;
      reset.textContent = "Play Again ?";
      correctColors(clickedColor);
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}

// Change all squares to correct color
function correctColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

// Pick one random color from colors array
function randomColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Generate random colors for colors array
function generateRandomColors(num) {
  let arr = [];
  // loop for num number of random rgb colors
  for (let i = 0; i < num; i++) {
    arr.push(rgbColor());
  }

  return arr;
}

// Generate random rgb colors to be pushed into colors array
function rgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}