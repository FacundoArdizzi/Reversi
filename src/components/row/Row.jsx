import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../cell/Cell';
import styles from './Row.module.css';

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

Row.PropTypes = {
  id: PropTypes.string,
};

export default Row;
