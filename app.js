const slider= document.getElementById("size");
const slider_value = document.getElementById("slider_value");
const black_btn = document.getElementById("black_btn");
const rainbow_btn = document.getElementById("rainbow_btn");
const clear = document.getElementById("clear");
const sketchArea = document.querySelector(".sketchArea");
let currentSliderValue = slider.value; // current slider value
let drawingColor = 'black';
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let isDrawing = false;

// outputs the value of the slider to the html element

function createGrid(size) {
    // Clear the existing grid by removing all child elements
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }

    sketchArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        sketchArea.appendChild(cell);
    }
}

function handleDraw(e) {
    if (!isDrawing) return; // If the mouse button is not pressed, exit the function
  
    if (e.target.classList.contains('grid-cell')) {
      // Change the cell's background color or perform your drawing action here
      if (drawingColor === 'rainbow') {
        // Set the cell's background color to the current rainbow color
        e.target.style.backgroundColor = rainbowColors[currentColorIndex];
  
        // Move to the next rainbow color
        currentColorIndex = (currentColorIndex + 1) % rainbowColors.length;
    } 
      else {
        // If the drawing color is not rainbow, use the selected color
        e.target.style.backgroundColor = drawingColor;
      }
    }
  }
  
  // Event listener for when the mouse button is pressed down
  sketchArea.addEventListener('mousedown', () => {
    isDrawing = true;
  });
  
  // Event listener for when the mouse moves while the button is pressed
  sketchArea.addEventListener('mousemove', handleDraw);
  
  // Event listener for when the mouse button is released
  document.addEventListener('mouseup', () => {
    isDrawing = false;
  });
  
  // Event listener for the Black button to set drawing color to black
  black_btn.addEventListener('click', () => {
    drawingColor = 'black';
  });
  
  // Event listener for the Rainbow button to set drawing color to rainbow
  rainbow_btn.addEventListener('click', () => {
    currentColorIndex = 0; // Start from the first color in the rainbow sequence
    drawingColor = 'rainbow';
  });

slider.addEventListener("input", () => 
{slider_value.innerHTML = `${slider.value}x${slider.value}`;
currentSliderValue =  slider.value;
createGrid(currentSliderValue);});

clear.addEventListener('click', () => {sketchArea.innerHTML = ''; createGrid(currentSliderValue);});
