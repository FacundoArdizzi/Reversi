import { CREATE_PLAYERS, CHANGE_TURN, SET_FIRST_TURN } from './actions';

const initialState = {
  playerA: { name: '', color: '' },
  playerB: { name: '', color: '' },
  turn: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLAYERS: return {
      ...state,
      playerA: action.payload[0],
      playerB: action.payload[1],
    };
    case SET_FIRST_TURN: return {
      ...state,
      turn: action.payload,
    };
    case CHANGE_TURN: return {
      ...state,
      turn: action.payload,
    };
    default: return state;
  }
};

export default rootReducer;
