import React, { useState } from "react";
import Tile from './Tile';
import { Header } from './Header';

function App() {
    const [board, setBoard] = useState(Array(9).fill(''));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    const [winningCombination, setWinningCombination] = useState([]);

    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const handleClick = (index) => {
        if (board[index] === '' && !winner) {
            const newBoard = board.slice();
            newBoard[index] = currentPlayer;
            setBoard(newBoard);
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
            checkWinner(newBoard);
        }
    };

    const checkWinner = (board) => {
        for (let line of winningLines) {
            const [a, b, c] = line;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                setWinningCombination(line);
                return;
            }
        }
        if (!board.includes('')) {
            setWinner('Draw');
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(''));
        setCurrentPlayer('X');
        setWinner(null);
        setWinningCombination([]);
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
            <Header />
            <div className="mt-6">
                {winner && (
                    <div className="text-center text-3xl font-bold mb-4">
                        {winner === 'Draw' ? 'It\'s a Draw!' : `Winner: ${winner}`}
                    </div>
                )}
                <div className={`grid grid-cols-3 gap-2 p-4 bg-gray-800 rounded-lg shadow-2xl shadow-gray-700 transition-transform ${winner ? 'transform -translate-y-6' : ''}`}>
                    {board.map((value, index) => (
                        <Tile key={index} value={value} onClick={() => handleClick(index)} isWinningTile={winningCombination.includes(index)} />
                    ))}
                    {winner && (
                        <div className={`absolute w-full h-full top-0 left-0 z-10 bg-black opacity-40 ${winner === 'Draw' ? '' : 'pointer-events-none'}`}></div>
                    )}
                </div>
                {winner && (
                    <div className="mt-4 text-center">
                        <button 
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
                            onClick={resetGame}
                        >
                            Reset Game
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
