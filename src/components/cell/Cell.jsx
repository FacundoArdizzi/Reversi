import React from 'react';
import styles from './Cell.module.css';
/* eslint-disable react/prop-types */

const Cell = ({ position }) => (
  <div position={position} className={styles.cell} />
);

export default Cell;
