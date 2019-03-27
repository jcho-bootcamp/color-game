// Initial number of squares
let numSquares = 6
// Generate random color
let colors = [];
// Random picked color select
let pickedColor;

// Square select
let squares = document.querySelectorAll(".square");
// Main color select
let colorDisplay = document.getElementById("colorDisplay");
// Secondary message select
let messageDisplay = document.querySelector("#message");
// h1 select
let h1 = document.querySelector("h1");
// Reset button select
let reset = document.querySelector("#reset");
// Easy / Hard button selector
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  resetGame();
}

function setupModeButtons() {
  // Easy / Hard buttons event listener
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      // Remove highlight
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      // Add highlight
      this.classList.add("selected");
      // Decide between 3 and 6 squares
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      // Generate, pick and color squares
      resetGame();
    });
  };
}

function setupSquares() {
  // Loop over squares to check color
  for (let i = 0; i < squares.length; i++) {
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
}

function resetGame() {
  // Generate random colors
  colors = generateRandomColors(numSquares);
  // Pick from new colors array
  pickedColor = randomColor();
  // Change colorDisplay to pickedColor
  colorDisplay.textContent = pickedColor;
  // Change all squares to newly generated random colors
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      // Reset squares display to block
      squares[i].style.display = "block";
      // Add initial colors
      squares[i].style.backgroundColor = colors[i];
    } else {
      // Display none when no matching squares
      squares[i].style.display = "none";
    }
  }

  // Reset h1 background color to default
  h1.style.backgroundColor = "steelblue";
  // Reset message display to none
  messageDisplay.textContent = "";
  // Change reset button textContent
  reset.textContent = "New Colors";
}

// Reset button event listener
reset.addEventListener("click", function () {
  resetGame();
});

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
