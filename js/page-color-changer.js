
// Declaring and initializing some constants for the input slider elements
const redSlider = document.querySelector('#red');
const greenSlider = document.querySelector('#green');
const blueSlider = document.querySelector('#blue');
const pageBody = document.querySelector('body');
const fontSizeSlider = document.querySelector('#font-size');
const paragraph = document.querySelector('p');

// function to change the background color of the page based on the values of the sliders
function changeBackgroundColor() {
    pageBody.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
}

function changeFontSize() {
    paragraph.style.fontSize = `${fontSizeSlider.value}px`;
}

// Adding event listeners to the sliders to listen for input events
redSlider.addEventListener('input', changeBackgroundColor);
greenSlider.addEventListener('input', changeBackgroundColor);
blueSlider.addEventListener('input', changeBackgroundColor);
fontSizeSlider.addEventListener('input', changeFontSize);
