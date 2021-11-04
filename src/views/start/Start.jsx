import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiErrorAlt } from 'react-icons/bi';
import { createPlayers } from '../../redux/actions';
import styles from './Start.module.css';
import logo from '../../img/reversi.png';

const Start = () => {
  const dispatch = useDispatch();
  const [playerA, setPlayerA] = useState({ name: '', color: '' });
  const [playerB, setPlayerB] = useState({ name: '', color: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const num = Math.random() * 100;
    if (num > 50) {
      setPlayerA({ ...playerA, color: 'black' });
      setPlayerB({ ...playerB, color: 'white' });
    } else {
      setPlayerA({ ...playerA, color: 'white' });
      setPlayerB({ ...playerB, color: 'black' });
    }
  }, []);

  const handleClick = () => {
    dispatch(createPlayers([playerA, playerB]));
  };

  const handlePlayerA = (e) => {
    setPlayerA({ ...playerA, name: e.target.value });
    if (playerB.name) setMessage('');
  };

  const handlePlayerB = (e) => {
    setPlayerB({ ...playerB, name: e.target.value });
    if (playerA.name) setMessage('');
  };

  return (
    <div className={styles.start}>
      <div>
        <img src={logo} alt="reversi" />
      </div>
      <div className={styles.inputs}>
        <input
          type="text"
          value={playerA.name}
          placeholder="Player A"
          onChange={handlePlayerA}
        />
        <input
          type="text"
          value={playerB.name}
          placeholder="Player B"
          onChange={handlePlayerB}
        />
      </div>
      {playerA.name && playerB.name ? (
        <Link onClick={handleClick} to="/reversi" className={styles.able}>
          Start Game
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => setMessage('You need to create two players')}
          className={styles.disable}
        >
          Start Game
        </button>
      )}
      {message ? (
        <div className={styles.message}>
          <BiErrorAlt />
          {message}
        </div>
      ) : null}
    </div>
  );
};

export default Start;
