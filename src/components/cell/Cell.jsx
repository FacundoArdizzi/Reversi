import React from 'react';
import styles from './Cell.module.css';
/* eslint-disable react/prop-types */

const Cell = ({ disk, id }) => (
  <div id={id} className={styles.cell}>{disk ? <div className={disk} /> : null}</div>
);

export default Cell;
