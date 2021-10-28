import React from 'react';
import { useSelector } from 'react-redux';

const Game = () => {
  const playerA = useSelector((state) => state.playerA);
  const playerB = useSelector((state) => state.playerB);
  console.log(playerA, playerB);

  return (
    <div>
      <h1>Reversi</h1>
    </div>
  );
};

export default Game;
