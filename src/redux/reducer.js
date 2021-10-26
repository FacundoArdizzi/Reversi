const initialState = {
    playerA: {name: '', color: ''}, 
    playerB: {name: '', color: ''},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TURN: return {
            ...state, 
            turn: action.payload,
        }
        default: return state;
    }
}

export default rootReducer;