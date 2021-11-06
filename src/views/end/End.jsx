import React from 'react';
import { useSelector } from 'react-redux';
import Score from '../../components/score/Score';
import styles from './End.module.css';

const End = () => {
  const score = useSelector((state) => state.score);
  const playerA = useSelector((state) => state.playerA);
  const playerB = useSelector((state) => state.playerB);
  const winnerColor = score.white > score.black ? 'white' : 'black';
  const winnerPlayer = playerA.color === winnerColor ? playerA : playerB;
  console.log(winnerPlayer, winnerColor);

  return (
    <div className={styles.end}>
      <h3>{`${winnerPlayer.name} is the winner`}</h3>
      <Score />
    </div>
  );
};

export default End;
