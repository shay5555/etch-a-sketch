const sketchContainer = document.querySelector('#sketch-container');

//create sketch grid and assign class name to all of them
(function createGrid(divTotal=16*16) {
    for (let i=0; i<divTotal; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('color-on-hover');
        sketchContainer.appendChild(newDiv);
    }
})();

//get every square on the grid
const colorOnHover = document.getElementById('sketch-container').getElementsByClassName('color-on-hover');

//add event listener to every div of a square that activates on hover
for (let i=0; i<colorOnHover.length; i++) {
    colorOnHover[i].addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'blue';
    });
}
