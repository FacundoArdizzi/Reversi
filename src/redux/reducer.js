import { CREATE_PLAYERS } from './actions';

const initialState = {
  playerA: { name: '', color: '' },
  playerB: { name: '', color: '' },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLAYERS: return {
      ...state,
      playerA: action.payload[0],
      playerB: action.payload[1],
    };
    default: return state;
  }
};

export default rootReducer;
