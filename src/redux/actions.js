export const CREATE_PLAYERS = 'createPlayers';
export const CHANGE_TURN = 'changeTurn';

export const createPlayers = (players) => (
  { type: CREATE_PLAYERS, payload: players }
);

export const changeTurn = () => (
  { type: CHANGE_TURN }
);
