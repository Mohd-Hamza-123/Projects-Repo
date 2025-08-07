const boxes = Array.from(document.getElementsByClassName("box"))
const symbolArray = Array.from(document.getElementsByTagName("button"))
const winnerElement = document.getElementById("winner")
let symbol;
let computerSymbol;
let winner = null;

symbolArray.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        symbol = e.target.textContent
        if (symbol === 'O') {
            computerSymbol = 'X'
        } else {
            computerSymbol = 'O'
        }
        e.target.style.backgroundColor = 'black'
        e.target.style.color = 'white'
        // console.log(symbol)
    })
})

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {

        if (winner) return
        e.target.textContent = symbol
        checkWinner(boxes)
        if (winner) return
        computerMove()
        if (winner) return
        checkWinner(boxes)
    })
})

function computerMove() {
    const index = Math.floor(Math.random() * 9)
    // console.log(index)

    const isSpaceAvailable = boxes.findIndex((box, index) => {
        if (box.textContent === '') return true
        else false
    })

    if (isSpaceAvailable === -1) return

    if (boxes[index].textContent === '') {
        boxes[index].textContent = computerSymbol
        return
    } else {
        computerMove()
    }
}

const winningCombos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6]  // Diagonal top-right to bottom-left
];

function checkWinner(boxes) {
    const values = boxes.map((box, index) => box.textContent)
    // console.log(values)
    winningCombos.forEach((combo) => {
        if ((values[combo[0]] === "X") && (values[combo[1]] === "X") && values[combo[2]] === "X") {
            // console.log("X is winner")
            winner = "X"
            winnerElement.textContent = `Player ${winner} is winner`
            return true
        } else if ((values[combo[0]] === 'O') && (values[combo[1]] === "O") && (values[combo[2]] === "O")) {
            // console.log("O is winner")
            winner = "O"
            winnerElement.textContent = `Player ${winner} is winner`
            return true
        }
    })

    if (values.includes("") === false && winner === null) {
        winnerElement.textContent = `match is a tie`
        winner = 'Tie'
    }
}
