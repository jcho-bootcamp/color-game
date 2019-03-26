// Initial number of squares
let numSquares = 6
// Generate random color
let colors = generateRandomColors(numSquares);

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
// Easy button select
let easyBtn = document.querySelector("#easyBtn");
// Hard button select
let hardBtn = document.querySelector("#hardBtn");

// Setting the random picked color to main color display
colorDisplay.textContent = pickedColor;

// Reset button event listener
reset.addEventListener("click", function () {
  // Generate random colors
  colors = generateRandomColors(numSquares);
  // Pick from new colors array
  pickedColor = randomColor();
  // Change colorDisplay to pickedColor
  colorDisplay.textContent = pickedColor;
  // Change all squares to newly generated randon colors
  for (let i = 0; i < squares.length; i++) {
    // Add initial colors
    squares[i].style.backgroundColor = colors[i];
  }
  // Change h1 background color to default
  h1.style.backgroundColor = "#232323";
});

// Easy button event listener
easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = randomColor();
  colorDisplay.textContent = pickedColor;

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

// Hard button event listener
hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = randomColor();
  colorDisplay.textContent = pickedColor;

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

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
