let numberOfSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {
    setupModeButtons();
    setupSquares();

    reset();
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', () => {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            modeButtons[i].classList.add('selected');
            modeButtons[i].textContent === 'Easy' ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener('click', () => {
            // grab color of clicked square
            let clickedColor = squares[i].style.background;
            // compare color to pickedColor
            console.log(clickedColor, pickedColor);
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct!';
                resetButton.textContent = 'Play Again?';
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                squares[i].style.background = '#232323';
                messageDisplay.textContent = 'Try Again';
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numberOfSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = 'New Colors';
    messageDisplay.textContent = '';
    // change colors of squares
    for (let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    h1.style.background = 'steelblue';
}

resetButton.addEventListener('click', () => {
    reset();
});

colorDisplay.textContent = pickedColor;

function changeColors(color) {
    // loop through all squares
    for (let i = 0; i < squares.length; i++) {
        // change each to match givin color
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    let arr = [];
    // repeat num times
    for (let i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor())
    }
    // return that array
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}