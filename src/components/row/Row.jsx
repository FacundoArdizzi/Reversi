import React from 'react';
import Cell from '../cell/Cell';
import styles from './Row.module.css';
/* eslint-disable react/prop-types */

const Row = ({ position }) => (
  <div className={styles.row}>
    <Cell position={`${position}A`} />
    <Cell position={`${position}B`} />
    <Cell position={`${position}C`} />
    <Cell position={`${position}D`} />
    <Cell position={`${position}E`} />
    <Cell position={`${position}F`} />
    <Cell position={`${position}G`} />
    <Cell position={`${position}H`} />
  </div>
);

export default Row;
