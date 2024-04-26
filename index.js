var currentPlayer = 'X';
var gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
var gameEnded = false;

function makeMove(row, col) {
    if (!gameEnded && gameBoard[row][col] === '') {
        gameBoard[row][col] = currentPlayer;
        document.getElementById('gameBoard').children[row].children[col].textContent = currentPlayer;
        checkWinner();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    for (var i = 0; i < 3; i++) {
        if (gameBoard[i][0] === currentPlayer && gameBoard[i][1] && currentPlayer & gameBoard[i][2] === currentPlayer) {
            showResult(currentPlayer + 'wins!');
            return;
        }
    }

    for (var j = 0; j < 3; j++) {
        if (gameBoard[0][j] === currentPlayer && gameBoard[1][j] && currentPlayer & gameBoard[2][j] === currentPlayer) {
            showResult(currentPlayer + 'wins!');
            return;
        }
    }

    if ((gameBoard[0][0] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][2] === currentPlayer) ||
        (gameBoard[0][2] === currentPlayer && gameBoard[1][1] === currentPlayer && gameBoard[2][0] === currentPlayer)) {
            showResult(currentPlayer + 'wins!');
            return;
        }

    var draw = true;
    for (var row = 0; row < 3; row++) {
        for (var col = 0; col < 3; col++) {
            if (gameBoard[row][col] === '') {
                draw = false;
                break;
            }
        }
        if (!draw) {
            break;
        }
    }    
    if (draw) {
        showResult('Draw!');
    }
}

function showResult(message) {
    document.getElementById('result').textContent = message;
    document.getElementById('result').style.display = 'block';
    document.getElementById('gameBoard').style.display = 'none';
    document.getElementById('newGameButton').style.display = 'block';
    gameEnded = true;
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    document.getElementById('result').style.display = 'none';
    document.getElementById('gameBoard').style.display = 'grid';
    document.getElementById('newGameButton').style.display = 'none';
    var cells = document.querySelectorAll('.cell');
    cells.forEach(function(cell) {
        cell.textContent = '';
    });
    gameEnded = false;
}

