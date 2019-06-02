
import { createStore, compose, applyMiddleware ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/Todos'
import {routerReducer} from 'react-router-redux';

// const reducer = combineReducers({
//     ...reducers,
//     routing: routerReducer
// });
export default compose(
    applyMiddleware(thunk)
)(createStore)(reducers)
