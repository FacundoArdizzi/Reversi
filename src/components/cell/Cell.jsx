import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCell } from '../../redux/actions';
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

  return (
    <div position={position} className={styles.cell}>
      { status === 'white' ? <div className={styles.whiteDisk} /> : null }
      { status === 'black' ? <div className={styles.blackDisk} /> : null }
    </div>
  );
};

export default Cell;
