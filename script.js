const btnClear = document.getElementById("btnClear");
const btnResize = document.getElementById("btnResize");
const gridContainer = document.getElementById("gridContainer");

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function resizeGrid() {
    let size = prompt("Enter the new size (1-100):");
    if (size !== null && size >= 1 && size <= 100) {
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        clearGrid();
        createGrid(size);
    }
}

function createGrid(size = 16) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = "black";
            });
            gridContainer.appendChild(cell);
        }
    }
}

btnClear.addEventListener("click", clearGrid);
btnResize.addEventListener("click", resizeGrid);

createGrid();
