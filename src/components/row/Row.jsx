import React from 'react';
import Cell from '../cell/Cell';
import styles from './Row.module.css';
/* eslint-disable react/prop-types */

const Row = ({ id }) => (
  <div className={styles.row}>
    <Cell id={`${id}A`} />
    <Cell id={`${id}B`} />
    <Cell id={`${id}C`} />
    <Cell id={`${id}D`} />
    <Cell id={`${id}E`} />
    <Cell id={`${id}F`} />
    <Cell id={`${id}G`} />
    <Cell id={`${id}H`} />
  </div>
);

export default Row;
