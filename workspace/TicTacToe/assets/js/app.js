


let casesDivs = Array.prototype.slice.call(document.getElementsByClassName("ticTacToe")[0].children);
let message = document.getElementById('message');

let board = new Board();
let playerOne = true;

casesDivs.forEach(e => {
    e.onclick = () => {
        if (!board.isWon() && !board.isFull()) {
            let x = e.getAttribute('x');
            let y = e.getAttribute('y')
            let p = 'X';
            let c = board.getCase(x, y);

            if (c.isEmpty())
                if (!playerOne) {
                    p = 'O';
                    playerOne = true;
                } else {
                    playerOne = false;
                }
            board.jouer(p, x, y)

            e.children[0].innerHTML = c.content;

        }
        if (board.isWon() || board.isFull()) {
            message.innerHTML = "Game over"

            board.isWon() ? (playerOne ? message.innerHTML += " : player O won !" : message.innerHTML += " : player X won !") : message.innerHTML += " : draw"

        }
    }
});