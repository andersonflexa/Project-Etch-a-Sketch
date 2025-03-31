// Description: This script creates a grid of squares that change color and opacity on mouse hover.
// It also includes a button to prompt the user for a new grid size.

function createGrid(size) {
    const container = document.getElementById("gridContainer");
    container.innerHTML = "";
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.opacity = "0";

        square.addEventListener("mouseenter", () => {
            let opacity = parseFloat(square.style.opacity);
            if (opacity < 1) {
                square.style.opacity = opacity + 0.1;
            }
            square.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        });
        container.appendChild(square);
    }
}

function randomColor() {
    return Math.floor(Math.random() * 256);
}

function promptNewGrid() {
    let size = parseInt(prompt("Enter grid size (max 100):"));
    if (size > 100 || size < 1 || isNaN(size)) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
    createGrid(size);
}

createGrid(16);
