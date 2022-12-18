const gameBoard = (function() {
    let _board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    let winner;
    let winningBoard = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]
    ]
    let boardSquares = document.getElementsByClassName("square");
    document.getElementById("player1").style.backgroundColor = "rgb(153, 153, 211, 0.5)";
    for(let i=0; i<boardSquares.length; i++) {
        boardSquares[i].addEventListener("click", () => {
            if (_board[i] == " ") {
                if (gameController.currentPlayer.marker == "X") {
                    document.getElementById("player2").style.backgroundColor = "rgb(153, 153, 211, 0.5)";
                    document.getElementById("player1").style.backgroundColor = "beige"
                }
                else {
                    document.getElementById("player1").style.backgroundColor = "rgb(153, 153, 211, 0.5)";
                    document.getElementById("player2").style.backgroundColor = "beige"
                }
                _board[i] = gameController.currentPlayer.marker;
                for (n=0; n<8; n++) {
                    let x = 0;
                    let o = 0;
                    for(j=0; j<3; j++) {
                        let a = Number(winningBoard[n][j]);
                        if (_board[a] == "X")
                            {
                                x++;
                                if (x == 3) {
                                    winner = "Player 1";
                                    document.getElementById("header").innerHTML = `${winner} wins!`;
                                }
                            }
                        if (_board[a] == "O")
                            {
                                o++;
                                if (o == 3) {
                                    winner = "Player 2";
                                    document.getElementById("header").innerHTML = `${winner} wins!`;
                                }
                            }
                        
                    }
                }
                
                
            }
            convert();
            gameController.nextPlayer();
            
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
   
    function nextPlayer() {
        if (this.currentPlayer == player1) {
            this.currentPlayer = player2;
        }
        else {
            this.currentPlayer = player1;
        }
    }

    return {
        currentPlayer,
        nextPlayer
    }


})();
