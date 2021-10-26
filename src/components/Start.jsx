import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPlayerA, createPlayerB } from '../redux/actions';

const Start = () => {
  const dispatch = useDispatch();
  const [playerA, setPlayerA] = useState({ name: '', color: '' });
  const [playerB, setPlayerB] = useState({ name: '', color: '' });
  const [message, setMessage] = useState('');

  const validate = (a = playerA.name, b = playerB.name) => {
    if (!a || !b) return 'You need to assign a name for each player';
    if (a === b) return 'You need to assign a different name for each player';
    return 'ok';
  };

  const start = () => {
    const m = validate();
    const num = Math.random() * 100;
    if (num > 50) {
      setPlayerA({ ...playerA, color: 'black' });
      setPlayerB({ ...playerB, color: 'white' });
    } else {
      setPlayerA({ ...playerA, color: 'white' });
      setPlayerB({ ...playerB, color: 'black' });
    }
    if (m === 'ok') {
      dispatch(createPlayerA(playerA), createPlayerB(playerB));
    } else setMessage(m);
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
      <button type="button" onClick={start}>Start Game</button>
      {message.length > 12 ? <div><p>{message}</p></div> : null}
    </div>
  );
};

export default Start;
