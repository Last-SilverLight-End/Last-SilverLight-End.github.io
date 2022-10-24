import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { ButtonHTMLAttributes } from 'react';
import styles from "@styles/tictacto.module.css";
// "../styles/main.module.css"

const Square = () => {

  return (
    <button className={styles.hello} >
      { }
    </button>

  )
}
const Board = () => {

  type GreetingsProps = {
    name: string;
  };

  const renderSquare = (props : number) => {
    return (<div>
      <Square />
      </div>
    );
  }
  
  const Greetings: React.FC<GreetingsProps> = ({ name }) => (
    <div>Hello, {name}</div>
  );

  const status = 'Next player: X';
  const userName = "ADf"
  const element = <Greetings name={userName} />;
  return (
    <div>
      {element};
      <div className="status">
        {status}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}
const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
}


export default Game;
