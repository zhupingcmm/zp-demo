
import {combineReducers} from 'redux-immutable';
import todoReducer from './Todos';
export default combineReducers({todoReducer:todoReducer})
