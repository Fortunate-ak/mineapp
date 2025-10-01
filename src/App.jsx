import {useState} from 'react';

function Square({value, onSquareClick}){
    return(
        <button className="square" onClick={onSquareClick} >
            {value}
        </button>
    );
}

function Board({xIsNext, squares, onPlay}) {
    function handleClick(i){
        if (calculateWinner(squares)|| squares[i]){
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext){
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner){
        status = 'Winner: ' + winner;
    } else {
        status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
        <div className="status">{status}</div>
        <div className="board-row">
            <square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <square value={squares[2]} onSquareClick={() => handleClick(2)} />
            <square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <square value={squares[5]} onSquareClick={() => handleClick(5)} />
            <square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        </>
    );
    }   

    export default function Game(){
        const [history, setHistory] = useState([Array(9).fill(null)]);
        const [currentMove, setCurrentMove] = useState(0);
        const xIsNext = currentMove % 2 === 0;
        const currentSquares = history[currentMove];

        function handlePlay(nextSquares){
          const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; 
          setHistory(nextHistory);
          setCurrentMove(nextHistory.length - 1);  
        }

        
    }
    

