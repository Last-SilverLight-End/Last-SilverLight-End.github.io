import styles from "@styles/tictacto.module.css";

const Square = ({onClick,value}) => {

  return (
    <button 
      className={styles.square}
      onClick= {onClick}>
      {value}
    </button>
  );
}

export default Square;