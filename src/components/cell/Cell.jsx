import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCell,
  putDisk,
  changeTurn,
  updateScore,
} from '../../redux/actions';
import styles from './Cell.module.css';
/* eslint-disable react/prop-types */

const Cell = ({ position }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (position !== '4D' && position !== '4E' && position !== '5D' && position !== '5E') {
      dispatch(setCell(position));
    }
  }, []);
  const status = useSelector((state) => state.board[position]);
  const playerA = useSelector((state) => state.playerA);
  const playerB = useSelector((state) => state.playerB);
  const turn = useSelector((state) => state.turn);
  const b = useSelector((state) => state.board);
  const s = useSelector((state) => state.score);

  console.log(b, s);

  const handleClick = () => {
    console.log([position, turn.color]);
    dispatch(putDisk(position));
    dispatch(updateScore());
    if (turn === playerA) {
      dispatch(changeTurn(playerB));
    } else {
      dispatch(changeTurn(playerA));
    }
  };

  return (
    <div
      position={position}
      className={styles.cell}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex="0"
    >
      { status === 'white' ? <div className={styles.whiteDisk} /> : null }
      { status === 'black' ? <div className={styles.blackDisk} /> : null }
    </div>
  );
};

export default Cell;
