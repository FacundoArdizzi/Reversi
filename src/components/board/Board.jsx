import React from 'react';
import Row from '../row/Row';
import styles from './Board.module.css';

const Board = () => {
  const board = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={styles.board}>
      {board.map((c) => (
        <Row key={c} id={c} />
      ))}
    </div>
  );
};

export default Board;
