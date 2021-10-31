import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTurn, setFirstTurn } from '../redux/actions';
import Board from '../components/board/Board';

const Game = () => {
  const dispatch = useDispatch();
  const playerA = useSelector((state) => state.playerA);
  const playerB = useSelector((state) => state.playerB);
  const turn = useSelector((state) => state.turn);
  useEffect(() => {
    const num = Math.random() * 100;
    if (num > 50) {
      dispatch(setFirstTurn(playerB));
    } else {
      dispatch(setFirstTurn(playerA));
    }
  }, []);
  const handleClick = () => {
    if (turn === playerA) {
      dispatch(changeTurn(playerB));
    } else {
      dispatch(changeTurn(playerA));
    }
  };

  return (
    <div>
      <div>
        <h3>Turn:</h3>
        <span>{turn.name}</span>
        <span>{turn.color}</span>
        <button type="button" onClick={handleClick}>Skip Turn</button>
      </div>
      <Board />
    </div>
  );
};

export default Game;
