const gameBoard = (function() {
    let _board = ["x", "x", "x", "o", "o", "x", "o", "x", "x"];
    let boardSquares = document.getElementsByClassName("square");
    let convert = () => {
        for(let i=0; i<boardSquares.length; i++) {
            boardSquares[i].innerHTML = _board[i];
          }
    }
    convert();
})();

const Player = (name, marker) => {
    return {name, marker}
}
