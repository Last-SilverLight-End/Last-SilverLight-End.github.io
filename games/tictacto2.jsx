import styles from "@styles/tictacto.module.css";
import Board from './tictacto2components/Board';
function TicTacto () {


  const [history,setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [xIsNext,setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  
  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ] 
    for(let index =0; index<lines.length; index++){
      const[a,b,c] = lines[index];
      if(squares[a] && squares[a] === squares[b] && squares[c] === squares[a] ){
        return squares[a];
      }
    }
    return null;
  }
  


  return(
    <div className={styles.body}>
      <div className ={styles.game}>
        <div className= {styles.game_board}>
          <Board/>
        </div>
        <div className={styles.game_info}>
          game-info
          <div>{/*status*/}</div>
          <ol className="ol">{/* TODO */}</ol>
        </div>
      </div>
    </div>
  );
}

export default TicTacto;