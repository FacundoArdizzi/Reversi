import {
  CREATE_PLAYERS,
  CHANGE_TURN,
  SET_FIRST_TURN,
  SET_CELL,
  PUT_DISK,
} from './actions';

const initialState = {
  playerA: { name: '', color: '' },
  playerB: { name: '', color: '' },
  turn: {},
  board: {
    '1A': '',
    '1B': '',
    '1C': '',
    '1D': '',
    '1E': '',
    '1F': '',
    '1G': '',
    '1H': '',
    '2A': '',
    '2B': '',
    '2C': '',
    '2D': '',
    '2E': '',
    '2F': '',
    '2G': '',
    '2H': '',
    '3A': '',
    '3B': '',
    '3C': '',
    '3D': '',
    '3E': '',
    '3F': '',
    '3G': '',
    '3H': '',
    '4A': '',
    '4B': '',
    '4C': '',
    '4D': 'white',
    '4E': 'black',
    '4F': '',
    '4G': '',
    '4H': '',
    '5A': '',
    '5B': '',
    '5C': '',
    '5D': 'black',
    '5E': 'white',
    '5F': '',
    '5G': '',
    '5H': '',
    '6A': '',
    '6B': '',
    '6C': '',
    '6D': '',
    '6E': '',
    '6F': '',
    '6G': '',
    '6H': '',
    '7A': '',
    '7B': '',
    '7C': '',
    '7D': '',
    '7E': '',
    '7F': '',
    '7G': '',
    '7H': '',
    '8A': '',
    '8B': '',
    '8C': '',
    '8D': '',
    '8E': '',
    '8F': '',
    '8G': '',
    '8H': '',
  },
  gameRecord: {},
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
    case SET_CELL: return {
      ...state,
      board: { ...state.board, [action.payload]: 'active' },
    };
    case PUT_DISK: return {
      ...state,
      board: { ...state.board, [action.payload]: state.turn.color },
    };
    default: return state;
  }
};

export default rootReducer;
