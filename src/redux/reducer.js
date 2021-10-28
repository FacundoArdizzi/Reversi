import { CREATE_PLAYERS, CHANGE_TURN } from './actions';

const initialState = {
  playerA: { name: '', color: '' },
  playerB: { name: '', color: '' },
  turn: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLAYERS: return {
      ...state,
      playerA: action.payload[0],
      playerB: action.payload[1],
    };
    case CHANGE_TURN: return {
      ...state,
      turn: state.turn + 1,
    };
    default: return state;
  }
};

export default rootReducer;
