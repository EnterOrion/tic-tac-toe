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
    document.getElementById("player1").style.backgroundColor = "rgba(255, 150, 64, 0.5)";
    for(let i=0; i<boardSquares.length; i++) {
        boardSquares[i].addEventListener("click", () => {
            if (_board[i] == " ") {
                if (gameController.currentPlayer.marker == "X") {
                    document.getElementById("player2").style.backgroundColor = "rgba(255, 150, 64, 0.5)";
                    document.getElementById("player1").style.backgroundColor = "beige"
                }
                else {
                    document.getElementById("player1").style.backgroundColor = "rgba(255, 150, 64, 0.5)";
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
                                    convert();
                                    document.getElementById("player2").style.backgroundColor = "beige";
                                    return;
                                }
                            }
                        if (_board[a] == "O")
                            {
                                o++;
                                if (o == 3) {
                                    winner = "Player 2";
                                    document.getElementById("header").innerHTML = `${winner} wins!`;
                                    convert();
                                    document.getElementById("player1").style.backgroundColor = "beige";
                                    return;
                                }
                            }
                        
                    }
                }
                let tie_checker = 0;
                for (l=0; l<_board.length; l++) {
                    if (_board[l] != " ")
                    {
                        tie_checker++;
                        if (tie_checker == 9)
                        {
                            document.getElementById("header").innerHTML = `Tie!`;
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

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", () => {
        clearBoard.clearSquare(_board);
        gameController.currentPlayer.marker = 'X';
    })


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

const clearBoard = (() => {
    clearSquare = (boardArray) => {
        let boardSquares = document.getElementsByClassName("square");
        for(let i=0; i<boardSquares.length; i++) {
            boardSquares[i].innerHTML = " ";
        }
        for (let n=0; n<boardArray.length; n++) {
            boardArray[n] = " ";
        }
        document.getElementById("player1").style.backgroundColor = "rgba(255, 150, 64, 0.5)";
        document.getElementById("player2").style.backgroundColor = "beige";
        document.getElementById("header").innerHTML =  "May the best player win!";

    }

    return {
        clearSquare
    }

})();