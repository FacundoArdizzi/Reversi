import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Score.module.css';

const Score = () => {
  const score = useSelector((state) => state.score);

  return (
    <div className={styles.score}>
      <span>{score.white}</span>
      <div />
      <span>{score.black}</span>
    </div>
  );
};

export default Score;
