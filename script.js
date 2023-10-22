// generates the cells for the grid canvas
function setBoardSize(size){
    let gridBoard = document.querySelector('.grid-box');
    let cells = gridBoard.querySelectorAll('div');
    cells.forEach((div) => div.remove());
    let clearButton = document.querySelector('#clearGrid');
    gridBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // takes board area & develops grid
    let boardArea = size * size;
    for (let i = 0; i < boardArea; i++) {
        let cell = document.createElement('div');
        cell.style.border = ".5px solid black";
        cell.style.backgroundColor = "white";
        gridBoard.insertAdjacentElement('beforeend', cell);

        // sets default black brush
        cell.addEventListener("mouseover", function(){
                cell.style.backgroundColor = "#3a3b3c";
        })
    
        // switches to blue brush
        let blueButton = document.querySelector("#blueColor");
        blueButton.addEventListener('click', () => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "blue";
            })
        })

        // switches to red brush
        let redButton = document.querySelector("#redColor");
        redButton.addEventListener('click', () => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "red";
            })
        })

        // switches to yellow brush
        let yellowButton = document.querySelector('#yellowColor');
        yellowButton.addEventListener('click', () => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "yellow";
            })
        })

        // switches to black brush 
        let blackButton = document.querySelector('#blackColor');
        blackButton.addEventListener('click', () => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "#3a3b3c";
            })
        })

        // clears grid canvas when clicked
        clearButton.addEventListener('click', () => {
        cell.style.backgroundColor = "white";
        })    


    }
}

// initializes the default grid size to 16x16
setBoardSize(16);

// lets user change size of grid board & sets max limit to 100 x 100 
function changeSize(input){
    if (input > 100){
        alert("Box size can't exceed 100 cells! Select a lower number.")
    } else {
        setBoardSize(input);
    }
}




