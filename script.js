document.addEventListener("DOMContentLoaded", () => {
    createGrid();
})

let grid = document.getElementById("grid");
let gridSize = document.querySelector("input").value;
const okButton = document.querySelector("button");
let isDrawing = false;

function clearGrid() {
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}

function createGrid(size = 16) {
    clearGrid();
    for (let i = 0; i < size * size; i++){
        const div = document.createElement("div");

        div.addEventListener("mouseover", () => {
            if (isDrawing){
                div.style.backgroundColor = "blue";
            }
        })
            
        div.addEventListener("mousedown", () => {
            isDrawing = true;
        })

        div.addEventListener("mouseup", () => {
            isDrawing = false;
        })
        
        div.classList.add("box");
        div.style.aspectRatio = "1/1";
        div.style.flexBasis = `calc( 100% / ${gridSize})`;
        grid.appendChild(div);
    }
}

okButton.addEventListener("click", () => {
    gridSize = document.querySelector("input").value;
    if (gridSize < 2 || gridSize > 100){
        alert("You need to choose number between 2 and 100.");
    } else {
        createGrid(gridSize);
    }
})

