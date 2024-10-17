
// Declaring and initializing some constants for the input slider elements
const redSlider = document.querySelector('#red');
const greenSlider = document.querySelector('#green');
const blueSlider = document.querySelector('#blue');
const pageBody = document.querySelector('body');
const fontSizeSlider = document.querySelector('#font-size');
const paragraph = document.querySelector('p');
const h1 = document.querySelector('h1');
const labels = document.querySelectorAll('label');

// function to change the background color of the page based on the values of the sliders
function changeBackgroundColor() {
    pageBody.style.backgroundColor = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`;
    // if the background color is too bright, change the text color to black
    if (parseInt(redSlider.value) + parseInt(greenSlider.value) + parseInt(blueSlider.value) > 500) {
        paragraph.style.color = 'black';
        h1.style.color = 'black';
        labels.forEach(label => { // change the color of the labels to black
            label.style.color = 'black';
        });

    } else {
        paragraph.style.color = 'white';
        h1.style.color = 'white';
        labels.forEach(label => { // change the color of the labels to white.
            label.style.color = 'white';
        });
    }
}
// function to change the font size of the paragraph based on the value of the font size slider
function changeFontSize() {
    paragraph.style.fontSize = `${fontSizeSlider.value}px`;
}

// Adding event listeners to the sliders to listen for input events
redSlider.addEventListener('input', changeBackgroundColor);
greenSlider.addEventListener('input', changeBackgroundColor);
blueSlider.addEventListener('input', changeBackgroundColor);
fontSizeSlider.addEventListener('input', changeFontSize);
