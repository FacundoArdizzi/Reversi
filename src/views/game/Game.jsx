import React from 'react';
import Turn from '../../components/turn/Turn';
import Board from '../../components/board/Board';
import styles from './Game.module.css';
import Score from '../../components/score/Score';

const Game = () => (
  <div>
    <div className={styles.sideBar}>
      <Turn />
      <Score />
    </div>
    <div className={styles.main}>
      <Board />
    </div>
  </div>
);

export default Game;
