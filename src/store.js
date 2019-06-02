
import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/Todos'

export default compose(
    applyMiddleware(thunk)
)(createStore)(reducer)
