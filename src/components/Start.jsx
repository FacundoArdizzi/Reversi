import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPlayers } from '../redux/actions';

const Start = () => {
  const dispatch = useDispatch();
  const [playerA, setPlayerA] = useState({ name: '', color: '' });
  const [playerB, setPlayerB] = useState({ name: '', color: '' });
  const [message, setMessage] = useState('');

  const handleClick = () => {
    const num = Math.random() * 100;
    if (num > 50) {
      setPlayerA({ ...playerA, color: 'black' });
      setPlayerB({ ...playerB, color: 'white' });
    } else {
      setPlayerA({ ...playerA, color: 'white' });
      setPlayerB({ ...playerB, color: 'black' });
    }
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
          onChange={(e) => setPlayerA({ name: e.target.value, color: '' })}
        />
        <input
          type="text"
          placeholder="Player B name"
          value={playerB.name}
          onChange={(e) => setPlayerB({ name: e.target.value, color: '' })}
        />
      </div>
      {playerA.name && playerB.name ? <Link to="/reversi" onClick={handleClick}>Start Game</Link>
        : <button onClick={() => setMessage('You need to create two players')} type="button">Start Game</button>}
      {message.length > 12 ? <div><p>{message}</p></div> : null}
    </div>
  );
};

export default Start;
