import type { AppProps } from 'next/app'
import React, { ButtonHTMLAttributes, useState } from 'react';
import styles from "@styles/tictacto.module.css";

// "../styles/main.module.css"

function Square(props: any) {
  return (
    <button className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function calculateWinner(squares: any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Board = () => {
  const [state, setState] = useState({ squares: Array(9).fill(null), xIsNext: true });

  function handleClick(i: any) {
    const squares = state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? 'X' : 'O';
    setState({
      squares: squares,
      xIsNext: !state.xIsNext,
    });
  }

  function renderSquare(i: any) {
    return (
      <Square
        value={state.squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  }
  const winner = calculateWinner(state.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className={styles.staus}>{status}</div>
      <div className={styles.board_row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={styles.board_row}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles.board_row}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}


const Game = () => {
  const [history,setHistory] = useState({squares: Array(9).fill(null) , xIsNext : true});
  return (
    <div className={styles.game}>
      <div className={styles.game_board}>
        <Board />
      </div>
      <div className={styles.game_info}>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;



