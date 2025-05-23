const topLeft = document.getElementById("0");
const topMiddle = document.getElementById("1");
const topRight = document.getElementById("2");
const middleLeft = document.getElementById("3");
const middleMiddle = document.getElementById("4");
const middleRight = document.getElementById("5");
const bottomLeft = document.getElementById("6");
const bottomMiddle = document.getElementById("7");
const bottomRight = document.getElementById("8");
function checkWin() {
    const winConditions = [
        [topLeft, topMiddle, topRight],
        [middleLeft, middleMiddle, middleRight],
        [bottomLeft, bottomMiddle, bottomRight],
        [topLeft, middleLeft, bottomLeft],
        [topMiddle, middleMiddle, bottomMiddle],
        [topRight, middleRight, bottomRight],
        [topLeft, middleMiddle, bottomRight],
        [topRight, middleMiddle, bottomLeft],
    ];
    for (let condition of winConditions) {
        if (
            condition[0].innerHTML === "X" &&
            condition[1].innerHTML === "X" &&
            condition[2].innerHTML === "X" 
        ) {
            alert("You win!");
            resetGame();
        } else if (
            condition[0].innerHTML === "O" &&
            condition[1].innerHTML === "O" &&
            condition[2].innerHTML === "O"
        ) {
            alert("Computer wins!");
            resetGame();
        }
    }
    if (
        topLeft.innerHTML !== "" &&
        topMiddle.innerHTML !== "" &&
        topRight.innerHTML !== "" &&
        middleLeft.innerHTML !== "" &&
        middleMiddle.innerHTML !== "" &&
        middleRight.innerHTML !== "" &&
        bottomLeft.innerHTML !== "" &&
        bottomMiddle.innerHTML !== "" &&
        bottomRight.innerHTML !== ""
    ) {
        alert("It's a draw!");
        resetGame();
    }
}
function computerMove() {
    const emptyCells = [];
    for (let cell of [
        topLeft,
        topMiddle,
        topRight,
        middleLeft,
        middleMiddle,
        middleRight,
        bottomLeft,
        bottomMiddle,
        bottomRight,
    ]) {
        if (cell.innerHTML === "") {
            emptyCells.push(cell);
        }
    }
    if (emptyCells.length > 0) {
        const randomCell =
            emptyCells[Math.floor(Math.random() * emptyCells.length)];
        randomCell.innerHTML = "O";
        checkWin();
    }
}
topLeft.addEventListener("click", () => {
  if (topLeft.innerHTML === "") {
    topLeft.innerHTML = "X";
    checkWin();
    computerMove();
  }
});
topMiddle.addEventListener("click", () => {
  if (topMiddle.innerHTML === "") {
    topMiddle.innerHTML = "X";
    checkWin();
    computerMove();
  }
});
topRight.addEventListener("click", () => {
  if (topRight.innerHTML === "") {
    topRight.innerHTML = "X";
    checkWin();
    computerMove();
  }
});
middleLeft.addEventListener("click", () => {
  if (middleLeft.innerHTML === "") {
    middleLeft.innerHTML = "X";
    checkWin();
    computerMove();
  }
});
middleMiddle.addEventListener("click", () => {
  if (middleMiddle.innerHTML === "") {
    middleMiddle.innerHTML = "X";
    checkWin();
    computerMove();
  }
});
middleRight.addEventListener("click", () => {
  if (middleRight.innerHTML === "") {
    middleRight.innerHTML = "X";
    checkWin();
    computerMove();
  }
});
bottomLeft.addEventListener("click", () => {
  if (bottomLeft.innerHTML === "") {
    bottomLeft.innerHTML = "X";
    checkWin();
    computerMove();
  }
});
bottomMiddle.addEventListener("click", () => {
  if (bottomMiddle.innerHTML === "") {
    bottomMiddle.innerHTML = "X";
    checkWin();
    computerMove();
  }
});
bottomRight.addEventListener("click", () => {
  if (bottomRight.innerHTML === "") {
    bottomRight.innerHTML = "X";
    checkWin();
    computerMove();
  }
});