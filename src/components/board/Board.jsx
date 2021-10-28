import React from 'react';
import Row from '../row/Row';
import styles from './Board.module.css';

const Board = () => {
  const board = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={styles.board}>
      <div className={styles.letters}>
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
        <span>E</span>
        <span>F</span>
        <span>G</span>
        <span>H</span>
      </div>
      {board.map((c, i) => (
        <div key={c} className={styles.row}>
          <span>{i + 1}</span>
          <Row id={c} />
        </div>
      ))}
    </div>
  );
};

export default Board;
