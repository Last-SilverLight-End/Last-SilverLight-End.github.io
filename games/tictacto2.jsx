import styles from "@styles/tictacto.module.css";
import Board from './tictacto2components/Board';
function TicTacto () {

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