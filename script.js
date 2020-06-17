document.body.onload = generateGrid(16);

//Creates pixel trail on mouse over
document.querySelector('body').addEventListener('mouseover', checkBox);

document.getElementById('reset').addEventListener('click', () => {resetCanvas()});

function checkBox() {
    let box = document.getElementsByClassName('box');
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('mouseover', fillBox);
    }
}

function fillBox(e) {
    e.target.classList.remove('box');
    e.target.classList.add('box-fill');
}

function generateGrid(gridSide) {
    for (i = 0; i < gridSide*gridSide; i++) {
        const container = document.getElementById('grid-container');
        const newDiv = document.createElement('div');
        newDiv.className = 'box';
        container.appendChild(newDiv);
    }
}

function resetCanvas() {
    removeGrid();
    let gridSide = prompt("How many square per side do you want in your new grid","");
    generateGrid(gridSide);
    document.documentElement.style.setProperty('--grid-rows', gridSide);
    document.documentElement.style.setProperty('--grid-cols', gridSide);
}

function removeGrid() {
    const node = document.getElementById('grid-container');
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
}




/*
function resetGrid() {
    let box = document.getElementsByClassName('box-fill');
    const boxLen = box.length;
    for (let i = 0; i < boxLen; i++) {
        console.log(box.length);
        box[i].classList.add('box');
        console.log(box.length);
        box[i].classList.remove('box-fill');
    }
}

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = "blue";
        console.log('success');
    });
}

*/
