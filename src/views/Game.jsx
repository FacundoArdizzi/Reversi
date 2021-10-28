import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTurn } from '../redux/actions';
import Board from '../components/board/Board';

const Game = () => {
  const dispatch = useDispatch();
  const playerA = useSelector((state) => state.playerA);
  const playerB = useSelector((state) => state.playerB);
  const turn = useSelector((state) => state.turn);

  return (
    <div>
      <h1>Reversi</h1>
      <div>
        <h3>Turn:</h3>
        <span>{turn % 2 === 0 ? playerB.name : playerA.name}</span>
        <span>{turn % 2 === 0 ? playerB.color : playerA.color}</span>
        <button type="button" onClick={() => dispatch(changeTurn())}>Skip Turn</button>
      </div>
      <Board />
    </div>
  );
};

export default Game;
