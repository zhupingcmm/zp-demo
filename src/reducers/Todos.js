import * as ActionType from '../actions/actionTypes';
import Immutable from 'immutable'

const initialState = Immutable.Map();
const handlers ={
    [ActionType.TODO]:todo,
    [ActionType.GET_TODO]:getTodo,
};

function todo(state,{value}={}) {
    return state.setIn(['todo'],value)
}

function getTodo(state,{response}={}) {
    return state.setIn(['getTodo'],response)
}

export default function todoReducer(state=initialState,action={}) {
    const handler = handlers[action.type];
    if (!handler) return state;
    return handler(state, action);
}
