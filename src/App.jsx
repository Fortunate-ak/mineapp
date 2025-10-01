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
        status = 'Next Playe: ' + (xIsNext ? 'X' : 'O');
    
    }
    }        
    

