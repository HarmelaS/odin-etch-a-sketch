// generates the cells for the grid canvas
function setBoardSize(size){
    let gridBoard = document.querySelector('.grid-box');
    let cells = gridBoard.querySelectorAll('div');
    cells.forEach((div) => div.remove());
    gridBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let boardArea = size * size;
    for (let i = 0; i < boardArea; i++) {
        let cell = document.createElement('div');
        cell.style.border = ".5px solid blue";
        gridBoard.insertAdjacentElement('beforeend', cell);
    }
}

// initializes the default grid size to 16x16
setBoardSize(16);

// lets user change size of grid board & sets max limit to 100 x 100 
function changeSize(input){
    // let setSizeButton  = document.querySelector()
    if (input > 100){
        alert("Box size can't exceed 100 cells! Select a lower number.")
    } else {
        setBoardSize(input);
    }
}



// add hover effect to grid divs [coming soon]


