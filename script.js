const container = document.getElementById('container');

let rows = 16;
let cols = 16;
let psychedelicMode = false;

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);  
    const g = Math.floor(Math.random() * 256);  
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;  
};

const createGrid = () => {
    container.innerHTML = ''; 

    const containerWidth = 1000 - 20;
    const cellSize = containerWidth / cols; 

    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`; 
    container.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
    container.style.gap = '1px';
    container.style.border = '1px solid #000';  

    for (let i = 0; i < rows * cols; i++) {
        const newDiv = document.createElement('div');

        newDiv.className = 'grid-item';
        newDiv.style.width = `${cellSize}px`;
        newDiv.style.height = `${cellSize}px`;
        newDiv.style.border = '1px solid black';
        newDiv.style.display = 'flex';
        newDiv.style.justifyContent = 'center';
        newDiv.style.alignItems = 'center';
        newDiv.style.transition = 'background-color 0.3s';

        newDiv.addEventListener('mouseover', () => {
            if (psychedelicMode) {
                newDiv.style.backgroundColor = getRandomColor();
            } else {
                newDiv.style.backgroundColor = 'black';  
            }
        });

        container.appendChild(newDiv);
    }
};

createGrid();

const valueButton2 = document.getElementById('color');
valueButton2.addEventListener('click', () => {
    psychedelicMode = !psychedelicMode;
    if (psychedelicMode) {
        valueButton2.textContent = "NORMAL MODE"; 
    } else {
        valueButton2.textContent = "PSICODELIC MODE";
    }
});
