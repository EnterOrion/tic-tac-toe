const gameBoard = (function() {
    let _board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    let boardSquares = document.getElementsByClassName("square");
    for(let i=0; i<boardSquares.length; i++) {
        boardSquares[i].addEventListener("click", () => {
            if (_board[i] == " ") {
                _board[i] = gameController.currentPlayer.marker;
                
            }
            convert();
            gameController.nextPlayer();
            gameController.playerDisplay();
        })
    }

    let convert = () => {
        for(let i=0; i<boardSquares.length; i++) {
            boardSquares[i].innerHTML = _board[i];
          }
    }

})();

const Player = (name, marker) => {
    return {name, marker}
}


const gameController = (() => {
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', 'O');
    
    let currentPlayer = player1;
   
    let playerDisplay = () => {
    if (currentPlayer == player1) {
        document.getElementById("player1").style.backgroundColor = "rgb(153, 153, 211, 0.5)";
        document.getElementById("player2").style.backgroundColor = "beige"
    }
    else {
        document.getElementById("player2").style.backgroundColor = "rgb(153, 153, 211, 0.5)";
        document.getElementById("player1").style.backgroundColor = "beige"
    }
    }
    playerDisplay();
    
    function nextPlayer() {
        if (this.currentPlayer == player1) {
            this.currentPlayer = player2;
            console.log(currentPlayer);
        }
        else {
            this.currentPlayer = player1;
            console.log(currentPlayer)
        }
    }

    return {
        currentPlayer,
        playerDisplay,
        nextPlayer
    }


})();
