//your JS code here. If required.
let container = document.querySelector(".container");
let input1 = document.getElementById("player1");
let input2 = document.getElementById("player2");
let labels = document.querySelectorAll("label");
let btn = document.getElementById("submit");
let message = document.querySelector(".message");
let board = document.querySelector(".board");
let playerInd = 1;
btn.addEventListener("click", onSubmit);
let player1 = "";
let player2 = "";
function onSubmit(){
    player1 = input1.value;
    player2 = input2.value;
    container.removeChild(input1);
    container.removeChild(input2);
    container.removeChild(btn);
    for ( let i =0; i < labels.length; i++ ){
        container.removeChild(labels[i]);
    }
    for ( let i = 1; i <=9; i++ ){
        let div = document.createElement("div");
        div.id = i;
        div.classList.add("cell");
        div.addEventListener("click", onCellClick);
        board.appendChild(div);
        message.innerText = `${player1}, you're up`;
        // console.log("Cell is added");
    }
    message.innerText = `${player1}, you're up`;
}

function onCellClick(event){
    if(event.target.innerText){
        return;
    }
    event.target.innerText = playerInd == 1 ? "X" : "O";
    if(gameWin()){
        if(playerInd == 1){
            // console.log("Player 1 won");
            message.innerText = `${player1} congratulations you won!`;
        }
        else{
            // console.log("Player 2 won");
            message.innerText = `${player2} congratulations you won!`;
        }
        // console.log("Game is over");
        removeClicks();
        return;
    }
    playerInd = 3 - playerInd;
    message.innerText = playerInd == 1 ? `${player1}, you're up` : `${player2}, you're up`;
}

function gameWin(){
    let cells = document.querySelectorAll(".cell");
    for ( let i = 0; i < 3; i++ ){
        if((cells[3*i].innerText !="")&&(cells[3*i].innerText === cells[3*i + 1].innerText) && (cells[3*i+1].innerText === cells[3*i + 2].innerText)){
            cells[3*i].style.backgroundColor = "purple";
            cells[3*i+1].style.backgroundColor = "purple";
            cells[3*i+2].style.backgroundColor = "purple";
            // console.log("Won in row");
            return true;

        }
        if((cells[i].innerText !="")&&(cells[i].innerText === cells[i + 3].innerText) && (cells[i+3].innerText === cells[i + 6].innerText)){
            cells[i].style.backgroundColor = "purple";
            cells[i+3].style.backgroundColor = "purple";
            cells[i+6].style.backgroundColor = "purple";
            // console.log("Won in column");
            return true;
        }
    }

    if((cells[0].innerText !="")&&(cells[0].innerText === cells[4].innerText) && (cells[4].innerText === cells[8].innerText)){
        cells[0].style.backgroundColor = "purple";
        cells[4].style.backgroundColor = "purple";
        cells[8].style.backgroundColor = "purple";
        // console.log("Won in d1");
        return true;
    }

    if((cells[2].innerText !="")&&(cells[2].innerText === cells[4].innerText) && (cells[4].innerText === cells[6].innerText)){
        cells[2].style.backgroundColor = "purple";
        cells[4].style.backgroundColor = "purple";
        cells[6].style.backgroundColor = "purple";
        // console.log("Won in d2");
        return true;
    }
}

function removeClicks(){
    let cells = document.querySelectorAll(".cell");
    for ( let i = 0; i < cells.length; i++ ){
        cells[i].removeEventListener("click", onCellClick);
    }
}