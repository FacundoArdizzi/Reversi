export const CREATE_PLAYERS = 'createPlayers';
export const SET_FIRST_TURN = 'setFirstTurn';
export const CHANGE_TURN = 'changeTurn';
export const SET_CELL = 'setCell';
export const PUT_DISK = 'putDisk';

export const createPlayers = (players) => (
  { type: CREATE_PLAYERS, payload: players }
);

export const setFirstTurn = (player) => (
  { type: SET_FIRST_TURN, payload: player }
);

export const changeTurn = (player) => (
  { type: CHANGE_TURN, payload: player }
);

export const setCell = (cell) => (
  { type: SET_CELL, payload: cell }
);

export const putDisk = (position) => (
  { type: PUT_DISK, payload: position }
);
