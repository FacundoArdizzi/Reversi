import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cell.module.css';

const Cell = ({ disk, id }) => (
  <div id={id} className={styles.cell}>{disk ? <div className={disk} /> : null}</div>
);

Cell.PropTypes = {
  id: PropTypes.string,
  disk: PropTypes.bool,
};

export default Cell;
