const sketchContainer = document.querySelector('#sketch-container');

function createDiv(divTotal=16*16) {
    for (let i=0; i<divTotal; i++) {
        const newDiv = document.createElement('div');
        sketchContainer.appendChild(newDiv);
    }
}

createDiv();