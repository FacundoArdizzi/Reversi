import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Score.module.css';

const Score = () => {
  const score = useSelector((state) => state.score);

  return (
    <div className={styles.score}>
      <div>
        <span>{score.white}</span>
        <p>white</p>
      </div>
      <div className={styles.divider} />
      <div>
        <span>{score.black}</span>
        <p>black</p>
      </div>
    </div>
  );
};

export default Score;
