const container = document.querySelector('.container');

function createGrid (rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        const div = document.createElement('div');
        container.style.gridTemplateRows = `repeat(${rows}, ifr)`;
        container.style.gridTemplateColumns = `repeat(${cols}, ifr)`;
        container.appendChild(div).classList.add('box');
    }
}

createGrid(16, 16);