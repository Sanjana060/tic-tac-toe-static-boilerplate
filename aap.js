document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    const message = document.getElementById('message');
    const button = document.getElementById('button');
    let currentPlayer = 'X';
    let moves = 0;
    let gameEnded = false;

    // Function to check for a win
    function checkWin() {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningConditions.some(condition => {
            const [a, b, c] = condition;
            return (
                boxes[a].textContent !== '' &&
                boxes[a].textContent === boxes[b].textContent &&
                boxes[a].textContent === boxes[c].textContent
            );
        });
    }

    // Function to handle click event on box
    function handleBoxClick(event) {
        const box = event.target;
        if (!gameEnded && box.textContent === '') {
            box.textContent = currentPlayer;
            moves++;
            if (checkWin()) {
                message.textContent = `${currentPlayer} wins!`;
                gameEnded = true;
            } else if (moves === 9) {
                message.textContent = "It's a draw!";
                gameEnded = true;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    // Add click event listener to each box
    boxes.forEach(box => {
        box.addEventListener('click', handleBoxClick);
    });

    // Function to reset the game
    function resetGame() {
        boxes.forEach(box => {
            box.textContent = '';
        });
        message.textContent = '';
        currentPlayer = 'X';
        moves = 0;
        gameEnded = false;
    }

    // Add click event listener to the "Play again" button
    button.addEventListener('click', resetGame);
});
