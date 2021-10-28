import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPlayers } from '../redux/actions';

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

  return (
    <div>
      <h1>Reversi</h1>
      <p>Enter players names</p>
      <div>
        <input
          type="text"
          placeholder="Player A name"
          value={playerA.name}
          onChange={(e) => setPlayerA({ ...playerA, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Player B name"
          value={playerB.name}
          onChange={(e) => setPlayerB({ ...playerB, name: e.target.value })}
        />
      </div>
      {playerA.name && playerB.name ? <Link onClick={handleClick} to="/reversi">Start Game</Link>
        : <button type="button" onClick={() => setMessage('You need to create two players')}>Start Game</button>}
      {message ? <div>{message}</div> : null}
    </div>
  );
};

export default Start;
