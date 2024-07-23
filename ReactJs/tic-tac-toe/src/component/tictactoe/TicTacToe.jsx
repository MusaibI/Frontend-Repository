import { useTicTacToe } from "../hooks/usetictactoe";
import "../../App.css";

function TicTacToe() {
  const { board, getStatusMessage, handleClick, resetButton } = useTicTacToe();
  return (
    <div className="game">
      <div className="content">
        {getStatusMessage()}
        <button className="reset" onClick={resetButton}>
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((b, index) => (
          <button
            className="cell"
            onClick={() => handleClick(index)}
            disabled={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
