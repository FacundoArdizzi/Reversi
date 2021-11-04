import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstTurn, changeTurn } from '../../redux/actions';
import styles from './Turn.module.css';

const Turn = () => {
  const dispatch = useDispatch();
  const playerA = useSelector((state) => state.playerA);
  const playerB = useSelector((state) => state.playerB);
  const turn = useSelector((state) => state.turn);
  useEffect(() => {
    const num = Math.random() * 100;
    if (num > 50) {
      dispatch(setFirstTurn(playerB));
    } else {
      dispatch(setFirstTurn(playerA));
    }
  }, []);
  const handleClick = () => {
    if (turn === playerA) {
      dispatch(changeTurn(playerB));
    } else {
      dispatch(changeTurn(playerA));
    }
  };

  return (
    <div className={styles.turn}>
      <p>{turn.name}</p>
      <span>{turn.color}</span>
      <button type="button" onClick={handleClick}>Skip Turn</button>
    </div>
  );
};

export default Turn;
