const container = document.querySelector('.container');
const btnGray   = document.createElement('button');
const btnBlack  = document.createElement('button');
const btnRgb    = document.createElement('button');
const buttonContainer = document.querySelector('.buttons');

function createGrid (rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid purple';
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}

createGrid(16, 16);

function grayColor () {
    const boxes = container.querySelectorAll('.box')
    btnGray.textContent = 'GRAY';
    btnGray.addEventListener('click', () => {
        box.forEach(box => box.addEventListener('mouseover', () => {
            let randomNum = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${randomNum}, ${randomNum}, ${randomNum})`;
        }))
    })
    buttonContainer.appendChild(btnGray).classList.add('btn')
}
grayColor();

function blackColor () {
    const boxes = container.querySelectorAll('.box')
    btnBlack.textContent = 'BLACK';
    btnBlack.addEventListener('click', () => {
        box.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        }))
    })
    buttonContainer.appendChild(btnBlack).classList.add('btn')
}
blackColor();

function rgbColor () {
    const boxes = container.querySelectorAll('.box')
    btnRgb.textContent = 'RGB';
    btnRgb.addEventListener('click', () => {
        box.forEach(box => box.addEventListener('mouseover', () => {
            let red     = Math.floor(Math.random() * 255)
            let green   = Math.floor(Math.random() * 255)
            let blue    = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${red}, ${green}, ${blue})`;
        }))
    })
    buttonContainer.appendChild(btnRgb).classList.add('btn')
}
rgbColor();