const sketchContainer = document.querySelector('#sketch-container');

//create dynamic sketch grid and assign class name to every div
const createGridReference = (function createGrid (divTotal=16) {
    sketchContainer.style.gridTemplateColumns = `repeat(${divTotal}, 1fr)`;
    sketchContainer.style.gridTemplateRows = `repeat(${divTotal}, 1fr)`;
    divTotal *= divTotal;

    for (let i=0; i<divTotal; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('color-on-hover');
        sketchContainer.appendChild(newDiv);
    }
    return createGrid;
})(16);

//get every square on the grid on colorOnHover
const colorOnHover = document.getElementById('sketch-container').getElementsByClassName('color-on-hover');

//add event listener to every div of a square that activates on hover
const colorGridReference = (function colorGrid (squareColorChoice=[0, 0, 255], colorType='static') {
    for (let i=0; i<colorOnHover.length; i++) {
        colorOnHover[i].addEventListener('mouseover', (e) => {
            if (colorType === 'random')
                squareColorChoice = randomRGB();

            e.target.style.backgroundColor = `rgb(${squareColorChoice[0]}, ${squareColorChoice[1]}, ${squareColorChoice[2]})`;
    });
    }
    return colorGrid;
})();

//set grid size by using prompt from the user
function setGridSize () {
    sketchContainer.textContent = '';

    let gridSize = prompt("Number of squares per side (1-100): ");

    //loop to check if user input is in range (1-100)
    let valid = false;
    do {
    if (gridSize>100) {
        gridSize = prompt("Too many squares, enter a number between 1-100: ");
        continue;
    } else if (gridSize<1) {
        gridSize = prompt("Too low, enter a number between 0-100: ");
        continue;
    } else {
        valid = true;
    }
    } while (!valid);

    createGridReference(gridSize);
    colorGridReference('blue');
}

function setSquareColoring (squareColorChoice='blue') {
    switch(squareColorChoice) {
        case 'red':
            colorGridReference([255, 0, 0]);
            break;
        case 'green':
            colorGridReference([0, 255, 0]);
            break;
        case 'blue':
            colorGridReference([0, 0, 255]);
            break;
        case 'random':
            squareColorChoice = randomRGB();
            colorGridReference(squareColorChoice, 'random');
            break;
    }
}

function randomRGB () {
    let red = randomRgbNumber();
    let green = randomRgbNumber();
    let blue = randomRgbNumber();
    
    return [red, green, blue];
}

function randomRgbNumber () {
    return Math.floor(Math.random() * 256);
}