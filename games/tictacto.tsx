import React, {  useState } from 'react';
import styles from "@styles/tictacto.module.css";

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

function Square(props: any) {
  return (
    <button className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

const Board = (props: any) => {
  function renderSquare(i: any) {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }

  return (
    <div>
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
  const [track, setTrack] = useState({
    histories: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  }
  );

  const history = track.histories;
  const current = history[track.stepNumber];

  console.log("log1 " + track.stepNumber);
  console.log(history[track.stepNumber]);

  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  function handleClick(i: any) {
    const history = track.histories.slice(0, track.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = track.xIsNext ? "X" : "O";
    setTrack({
      histories: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !track.xIsNext
    });
  }

  function jumpTo(step: any) {

    let temp: boolean = false;

    temp = (step % 2) === 0 ? true : false;
    setTrack(track.stepNumber = step);
    setTrack({ ...track, stepNumber: step, xIsNext: temp });
    // xIsNext: (step % 2) === 0

  }

  console.log(track.stepNumber);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (track.stepNumber == 9) {
    status = " Tie! ";
  }
  else {
    status = "Next player: " + (track.xIsNext ? "X" : "O");
  }

  return (
    <div className={styles.game}>
      <div className={styles.game_board}>
        <Board
          squares={current.squares}
          onClick={(i: any) => handleClick(i)}
        />
      </div>
      <div className={styles.game_info}>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );

}

export default Game;


