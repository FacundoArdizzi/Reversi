import { CREATE_PLAYER_A, CREATE_PLAYER_B } from './actions';

const initialState = {
  playerA: { name: '', color: '' },
  playerB: { name: '', color: '' },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLAYER_A: return {
      ...state,
      playerA: action.payload,
    };
    case CREATE_PLAYER_B: return {
      ...state,
      playerB: action.payload,
    };
    default: return state;
  }
};

export default rootReducer;
