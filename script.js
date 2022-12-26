const sketchContainer = document.querySelector('#sketch-container');

//create sketch grid and assign class name to all of them
const createGridReference = (function createGrid(divTotal=16) {
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
const colorGridReference = (function colorGrid () {
    for (let i=0; i<colorOnHover.length; i++) {
        colorOnHover[i].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'blue';
        });
    }
    return colorGrid;
})();

//set grid size by using prompt from the user
function setGridSize () {
    sketchContainer.textContent = '';
    let gridSize = prompt("Number of squares per side: ");
    createGridReference(gridSize);
    colorGridReference();
}