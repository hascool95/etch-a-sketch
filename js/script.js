
function resetGrid() {
    innerDiv.forEach(inner => inner.style.backgroundColor = 'black');
    sqPerSide = window.prompt('How many squares per side?', 16);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    buildGrid(sqPerSide);
    innerDiv = Array.from(document.querySelectorAll('.inner'));
    innerDiv.forEach(inner => inner.addEventListener('mouseover', changeColor));
}

function rainbowResetGrid() {
    innerDiv.forEach(inner => inner.style.backgroundColor = 'black');
    sqPerSide = window.prompt('How many squares per side?', 16);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    buildGrid(sqPerSide);
    innerDiv = Array.from(document.querySelectorAll('.inner'));
    innerDiv.forEach(inner => inner.addEventListener('mouseover', rainbowChangeColor));
}

function changeColor(e) {
    e.target.style.backgroundColor = "white";
}

function rainbowChangeColor(e) {
    if (e.target.style.backgroundColor != 'rgb(0, 0, 0)') { return };
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}

function buildGrid(squarePerSide) {
    let totalSides = squarePerSide ** 2;
    let sqLength = 800 / squarePerSide;
    for (let i = 0; i < totalSides; i++) {
        let div1 = document.createElement('div');
        div1.style.width = `${sqLength}px`;
        div1.style.height = `${sqLength}px`;
        div1.style.backgroundColor = 'rgb(0, 0, 0)';
        div1.classList.add('inner');
        container.appendChild(div1);
    }
}

const container = document.querySelector('.container');
let sqPerSide = 16;
buildGrid(sqPerSide);
let innerDiv = Array.from(document.querySelectorAll('.inner'));
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGrid);
const resetButton2 = document.getElementById('rainbowResetButton');
resetButton2.addEventListener('click', rainbowResetGrid);
innerDiv.forEach(inner => inner.addEventListener('mouseover', changeColor));
