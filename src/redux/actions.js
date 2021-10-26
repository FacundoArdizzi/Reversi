export const CREATE_PLAYER_A = 'createPlayerA';
export const CREATE_PLAYER_B = 'createPlayerB';

export const createPlayerA = (player) => ({
  type: CREATE_PLAYER_A,
  payload: player,
});

export const createPlayerB = (player) => ({
  type: CREATE_PLAYER_B,
  payload: player,
});
