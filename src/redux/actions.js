export const CREATE_PLAYERS = 'createPlayers';
export const SET_FIRST_TURN = 'setFirstTurn';
export const CHANGE_TURN = 'changeTurn';

export const createPlayers = (players) => (
  { type: CREATE_PLAYERS, payload: players }
);

export const setFirstTurn = (player) => (
  { type: SET_FIRST_TURN, payload: player }
);

export const changeTurn = (player) => (
  { type: CHANGE_TURN, payload: player }
);
